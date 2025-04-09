import { effect, inject, Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentConditions } from '../model/current-conditions.model';
import { ConditionsAndZip } from '../model/conditions-and-zip.model';
import { Forecast } from '../model/forecast.model';
import { LocationService } from './location.service';
import { startAutoRefresh } from '../utils/auto-refresh';
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

    // Internal reactive stores
    private currentConditions = signal<ConditionsAndZip[]>([]);
    private forecastCache = signal<Map<string, Forecast>>(new Map());

    // Reactive values exposed to UI
    public refreshCacheCycle = signal<number>(10000); // refresh interval in ms
    public loadingForecast = signal<boolean>(false);
    public loadingCurrentConditions = signal<boolean>(false);

    // Interval handlers for auto-refresh
    private currentConditionIntervalId: any;
    private forecastIntervalId: any;

    constructor() {
        // Restore initial state from localStorage
        this.restoreConditionsFromStorage();
        this.restoreForecastCache();

        // Load current conditions for all saved ZIPs
        this.locationService.locations().forEach(zip => this.addCurrentConditions(zip));

        // Setup reactive auto-refresh effect based on refresh interval
        effect(() => {
            const cycle = this.refreshCacheCycle();
            console.log(cycle); // Debug: show interval on change

            // Clear old intervals before restarting
            clearInterval(this.currentConditionIntervalId);
            clearInterval(this.forecastIntervalId);

            // Start new auto-refresh intervals
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
        });
    }

    /**
     * Add a ZIP code to the current conditions cache if not already present,
     * then trigger an API call to fetch its data.
     */
    public addCurrentConditions(zipcode: string): void {
        if (this.currentConditions().some(c => c.zip === zipcode)) {
            return;
        }
        this.forceRefreshCurrentConditions(zipcode);
    }

    /**
     * Fetch current weather conditions for a specific ZIP code.
     * Updates the signal and sets loading indicator.
     */
    private forceRefreshCurrentConditions(zipcode: string): void {
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

    /**
     * Fetch 5-day forecast for a ZIP code.
     * Updates the signal and stores result in localStorage.
     */
    public forceRefreshForecast(zip: string): void {
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

    /**
     * Remove current conditions for a given ZIP code.
     */
    public removeCurrentConditions(zipcode: string): void {
        const updated = this.currentConditions().filter(c => c.zip !== zipcode);
        this.updateCurrentConditions(updated);
    }

    /**
     * Expose current conditions as readonly signal to the UI.
     */
    public getCurrentConditions(): Signal<ConditionsAndZip[]> {
        return this.currentConditions.asReadonly();
    }

    /**
     * Expose forecast cache as readonly signal to the UI.
     */
    public getForeCastSignal(): Signal<Map<string, Forecast>> {
        return this.forecastCache.asReadonly();
    }

    /**
     * Return an icon path based on weather condition code.
     */
    public getWeatherIcon(id: number): string {
        if (id >= 200 && id <= 232) return WEATHER_ICON_BASE_URL + 'art_storm.png';
        if (id >= 501 && id <= 511) return WEATHER_ICON_BASE_URL + 'art_rain.png';
        if (id === 500 || (id >= 520 && id <= 531)) return WEATHER_ICON_BASE_URL + 'art_light_rain.png';
        if (id >= 600 && id <= 622) return WEATHER_ICON_BASE_URL + 'art_snow.png';
        if (id >= 801 && id <= 804) return WEATHER_ICON_BASE_URL + 'art_clouds.png';
        if (id === 741 || id === 761) return WEATHER_ICON_BASE_URL + 'art_fog.png';
        return WEATHER_ICON_BASE_URL + 'art_clear.png';
    }

    /**
     * Update signal and localStorage with latest conditions.
     */
    private updateCurrentConditions(conditions: ConditionsAndZip[]): void {
        this.currentConditions.set(conditions);
        localStorage.setItem(CURRENT_CONDITION_STORAGE_KEY, JSON.stringify(conditions));
    }

    /**
     * Restore current conditions from localStorage at app startup.
     */
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

    /**
     * Restore forecast cache from localStorage at app startup.
     */
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
