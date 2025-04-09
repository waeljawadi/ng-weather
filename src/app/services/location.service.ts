import { computed, Injectable, signal } from '@angular/core';

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

    // Adds a zipcode to the list if it doesn't already exist
    addLocation(zipcode: string): void {
        const existing = this.locationsSignal();
        if (existing.includes(zipcode)) return;

        const updated = [...existing, zipcode];
        this.updateLocations(updated);
    }

    // Removes a zipcode from the list
    removeLocation(zipcode: string): void {
        const updated = this.locationsSignal().filter(zip => zip !== zipcode);
        this.updateLocations(updated);
    }

    // Updates the signal and saves to localStorage
    private updateLocations(locations: string[]): void {
        this.locationsSignal.set(locations);
        localStorage.setItem(LOCATIONS, JSON.stringify(locations));
    }

    // Retrieves locations from localStorage or returns an empty array
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
