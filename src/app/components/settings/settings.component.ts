import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

    // Constant to convert between seconds and milliseconds
    private readonly MS_IN_SECOND = 1000;

    // Refresh interval shown in the UI (in seconds)
    refreshCacheCycle: number = 10;

    constructor(private weatherService: WeatherService) {
        // Read the saved interval (in ms) from localStorage
        const stored = Number(localStorage.getItem('refreshCacheCycle'));

        // If a valid value is found, convert to seconds for the input
        if (!isNaN(stored)) {
            this.refreshCacheCycle = stored / this.MS_IN_SECOND;
        } else {
            // If no value found, store the default value (10s → 10000ms)
            this.saveCycleToStorage();
        }

        // Update the signal in WeatherService with the current interval in ms
        this.weatherService.refreshCacheCycle.set(this.toMilliseconds(this.refreshCacheCycle));
    }

    // Called when the user updates the refresh interval
    setRefreshCycle(): void {
        this.saveCycleToStorage();
        this.weatherService.refreshCacheCycle.set(this.toMilliseconds(this.refreshCacheCycle));
    }

    // Save the current value (in seconds) to localStorage as milliseconds
    private saveCycleToStorage(): void {
        localStorage.setItem('refreshCacheCycle', String(this.toMilliseconds(this.refreshCacheCycle)));
    }

    // Utility method to convert seconds to milliseconds
    private toMilliseconds(seconds: number): number {
        return seconds * this.MS_IN_SECOND;
    }
}
