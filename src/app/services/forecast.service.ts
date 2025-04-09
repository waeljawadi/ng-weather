import { inject, Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../model/forecast.model';
import { FORECAST_STORAGE_KEY, WEATHER_API_BASE_URL, WEATHER_API_KEY } from '../constants/weather.constants';

@Injectable({ providedIn: 'root' })
export class ForecastService {
    private http = inject(HttpClient);

    private forecastCache = signal<Map<string, Forecast>>(new Map());
    public loading = signal<boolean>(false);

    constructor() {
        this.restoreFromStorage(); // Load cached forecasts from localStorage on init
    }

    // Returns the forecast cache as a readonly signal
    getForecastCache(): Signal<Map<string, Forecast>> {
        return this.forecastCache.asReadonly();
    }

    // Fetches the 5-day forecast for a given zip and updates cache + localStorage
    fetch(zip: string): void {
        this.loading.set(true);
        this.http.get<Forecast>(`${WEATHER_API_BASE_URL}/forecast/daily?zip=${zip},us&units=imperial&cnt=5&APPID=${WEATHER_API_KEY}`)
            .subscribe({
                next: (forecast) => {
                    const updated = new Map(this.forecastCache());
                    updated.set(zip, forecast);
                    this.forecastCache.set(updated);
                    localStorage.setItem(FORECAST_STORAGE_KEY, JSON.stringify(Object.fromEntries(updated)));
                },
                error: () => this.loading.set(false),
                complete: () => this.loading.set(false)
            });
    }

    // Restores forecast cache from localStorage
    private restoreFromStorage(): void {
        const raw = localStorage.getItem(FORECAST_STORAGE_KEY);
        if (!raw) return;
        try {
            const parsed = JSON.parse(raw) as Record<string, Forecast>;
            this.forecastCache.set(new Map(Object.entries(parsed)));
        } catch {
            this.forecastCache.set(new Map());
        }
    }
}
