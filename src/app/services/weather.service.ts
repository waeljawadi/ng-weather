import {effect, inject, Injectable, signal, Signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CurrentConditions} from '../model/current-conditions.model';
import {ConditionsAndZip} from '../model/conditions-and-zip.model';
import {Forecast} from '../model/forecast.model';
import {LocationService} from './location.service';
import {startAutoRefresh} from '../utils/auto-refresh';
import {
    CURRENT_CONDITION_STORAGE_KEY,
    FORECAST_STORAGE_KEY,
    WEATHER_API_BASE_URL,
    WEATHER_API_KEY,
    WEATHER_ICON_BASE_URL
} from '../constants/weather.constants';

@Injectable()
export class WeatherService {

    private http = inject(HttpClient);
    private locationService = inject(LocationService);

    private currentConditions = signal<ConditionsAndZip[]>([]);
    private forecastCache = signal<Map<string, Forecast>>(new Map());
    refreshCacheCycle = signal<number>(10000);
    loadingForecast = signal<boolean>(false);
    loadingCurrentConditions = signal<boolean>(false);



    private currentConditionIntervalId: any;
    private forecastIntervalId: any;

    constructor() {
        this.restoreConditionsFromStorage();
        this.restoreForecastCache();

        this.locationService.locations().forEach(zip => this.addCurrentConditions(zip));


        effect(() => {
            const cycle = this.refreshCacheCycle();
            console.log(cycle);
            clearInterval(this.currentConditionIntervalId);
            clearInterval(this.forecastIntervalId);


            this.currentConditionIntervalId = startAutoRefresh(
                () => this.locationService.locations(),
                (zip) => this.forceRefreshCurrentConditions(zip),
                Number(cycle)
            );

            this.forecastIntervalId = startAutoRefresh(
                () => this.locationService.locations(),
                (zip) => this.forceRefreshForecast(zip),
                Number(cycle)
            );
        })
    }

    addCurrentConditions(zipcode: string): void {
        if (this.currentConditions().some(c => c.zip === zipcode)) {
            return;
        }
        this.forceRefreshCurrentConditions(zipcode);
    }

    forceRefreshCurrentConditions(zipcode: string): void {
        this.loadingCurrentConditions.set(true);

        this.http.get<CurrentConditions>(
            `${WEATHER_API_BASE_URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WEATHER_API_KEY}`
        ).subscribe({
            next: (data) => {
                const updated = [
                    ...this.currentConditions().filter(c => c.zip !== zipcode),
                    { zip: zipcode, data }
                ];
                this.updateCurrentConditions(updated);
            },
            complete: () => this.loadingCurrentConditions.set(false),
            error: () => this.loadingCurrentConditions.set(false)
        });
    }

    forceRefreshForecast(zip: string): void {
        this.loadingForecast.set(true);

        this.http.get<Forecast>(
            `${WEATHER_API_BASE_URL}/forecast/daily?zip=${zip},us&units=imperial&cnt=5&APPID=${WEATHER_API_KEY}`
        ).subscribe({
            next: (forecast) => {
                const updated = new Map(this.forecastCache());
                updated.set(zip, forecast);
                this.forecastCache.set(updated);

                localStorage.setItem(
                    FORECAST_STORAGE_KEY,
                    JSON.stringify(Object.fromEntries(updated))
                );
            },
            complete: () => this.loadingForecast.set(false),
            error: () => this.loadingForecast.set(false)
        });
    }


    removeCurrentConditions(zipcode: string): void {
        const updated = this.currentConditions().filter(c => c.zip !== zipcode);
        this.updateCurrentConditions(updated);
    }

    getCurrentConditions(): Signal<ConditionsAndZip[]> {
        return this.currentConditions.asReadonly();
    }

    getForeCastSignal(): Signal<Map<string, Forecast>> {
        return this.forecastCache.asReadonly();
    }

    getWeatherIcon(id: number): string {
        if (id >= 200 && id <= 232) {
            return WEATHER_ICON_BASE_URL + 'art_storm.png';
        }
        if (id >= 501 && id <= 511) {
            return WEATHER_ICON_BASE_URL + 'art_rain.png';
        }
        if (id === 500 || (id >= 520 && id <= 531)) {
            return WEATHER_ICON_BASE_URL + 'art_light_rain.png';
        }
        if (id >= 600 && id <= 622) {
            return WEATHER_ICON_BASE_URL + 'art_snow.png';
        }
        if (id >= 801 && id <= 804) {
            return WEATHER_ICON_BASE_URL + 'art_clouds.png';
        }
        if (id === 741 || id === 761) {
            return WEATHER_ICON_BASE_URL + 'art_fog.png';
        }
        return WEATHER_ICON_BASE_URL + 'art_clear.png';
    }

    private updateCurrentConditions(conditions: ConditionsAndZip[]): void {
        this.currentConditions.set(conditions);
        localStorage.setItem(CURRENT_CONDITION_STORAGE_KEY, JSON.stringify(conditions));
    }

    private restoreConditionsFromStorage(): void {
        const raw = localStorage.getItem(CURRENT_CONDITION_STORAGE_KEY);
        if (raw) {
            try {
                const parsed: ConditionsAndZip[] = JSON.parse(raw);
                this.currentConditions.set(parsed);
            } catch (e) {
                console.warn('Invalid CURRENT_CONDITIONS data in localStorage', e);
                this.currentConditions.set([]);
            }
        }
    }

    private restoreForecastCache(): void {
        const raw = localStorage.getItem(FORECAST_STORAGE_KEY);
        if (raw) {
            try {
                const parsed: Record<string, Forecast> = JSON.parse(raw);
                this.forecastCache.set(new Map(Object.entries(parsed)));
            } catch (e) {
                console.warn('Invalid FORECASTS data in localStorage', e);
                this.forecastCache.set(new Map());
            }
        }
    }
}
