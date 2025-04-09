import {effect, inject, Injectable, signal} from '@angular/core';
import {ConditionService} from './condition.service';
import {ForecastService} from './forecast.service';
import {startAutoRefresh} from '../utils/auto-refresh';
import {WEATHER_ICON_BASE_URL} from '../constants/weather.constants';
import {LocationService} from './location.service';

@Injectable()
export class WeatherService {
    private conditionService = inject(ConditionService);
    private forecastService = inject(ForecastService);
    private locationService = inject(LocationService);

    public refreshCacheCycle = signal<number>(10000); // Refresh interval in milliseconds

    private currentConditionIntervalId: any;
    private forecastIntervalId: any;

    constructor() {
        this.initRefreshCycle();         // Step 1: Initialize refresh cycle from storage
        this.loadSavedConditions();      // Step 2: Load saved ZIPs and their conditions
        this.setupAutoRefresh();         // Step 3: Setup reactive refresh intervals
    }

    // Set refresh interval from localStorage or fallback to 10000 ms
    private initRefreshCycle(): void {
        const stored = localStorage.getItem('refreshCacheCycle');
        if (stored === null) {
            localStorage.setItem('refreshCacheCycle', '10000');
            this.refreshCacheCycle.set(10000);
        } else {
            this.refreshCacheCycle.set(Number(stored));
        }
    }

    // Add current conditions for all saved locations
    private loadSavedConditions(): void {
        this.locationService.locations().forEach(zip => this.addCurrentConditions(zip));
    }

    // Setup auto-refresh timers that react to refresh interval changes
    private setupAutoRefresh(): void {
        effect(() => {
            const interval = this.refreshCacheCycle();

            clearInterval(this.currentConditionIntervalId);
            clearInterval(this.forecastIntervalId);

            this.currentConditionIntervalId = startAutoRefresh(
                () => this.locationService.locations(),
                zip => this.forceRefreshCurrentConditions(zip),
                interval
            );

            this.forecastIntervalId = startAutoRefresh(
                () => this.locationService.locations(),
                zip => this.forceRefreshForecast(zip),
                interval
            );
        });
    }

    // Add current conditions for a ZIP code
    public addCurrentConditions(zip: string): void {
        this.conditionService.add(zip);
    }

    // Remove current conditions for a ZIP code
    public removeCurrentConditions(zip: string): void {
        this.conditionService.remove(zip);
    }

    // Force-refresh current conditions for a ZIP code
    public forceRefreshCurrentConditions(zip: string): void {
        this.conditionService.fetch(zip);
    }

    // Get current conditions signal
    public getCurrentConditions() {
        return this.conditionService.getConditions();
    }

    // Get loading state for current conditions
    public get loadingCurrentConditions() {
        return this.conditionService.loading;
    }

    // Force-refresh forecast for a ZIP code
    public forceRefreshForecast(zip: string): void {
        this.forecastService.fetch(zip);
    }

    // Get forecast signal (Map<zip, Forecast>)
    public getForeCastSignal() {
        return this.forecastService.getForecastCache();
    }

    // Get loading state for forecast
    public get loadingForecast() {
        return this.forecastService.loading;
    }

    // Get weather icon based on condition ID
    public getWeatherIcon(id: number): string {
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
}
