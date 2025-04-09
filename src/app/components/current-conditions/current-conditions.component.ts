import {Component, effect, inject, Signal} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {LocationService} from '../../services/location.service';
import {Router} from '@angular/router';
import {ConditionsAndZip} from '../../model/conditions-and-zip.model';

@Component({
    selector: 'app-current-conditions',
    templateUrl: './current-conditions.component.html',
    styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {
    private weatherService = inject(WeatherService);
    private router = inject(Router);
    protected locationService = inject(LocationService);
    loadingConditions = this.weatherService.loadingCurrentConditions;

    private fetchedZips = new Set<string>();
    protected currentConditionsByZip: Signal<ConditionsAndZip[]> =
        this.weatherService.getCurrentConditions();

    constructor() {
        effect(() => this.getLocations());
    }

    public get openTabId(): number {
        return Number(localStorage.getItem('openTabId') ?? 0);
    }

    public set openTabId(value: number) {
        localStorage.setItem('openTabId', String(value));
    }

    public removeCondition(index: number): void {
        const zipcode = this.currentConditionsByZip()[index]?.zip;
        if (!zipcode) return;

        this.removeLocationAndConditions(zipcode);
        this.adjustOpenTabId(index);
    }

    public showForecast(zipcode: string): void {
        this.router.navigate(['/forecast', zipcode]);
    }

    private removeLocationAndConditions(zipcode: string): void {
        this.locationService.removeLocation(zipcode);
        this.weatherService.removeCurrentConditions(zipcode);
    }

    private adjustOpenTabId(index: number): void {
        const currentTab = this.openTabId;

        if (index < currentTab) {
            this.openTabId = currentTab - 1;
        } else if (index === currentTab) {
            this.openTabId = 0;
        }
    }

    private getLocations(): void {
        this.locationService.locations()
            .filter(zip => !this.fetchedZips.has(zip))
            .forEach(zip => {
                this.weatherService.addCurrentConditions(zip);
                this.fetchedZips.add(zip);
            });
    }

    getTime(unix: number): string {
        return new Date(unix * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    getWeatherBackground(condition: string): string {
        switch (condition.toLowerCase()) {
            case 'clear':
                return 'bg-clear';
            case 'clouds':
                return 'bg-clouds';
            case 'rain':
            case 'drizzle':
                return 'bg-rain';
            case 'thunderstorm':
                return 'bg-thunderstorm';
            case 'snow':
                return 'bg-snow';
            case 'mist':
            case 'fog':
            case 'haze':
                return 'bg-mist';
            default:
                return 'bg-default';
        }
    }


}
