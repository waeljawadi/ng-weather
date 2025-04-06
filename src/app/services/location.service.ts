import {computed, Injectable, signal} from '@angular/core';

export const LOCATIONS: string = 'locations';

@Injectable()
export class LocationService {
    private locationsSignal = signal<string[]>([]);

    constructor() {
        const stored = this.getStoredLocations();
        if (stored.length) {
            this.locationsSignal.set(stored);
        }
    }

    readonly locations = computed(() => this.locationsSignal());

    addLocation(zipcode: string): void {
        const updated = [...this.locationsSignal(), zipcode];
        this.updateLocations(updated);
    }

    removeLocation(zipcode: string): void {
        const updated = this.locationsSignal().filter(zip => zip !== zipcode);
        this.updateLocations(updated);
    }

    private updateLocations(locations: string[]): void {
        this.locationsSignal.set(locations);
        localStorage.setItem(LOCATIONS, JSON.stringify(locations));
    }

    private getStoredLocations(): string[] {
        try {
            const raw = localStorage.getItem(LOCATIONS);
            return raw ? JSON.parse(raw) : [];
        } catch {
            console.warn('Failed to parse stored locations');
            return [];
        }
    }
}

