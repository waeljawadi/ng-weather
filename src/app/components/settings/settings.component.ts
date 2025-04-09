import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

    refreshCacheCycle: number;

    constructor(private weatherService: WeatherService) {
        const stored = localStorage.getItem('refreshCacheCycle');

        // If value exists, use it — otherwise default to 10000
        this.refreshCacheCycle = stored ? Number(stored) : 10000;

        // Save default value to localStorage if it didn't exist
        if (!stored) {
            localStorage.setItem('refreshCacheCycle', String(this.refreshCacheCycle));
        }

        // Update signal
        this.weatherService.refreshCacheCycle.set(this.refreshCacheCycle);
    }

    setRefreshCycle(): void {
        localStorage.setItem('refreshCacheCycle', String(this.refreshCacheCycle));
        this.weatherService.refreshCacheCycle.set(this.refreshCacheCycle);
    }
}
