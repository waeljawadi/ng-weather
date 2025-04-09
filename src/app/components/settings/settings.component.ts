import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

    refreshCacheCycle: number
    constructor(private weatherService: WeatherService) {
         this.refreshCacheCycle = Number(localStorage.getItem('refreshCacheCycle'));
        if (this.refreshCacheCycle) {
            this.weatherService.refreshCacheCycle.set(this.refreshCacheCycle);
        }
    }

    setRefreshCycle(): void {
        localStorage.setItem('refreshCacheCycle', String(this.refreshCacheCycle));
        this.weatherService.refreshCacheCycle.set(this.refreshCacheCycle);
    }
}
