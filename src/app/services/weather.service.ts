import {inject, Injectable, signal, effect, Signal} from '@angular/core';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CurrentConditions } from '../model/current-conditions.model';
import { ConditionsAndZip } from '../model/conditions-and-zip.model';
import { Forecast } from '../model/forecast.model';
import { LocationService } from './location.service';

@Injectable()
export class WeatherService {
    static URL = 'https://api.openweathermap.org/data/2.5';
    static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
    static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
    private static STORAGE_KEY = 'CURRENT_CONDITIONS';

    private locationService = inject(LocationService);
    private currentConditions = signal<ConditionsAndZip[]>([]);
    private http = inject(HttpClient);

    constructor() {
        this.restoreConditionsFromStorage();
        this.setupAutoRefresh();
    }

    addCurrentConditions(zipcode: string): void {
        this.http.get<CurrentConditions>(
            `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`
        ).subscribe(data => {
            const existing = this.currentConditions().filter(c => c.zip !== zipcode);
            const updated = [...existing, { zip: zipcode, data }];
            this.updateCurrentConditions(updated);
        });
    }

    removeCurrentConditions(zipcode: string): void {
        const updated = this.currentConditions().filter(c => c.zip !== zipcode);
        this.updateCurrentConditions(updated);
    }

    getCurrentConditions(): Signal<ConditionsAndZip[]> {
        return this.currentConditions.asReadonly();
    }

    getForecast(zipcode: string) {
        return this.http.get<Forecast>(
            `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`
        );
    }

    getWeatherIcon(id: number): string {
        if (id >= 200 && id <= 232) return WeatherService.ICON_URL + 'art_storm.png';
        if (id >= 501 && id <= 511) return WeatherService.ICON_URL + 'art_rain.png';
        if (id === 500 || (id >= 520 && id <= 531)) return WeatherService.ICON_URL + 'art_light_rain.png';
        if (id >= 600 && id <= 622) return WeatherService.ICON_URL + 'art_snow.png';
        if (id >= 801 && id <= 804) return WeatherService.ICON_URL + 'art_clouds.png';
        if (id === 741 || id === 761) return WeatherService.ICON_URL + 'art_fog.png';
        return WeatherService.ICON_URL + 'art_clear.png';
    }

    private updateCurrentConditions(conditions: ConditionsAndZip[]): void {
        this.currentConditions.set(conditions);
        localStorage.setItem(WeatherService.STORAGE_KEY, JSON.stringify(conditions));
    }

    private restoreConditionsFromStorage(): void {
        const raw = localStorage.getItem(WeatherService.STORAGE_KEY);
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

    private setupAutoRefresh(): void {
        interval(10000).subscribe(() => {
            const zips = this.locationService.locations();
            zips.forEach(zip => this.addCurrentConditions(zip));
        });
    }
}
