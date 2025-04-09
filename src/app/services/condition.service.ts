import { inject, Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentConditions } from '../model/current-conditions.model';
import { ConditionsAndZip } from '../model/conditions-and-zip.model';
import { CURRENT_CONDITION_STORAGE_KEY, WEATHER_API_BASE_URL, WEATHER_API_KEY } from '../constants/weather.constants';

@Injectable({ providedIn: 'root' })
export class ConditionService {
    private http = inject(HttpClient);

    private currentConditions = signal<ConditionsAndZip[]>([]);
    public loading = signal<boolean>(false);

    constructor() {
        this.restoreFromStorage();
    }

    getConditions(): Signal<ConditionsAndZip[]> {
        return this.currentConditions.asReadonly();
    }

    add(zip: string): void {
        if (this.currentConditions().some(c => c.zip === zip)) return;
        this.fetch(zip);
    }

    remove(zip: string): void {
        const updated = this.currentConditions().filter(c => c.zip !== zip);
        this.set(updated);
    }

    fetch(zip: string): void {
        this.loading.set(true);
        this.http.get<CurrentConditions>(`${WEATHER_API_BASE_URL}/weather?zip=${zip},us&units=imperial&APPID=${WEATHER_API_KEY}`)
            .subscribe({
                next: (data) => {
                    const updated = [
                        ...this.currentConditions().filter(c => c.zip !== zip),
                        { zip, data }
                    ];
                    this.set(updated);
                },
                error: () => this.loading.set(false),
                complete: () => this.loading.set(false)
            });
    }

    private set(value: ConditionsAndZip[]): void {
        this.currentConditions.set(value);
        localStorage.setItem(CURRENT_CONDITION_STORAGE_KEY, JSON.stringify(value));
    }

    private restoreFromStorage(): void {
        const raw = localStorage.getItem(CURRENT_CONDITION_STORAGE_KEY);
        if (!raw) return;
        try {
            const parsed = JSON.parse(raw) as ConditionsAndZip[];
            this.currentConditions.set(parsed);
        } catch {
            this.currentConditions.set([]);
        }
    }
}
