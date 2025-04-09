import { Component } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.scss']
})
export class ZipcodeEntryComponent {

  constructor(
      private locationService: LocationService,
      private weatherService: WeatherService
  ) {}

  /**
   * Called when the user submits a ZIP code.
   * - Adds the ZIP code to the list of saved locations
   * - Triggers a fetch of current weather conditions for that ZIP code
   */
  addLocation(zipcode: string): void {
    this.locationService.addLocation(zipcode);
    this.weatherService.addCurrentConditions(zipcode);
  }
}
