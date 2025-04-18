import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ZipcodeEntryComponent} from './components/zipcode-entry/zipcode-entry.component';
import {LocationService} from './services/location.service';
import {ForecastsListComponent} from './components/forecasts-list/forecasts-list.component';
import {WeatherService} from './services/weather.service';
import {CurrentConditionsComponent} from './components/current-conditions/current-conditions.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {TabulationMechanismModule} from './shared/tabulation-mechanism/tabulation-mechanism.module';
import {SettingsComponent} from './components/settings/settings.component';

@NgModule({
    declarations: [
        AppComponent,
        ZipcodeEntryComponent,
        ForecastsListComponent,
        CurrentConditionsComponent,
        MainPageComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        routing,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        TabulationMechanismModule
    ],
    providers: [LocationService, WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
