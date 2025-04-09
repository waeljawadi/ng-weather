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
  forecast: Signal<Forecast | undefined>;
  loading = this.weatherService.loadingForecast;

  constructor(protected weatherService: WeatherService, route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];

      // ✅ Create computed signal for this zip
      this.forecast = computed(() =>
          this.weatherService.getForeCastSignal()().get(this.zipcode)
      );

      // ✅ Optionally fetch forecast if not yet cached
      if (!this.forecast()) {
        this.weatherService.forceRefreshForecast(this.zipcode);
      }
    });
  }
}
