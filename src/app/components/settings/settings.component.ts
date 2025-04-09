import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

    private readonly MS_IN_SECOND = 1000;
    refreshCacheCycle: number = 10; // in seconds

    constructor(private weatherService: WeatherService) {
        const stored = Number(localStorage.getItem('refreshCacheCycle'));

        if (!isNaN(stored)) {
            this.refreshCacheCycle = stored / this.MS_IN_SECOND;
        } else {
            this.saveCycleToStorage();
        }

        this.weatherService.refreshCacheCycle.set(this.toMilliseconds(this.refreshCacheCycle));
    }

    setRefreshCycle(): void {
        this.saveCycleToStorage();
        this.weatherService.refreshCacheCycle.set(this.toMilliseconds(this.refreshCacheCycle));
    }

    private saveCycleToStorage(): void {
        localStorage.setItem('refreshCacheCycle', String(this.toMilliseconds(this.refreshCacheCycle)));
    }

    private toMilliseconds(seconds: number): number {
        return seconds * this.MS_IN_SECOND;
    }
}
