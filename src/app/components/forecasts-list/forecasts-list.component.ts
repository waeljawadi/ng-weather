import { Component, computed, Signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Forecast } from '../../model/forecast.model';

@Component({
    selector: 'app-forecasts-list',
    templateUrl: './forecasts-list.component.html',
    styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {
    zipcode: string;

    // Signal holding the forecast for the current ZIP code
    forecast: Signal<Forecast | undefined>;

    // Signal indicating if forecast data is currently loading
    loading = this.weatherService.loadingForecast;

    constructor(
        protected weatherService: WeatherService,
        route: ActivatedRoute
    ) {
        // Subscribe to route parameters to react when the ZIP code changes in the URL
        route.params.subscribe(params => {
            this.zipcode = params['zipcode'];

            // Create a reactive computed signal for the forecast of this ZIP code
            this.forecast = computed(() =>
                this.weatherService.getForeCastSignal()().get(this.zipcode)
            );

            // If forecast not already cached, fetch it from the API
            if (!this.forecast()) {
                this.weatherService.forceRefreshForecast(this.zipcode);
            }
        });
    }
}
