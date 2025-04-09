import { Component, computed, inject, Signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';
import { ConditionsAndZip } from '../../model/conditions-and-zip.model';

@Component({
    selector: 'app-current-conditions',
    templateUrl: './current-conditions.component.html',
    styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {
    // Services injected
    private weatherService = inject(WeatherService);
    private router = inject(Router);
    protected locationService = inject(LocationService);

    // Signal that tracks whether current conditions are loading
    loadingConditions = this.weatherService.loadingCurrentConditions;

    // Track which ZIP codes have already been fetched to avoid duplicates
    private fetchedZips = new Set<string>();

    // Sort conditions by ZIP order from locationService
    protected currentConditionsByZip: Signal<ConditionsAndZip[]> = computed(() => {
        const allConditions = this.weatherService.getCurrentConditions()();
        const zips = this.locationService.locations();

        return zips
            .map(zip => allConditions.find(c => c.zip === zip))
            .filter((c): c is ConditionsAndZip => !!c);
    });

    constructor() {
        // Reactive effect to automatically fetch data when locations change
         this.getLocations();
    }

    // Get currently open tab index from localStorage
    public get openTabId(): number {
        return Number(localStorage.getItem('openTabId') ?? 0);
    }

    // Save current open tab index to localStorage
    public set openTabId(value: number) {
        localStorage.setItem('openTabId', String(value));
    }

    // Remove a condition by its index in the list
    public removeCondition(index: number): void {
        const zipcode = this.currentConditionsByZip()[index]?.zip;
        if (!zipcode) return;

        this.removeLocationAndConditions(zipcode);
        this.adjustOpenTabId(index);
    }

    // Navigate to the forecast view for the given ZIP code
    public showForecast(zipcode: string): void {
        this.router.navigate(['/forecast', zipcode]);
    }

    // Remove ZIP from both location service and weather service
    private removeLocationAndConditions(zipcode: string): void {
        this.locationService.removeLocation(zipcode);
        this.weatherService.removeCurrentConditions(zipcode);
    }

    // Adjust the selected tab when a tab is removed
    private adjustOpenTabId(index: number): void {
        const currentTab = this.openTabId;

        if (index < currentTab) {
            this.openTabId = currentTab - 1;
        } else if (index === currentTab) {
            this.openTabId = 0;
        }
    }

    // Fetch current conditions for all known locations (that haven't been fetched yet)
    private getLocations(): void {
        this.locationService.locations()
            .filter(zip => !this.fetchedZips.has(zip))
            .forEach(zip => {
                this.weatherService.addCurrentConditions(zip);
                this.fetchedZips.add(zip);
            });
    }

    // Convert a Unix timestamp to a local time string
    getTime(unix: number): string {
        return new Date(unix * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // Map weather conditions to background class names for styling
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
