(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/zipcode-entry/zipcode-entry.component */ 3813);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/location.service */ 5434);
/* harmony import */ var _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forecasts-list/forecasts-list.component */ 726);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/weather.service */ 1125);
/* harmony import */ var _components_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/current-conditions/current-conditions.component */ 6263);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 4766);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _shared_tabulation_mechanism_tabulation_mechanism_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/tabulation-mechanism/tabulation-mechanism.module */ 3385);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/settings/settings.component */ 7866);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _components_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__.SettingsComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  }), _shared_tabulation_mechanism_tabulation_mechanism_module__WEBPACK_IMPORTED_MODULE_9__.TabulationMechanismModule],
  providers: [_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _services_weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/forecasts-list/forecasts-list.component */ 726);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 4766);



const appRoutes = [{
  path: '',
  component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 6263:
/*!*******************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 2923);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 4207);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/location.service */ 5434);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    // Services injected
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    // Signal that tracks whether current conditions are loading
    this.loadingConditions = this.weatherService.loadingCurrentConditions;
    // Track which ZIP codes have already been fetched to avoid duplicates
    this.fetchedZips = new Set();
    // Sort conditions by ZIP order from locationService
    this.currentConditionsByZip = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => {
      const allConditions = this.weatherService.getCurrentConditions()();
      const zips = this.locationService.locations();
      return zips.map(zip => allConditions.find(c => c.zip === zip)).filter(c => !!c);
    });
    // Reactive effect to automatically fetch data when locations change
    this.getLocations();
  }
  // Get currently open tab index from localStorage
  get openTabId() {
    return Number(localStorage.getItem('openTabId') ?? 0);
  }
  // Save current open tab index to localStorage
  set openTabId(value) {
    localStorage.setItem('openTabId', String(value));
  }
  // Remove a condition by its index in the list
  removeCondition(index) {
    const zipcode = this.currentConditionsByZip()[index]?.zip;
    if (!zipcode) return;
    this.removeLocationAndConditions(zipcode);
    this.adjustOpenTabId(index);
  }
  // Navigate to the forecast view for the given ZIP code
  showForecast(zipcode) {
    this.router.navigate(['/forecast', zipcode]);
  }
  // Remove ZIP from both location service and weather service
  removeLocationAndConditions(zipcode) {
    this.locationService.removeLocation(zipcode);
    this.weatherService.removeCurrentConditions(zipcode);
  }
  // Adjust the selected tab when a tab is removed
  adjustOpenTabId(index) {
    const currentTab = this.openTabId;
    if (index < currentTab) {
      this.openTabId = currentTab - 1;
    } else if (index === currentTab) {
      this.openTabId = 0;
    }
  }
  // Fetch current conditions for all known locations (that haven't been fetched yet)
  getLocations() {
    this.locationService.locations().filter(zip => !this.fetchedZips.has(zip)).forEach(zip => {
      this.weatherService.addCurrentConditions(zip);
      this.fetchedZips.add(zip);
    });
  }
  // Convert a Unix timestamp to a local time string
  getTime(unix) {
    return new Date(unix * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  // Map weather conditions to background class names for styling
  getWeatherBackground(condition) {
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
  static #_ = this.ctorParameters = () => [];
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 726:
/*!***********************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 5422);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 8314);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    // Signal indicating if forecast data is currently loading
    this.loading = this.weatherService.loadingForecast;
    // Subscribe to route parameters to react when the ZIP code changes in the URL
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      // Create a reactive computed signal for the forecast of this ZIP code
      this.forecast = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => this.weatherService.getForeCastSignal()().get(this.zipcode));
      // If forecast not already cached, fetch it from the API
      if (!this.forecast()) {
        this.weatherService.forceRefreshForecast(this.zipcode);
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 4766:
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 7866:
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component.html?ngResource */ 9645);
/* harmony import */ var _settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component.css?ngResource */ 2328);
/* harmony import */ var _settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let SettingsComponent = class SettingsComponent {
  constructor(weatherService) {
    this.weatherService = weatherService;
    // Constant to convert between seconds and milliseconds
    this.MS_IN_SECOND = 1000;
    // Refresh interval shown in the UI (in seconds)
    this.refreshCacheCycle = 10;
    // Read the saved interval (in ms) from localStorage
    const stored = Number(localStorage.getItem('refreshCacheCycle'));
    // If a valid value is found, convert to seconds for the input
    if (!isNaN(stored)) {
      this.refreshCacheCycle = stored / this.MS_IN_SECOND;
    } else {
      // If no value found, store the default value (10s → 10000ms)
      this.saveCycleToStorage();
    }
    // Update the signal in WeatherService with the current interval in ms
    this.weatherService.refreshCacheCycle.set(this.toMilliseconds(this.refreshCacheCycle));
  }
  // Called when the user updates the refresh interval
  setRefreshCycle() {
    this.saveCycleToStorage();
    this.weatherService.refreshCacheCycle.set(this.toMilliseconds(this.refreshCacheCycle));
  }
  // Save the current value (in seconds) to localStorage as milliseconds
  saveCycleToStorage() {
    localStorage.setItem('refreshCacheCycle', String(this.toMilliseconds(this.refreshCacheCycle)));
  }
  // Utility method to convert seconds to milliseconds
  toMilliseconds(seconds) {
    return seconds * this.MS_IN_SECOND;
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }];
};
SettingsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-settings',
  template: _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SettingsComponent);


/***/ }),

/***/ 3813:
/*!*********************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 2647);
/* harmony import */ var _zipcode_entry_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry.component.scss?ngResource */ 6347);
/* harmony import */ var _zipcode_entry_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zipcode_entry_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/location.service */ 5434);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor(locationService, weatherService) {
    this.locationService = locationService;
    this.weatherService = weatherService;
  }
  /**
   * Called when the user submits a ZIP code.
   * - Adds the ZIP code to the list of saved locations
   * - Triggers a fetch of current weather conditions for that ZIP code
   */
  addLocation(zipcode) {
    this.locationService.addLocation(zipcode);
    this.weatherService.addCurrentConditions(zipcode);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService
  }, {
    type: _services_weather_service__WEBPACK_IMPORTED_MODULE_3__.WeatherService
  }];
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_zipcode_entry_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ZipcodeEntryComponent);


/***/ }),

/***/ 5995:
/*!************************************************!*\
  !*** ./src/app/constants/weather.constants.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURRENT_CONDITION_STORAGE_KEY: () => (/* binding */ CURRENT_CONDITION_STORAGE_KEY),
/* harmony export */   FORECAST_STORAGE_KEY: () => (/* binding */ FORECAST_STORAGE_KEY),
/* harmony export */   WEATHER_API_BASE_URL: () => (/* binding */ WEATHER_API_BASE_URL),
/* harmony export */   WEATHER_API_KEY: () => (/* binding */ WEATHER_API_KEY),
/* harmony export */   WEATHER_ICON_BASE_URL: () => (/* binding */ WEATHER_ICON_BASE_URL)
/* harmony export */ });
const WEATHER_API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = '5a4b2d457ecbef9eb2a71e480b947604';
const WEATHER_ICON_BASE_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
const CURRENT_CONDITION_STORAGE_KEY = 'CURRENT_CONDITIONS';
const FORECAST_STORAGE_KEY = 'FORECASTS';

/***/ }),

/***/ 7391:
/*!***********************************************!*\
  !*** ./src/app/services/condition.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConditionService: () => (/* binding */ ConditionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _constants_weather_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/weather.constants */ 5995);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ConditionService = class ConditionService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.restoreFromStorage(); // Load stored conditions on initialization
  }
  // Returns the current conditions as a readonly signal
  getConditions() {
    return this.currentConditions.asReadonly();
  }
  // Adds a zipcode and fetches its conditions if not already present
  add(zip) {
    if (this.currentConditions().some(c => c.zip === zip)) return;
    this.fetch(zip);
  }
  // Removes a zipcode from the conditions list
  remove(zip) {
    const updated = this.currentConditions().filter(c => c.zip !== zip);
    this.set(updated);
  }
  // Fetches weather conditions from the API for a given zipcode
  fetch(zip) {
    this.loading.set(true);
    this.http.get(`${_constants_weather_constants__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API_BASE_URL}/weather?zip=${zip},us&units=imperial&APPID=${_constants_weather_constants__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API_KEY}`).subscribe({
      next: data => {
        const updated = [...this.currentConditions().filter(c => c.zip !== zip), {
          zip,
          data
        }];
        this.set(updated);
      },
      error: () => this.loading.set(false),
      complete: () => this.loading.set(false)
    });
  }
  // Updates the signal and persists it in localStorage
  set(value) {
    this.currentConditions.set(value);
    localStorage.setItem(_constants_weather_constants__WEBPACK_IMPORTED_MODULE_0__.CURRENT_CONDITION_STORAGE_KEY, JSON.stringify(value));
  }
  // Restores previously saved conditions from localStorage
  restoreFromStorage() {
    const raw = localStorage.getItem(_constants_weather_constants__WEBPACK_IMPORTED_MODULE_0__.CURRENT_CONDITION_STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      this.currentConditions.set(parsed);
    } catch {
      this.currentConditions.set([]);
    }
  }
  static #_ = this.ctorParameters = () => [];
};
ConditionService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], ConditionService);


/***/ }),

/***/ 524:
/*!**********************************************!*\
  !*** ./src/app/services/forecast.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastService: () => (/* binding */ ForecastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _constants_weather_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/weather.constants */ 5995);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ForecastService = class ForecastService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.forecastCache = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(new Map());
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.restoreFromStorage(); // Load cached forecasts from localStorage on init
  }
  // Returns the forecast cache as a readonly signal
  getForecastCache() {
    return this.forecastCache.asReadonly();
  }
  // Fetches the 5-day forecast for a given zip and updates cache + localStorage
  fetch(zip) {
    this.loading.set(true);
    this.http.get(`${_constants_weather_constants__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API_BASE_URL}/forecast/daily?zip=${zip},us&units=imperial&cnt=5&APPID=${_constants_weather_constants__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API_KEY}`).subscribe({
      next: forecast => {
        const updated = new Map(this.forecastCache());
        updated.set(zip, forecast);
        this.forecastCache.set(updated);
        localStorage.setItem(_constants_weather_constants__WEBPACK_IMPORTED_MODULE_0__.FORECAST_STORAGE_KEY, JSON.stringify(Object.fromEntries(updated)));
      },
      error: () => this.loading.set(false),
      complete: () => this.loading.set(false)
    });
  }
  // Restores forecast cache from localStorage
  restoreFromStorage() {
    const raw = localStorage.getItem(_constants_weather_constants__WEBPACK_IMPORTED_MODULE_0__.FORECAST_STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      this.forecastCache.set(new Map(Object.entries(parsed)));
    } catch {
      this.forecastCache.set(new Map());
    }
  }
  static #_ = this.ctorParameters = () => [];
};
ForecastService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], ForecastService);


/***/ }),

/***/ 5434:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const LOCATIONS = 'locations';
let LocationService = class LocationService {
  constructor() {
    this.locationsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    this.locations = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.locationsSignal());
    const stored = this.getStoredLocations();
    if (stored.length) {
      this.locationsSignal.set(stored);
    }
  }
  // Adds a zipcode to the list if it doesn't already exist
  addLocation(zipcode) {
    const existing = this.locationsSignal();
    if (existing.includes(zipcode)) return;
    const updated = [...existing, zipcode];
    this.updateLocations(updated);
  }
  // Removes a zipcode from the list
  removeLocation(zipcode) {
    const updated = this.locationsSignal().filter(zip => zip !== zipcode);
    this.updateLocations(updated);
  }
  // Updates the signal and saves to localStorage
  updateLocations(locations) {
    this.locationsSignal.set(locations);
    localStorage.setItem(LOCATIONS, JSON.stringify(locations));
  }
  // Retrieves locations from localStorage or returns an empty array
  getStoredLocations() {
    try {
      const raw = localStorage.getItem(LOCATIONS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      console.warn('Failed to parse stored locations');
      return [];
    }
  }
  static #_ = this.ctorParameters = () => [];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], LocationService);


/***/ }),

/***/ 1125:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _condition_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./condition.service */ 7391);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast.service */ 524);
/* harmony import */ var _utils_auto_refresh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auto-refresh */ 6955);
/* harmony import */ var _constants_weather_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/weather.constants */ 5995);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location.service */ 5434);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WeatherService = class WeatherService {
  constructor() {
    this.conditionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_condition_service__WEBPACK_IMPORTED_MODULE_0__.ConditionService);
    this.forecastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_forecast_service__WEBPACK_IMPORTED_MODULE_1__.ForecastService);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService);
    this.refreshCacheCycle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(10000); // Refresh interval in milliseconds
    this.initRefreshCycle(); // Step 1: Initialize refresh cycle from storage
    this.loadSavedConditions(); // Step 2: Load saved ZIPs and their conditions
    this.setupAutoRefresh(); // Step 3: Setup reactive refresh intervals
  }
  // Set refresh interval from localStorage or fallback to 7200000 ms (2 hours)
  initRefreshCycle() {
    const stored = localStorage.getItem('refreshCacheCycle');
    if (stored === null) {
      localStorage.setItem('refreshCacheCycle', '7200000');
      this.refreshCacheCycle.set(7200000);
    } else {
      this.refreshCacheCycle.set(Number(stored));
    }
  }
  // Add current conditions for all saved locations
  loadSavedConditions() {
    this.locationService.locations().forEach(zip => this.addCurrentConditions(zip));
  }
  // Setup auto-refresh timers that react to refresh interval changes
  setupAutoRefresh() {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
      const interval = this.refreshCacheCycle();
      clearInterval(this.currentConditionIntervalId);
      clearInterval(this.forecastIntervalId);
      this.currentConditionIntervalId = (0,_utils_auto_refresh__WEBPACK_IMPORTED_MODULE_2__.startAutoRefresh)(() => this.locationService.locations(), zip => this.forceRefreshCurrentConditions(zip), interval);
      this.forecastIntervalId = (0,_utils_auto_refresh__WEBPACK_IMPORTED_MODULE_2__.startAutoRefresh)(() => this.locationService.locations(), zip => this.forceRefreshForecast(zip), interval);
    });
  }
  // Add current conditions for a ZIP code
  addCurrentConditions(zip) {
    this.conditionService.add(zip);
  }
  // Remove current conditions for a ZIP code
  removeCurrentConditions(zip) {
    this.conditionService.remove(zip);
  }
  // Force-refresh current conditions for a ZIP code
  forceRefreshCurrentConditions(zip) {
    this.conditionService.fetch(zip);
  }
  // Get current conditions signal
  getCurrentConditions() {
    return this.conditionService.getConditions();
  }
  // Get loading state for current conditions
  get loadingCurrentConditions() {
    return this.conditionService.loading;
  }
  // Force-refresh forecast for a ZIP code
  forceRefreshForecast(zip) {
    this.forecastService.fetch(zip);
  }
  // Get forecast signal (Map<zip, Forecast>)
  getForeCastSignal() {
    return this.forecastService.getForecastCache();
  }
  // Get loading state for forecast
  get loadingForecast() {
    return this.forecastService.loading;
  }
  // Get weather icon based on condition ID
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) {
      return _constants_weather_constants__WEBPACK_IMPORTED_MODULE_3__.WEATHER_ICON_BASE_URL + 'art_storm.png';
    }
    if (id >= 501 && id <= 511) {
      return _constants_weather_constants__WEBPACK_IMPORTED_MODULE_3__.WEATHER_ICON_BASE_URL + 'art_rain.png';
    }
    if (id === 500 || id >= 520 && id <= 531) {
      return _constants_weather_constants__WEBPACK_IMPORTED_MODULE_3__.WEATHER_ICON_BASE_URL + 'art_light_rain.png';
    }
    if (id >= 600 && id <= 622) {
      return _constants_weather_constants__WEBPACK_IMPORTED_MODULE_3__.WEATHER_ICON_BASE_URL + 'art_snow.png';
    }
    if (id >= 801 && id <= 804) {
      return _constants_weather_constants__WEBPACK_IMPORTED_MODULE_3__.WEATHER_ICON_BASE_URL + 'art_clouds.png';
    }
    if (id === 741 || id === 761) {
      return _constants_weather_constants__WEBPACK_IMPORTED_MODULE_3__.WEATHER_ICON_BASE_URL + 'art_fog.png';
    }
    return _constants_weather_constants__WEBPACK_IMPORTED_MODULE_3__.WEATHER_ICON_BASE_URL + 'art_clear.png';
  }
  static #_ = this.ctorParameters = () => [];
};
WeatherService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], WeatherService);


/***/ }),

/***/ 7357:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/tabulation-mechanism/tab-container/tab-container.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabContainerComponent: () => (/* binding */ TabContainerComponent)
/* harmony export */ });
/* harmony import */ var _tab_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-container.component.html?ngResource */ 1439);
/* harmony import */ var _tab_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-container.component.scss?ngResource */ 1047);
/* harmony import */ var _tab_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_item_tab_item_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-item/tab-item.directive */ 3902);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabContainerComponent = class TabContainerComponent {
  constructor() {
    this.openTabId = 0;
    this.openTabIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngAfterContentChecked() {
    this.updateActiveTabVisibility();
  }
  getTitles() {
    return this.tabs.map(tab => tab.title);
  }
  selectTabByIndex(index) {
    this.openTabId = index;
    this.openTabIdChange.emit(index);
  }
  close(event, index) {
    event.stopPropagation();
    this.closeTab.emit(index);
  }
  updateActiveTabVisibility() {
    this.tabs?.forEach((tab, index) => {
      const isActive = index === this.openTabId;
      const element = tab.elementRef?.nativeElement;
      if (element) {
        element.style.display = isActive ? 'block' : 'none';
      }
    });
  }
  static #_ = this.propDecorators = {
    openTabId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    openTabIdChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    closeTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [_tab_item_tab_item_directive__WEBPACK_IMPORTED_MODULE_2__.TabItemDirective]
    }]
  };
};
TabContainerComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'tab-container',
  template: _tab_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tab_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabContainerComponent);


/***/ }),

/***/ 3902:
/*!****************************************************************************!*\
  !*** ./src/app/shared/tabulation-mechanism/tab-item/tab-item.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabItemDirective: () => (/* binding */ TabItemDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TabItemDirective = class TabItemDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }];
  static #_2 = this.propDecorators = {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  };
};
TabItemDirective = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: "tab-item"
})], TabItemDirective);


/***/ }),

/***/ 3385:
/*!****************************************************************************!*\
  !*** ./src/app/shared/tabulation-mechanism/tabulation-mechanism.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabulationMechanismModule: () => (/* binding */ TabulationMechanismModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_container_tab_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-container/tab-container.component */ 7357);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _tab_item_tab_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-item/tab-item.directive */ 3902);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabulationMechanismModule = class TabulationMechanismModule {};
TabulationMechanismModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  exports: [_tab_container_tab_container_component__WEBPACK_IMPORTED_MODULE_0__.TabContainerComponent, _tab_item_tab_item_directive__WEBPACK_IMPORTED_MODULE_1__.TabItemDirective],
  declarations: [_tab_container_tab_container_component__WEBPACK_IMPORTED_MODULE_0__.TabContainerComponent, _tab_item_tab_item_directive__WEBPACK_IMPORTED_MODULE_1__.TabItemDirective],
  providers: []
})], TabulationMechanismModule);


/***/ }),

/***/ 6955:
/*!***************************************!*\
  !*** ./src/app/utils/auto-refresh.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startAutoRefresh: () => (/* binding */ startAutoRefresh)
/* harmony export */ });
/**
 * Starts an auto-refresh loop.
 *
 * @returns A subscription you can unsubscribe
 * @param getItems
 * @param refreshItem
 * @param interval
 */
function startAutoRefresh(getItems, refreshItem, interval) {
  return setInterval(() => {
    getItems().forEach(refreshItem);
  }, interval);
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 4207:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.weather-card-horizontal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    padding: 24px;
    margin: 20px 0;
    color: #fff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    opacity: 0;
    transform: translateY(12px);
    animation: fadeInUp 0.6s ease forwards;
    -webkit-backdrop-filter: blur(8px);
            backdrop-filter: blur(8px);
}

.weather-card-horizontal:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.bg-clear {
    background: linear-gradient(135deg, #4facfe, #00f2fe); /* Blue sky */
}

.bg-clouds {
    background: linear-gradient(135deg, #d7d2cc, #304352); /* Gray tones */
}

.bg-rain {
    background: linear-gradient(135deg, #bdc3c7, #2c3e50); /* Dark rain */
}

.bg-thunderstorm {
    background: linear-gradient(135deg, #434343, #000000); /* Dark storm */
}

.bg-snow {
    background: linear-gradient(135deg, #e0eafc, #cfdef3); /* Light snow */
}

.bg-mist {
    background: linear-gradient(135deg, #cfd9df, #e2ebf0); /* Soft mist */
}

.bg-default {
    background: linear-gradient(135deg, #f2f2f2, #ccc); /* Neutral fallback */
}

.weather-icon-box img {
    width: 100px;
    height: 100px;
    animation: float 4s ease-in-out infinite;
    transition: transform 0.3s ease;
}

.weather-card-horizontal:hover .weather-icon-box img {
    transform: scale(1.05);
}

.weather-main-info {
    flex-grow: 1;
    padding: 0 24px;
}

.city {
    font-size: 1.8em;
    margin: 0;
}

.zip {
    font-size: 0.95em;
    opacity: 0.8;
}

.condition {
    font-weight: 600;
    margin: 10px 0;
}

.temps-row {
    display: flex;
    gap: 16px;
    font-size: 1.1em;
}

.weather-extras {
    text-align: right;
    font-size: 0.95em;
}

.weather-extras p {
    margin: 4px 0;
}

.forecast-link {
    display: inline-block;
    margin-top: 8px;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
}

.forecast-link:hover {
    text-decoration: underline;
    color: #e0e0ff;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-6px);
    }
}

@media (max-width: 768px) {
    .weather-card-horizontal {
        flex-direction: column;
        align-items: flex-start;
    }

    .weather-main-info {
        padding: 16px 0;
    }

    .weather-extras {
        text-align: left;
        width: 100%;
    }
}

.temp-icon {
    display: inline-block;
    margin-right: 6px;
    font-size: 1.2em;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.9;
    }
}

.pulse {
    animation: pulse 2.5s ease-in-out infinite;
}

@keyframes bounceUp {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
}

.bounce-up {
    animation: bounceUp 2.8s ease-in-out infinite;
}

@keyframes bounceDown {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(3px);
    }
}

.bounce-down {
    animation: bounceDown 2.8s ease-in-out infinite;
}


.weather-card-horizontal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    padding: 32px;
    margin: 24px 0;
    min-height: 220px;
    color: #fff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    opacity: 0;
    transform: translateY(12px);
    animation: fadeInUp 0.6s ease forwards;
    -webkit-backdrop-filter: blur(8px);
            backdrop-filter: blur(8px);
}

weather-icon-box img {
    width: 110px;
    height: 110px;
}

.loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
    text-align: center;
}

.spinner {
    width: 48px;
    height: 48px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
}

.loading-text {
    font-size: 1.1rem;
    font-weight: 500;
    color: #555;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

`, "",{"version":3,"sources":["webpack://./src/app/components/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,WAAW;IACX,yCAAyC;IACzC,qDAAqD;IACrD,eAAe;IACf,UAAU;IACV,2BAA2B;IAC3B,sCAAsC;IACtC,kCAA0B;YAA1B,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;IAC3B,2CAA2C;AAC/C;;AAEA;IACI,qDAAqD,EAAE,aAAa;AACxE;;AAEA;IACI,qDAAqD,EAAE,eAAe;AAC1E;;AAEA;IACI,qDAAqD,EAAE,cAAc;AACzE;;AAEA;IACI,qDAAqD,EAAE,eAAe;AAC1E;;AAEA;IACI,qDAAqD,EAAE,eAAe;AAC1E;;AAEA;IACI,qDAAqD,EAAE,cAAc;AACzE;;AAEA;IACI,kDAAkD,EAAE,qBAAqB;AAC7E;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,wCAAwC;IACxC,+BAA+B;AACnC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;IAC1B,cAAc;AAClB;;AAEA;IACI;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,wBAAwB;IAC5B;IACA;QACI,2BAA2B;IAC/B;AACJ;;AAEA;IACI;QACI,sBAAsB;QACtB,uBAAuB;IAC3B;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;QAChB,WAAW;IACf;AACJ;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI;QACI,mBAAmB;QACnB,UAAU;IACd;IACA;QACI,qBAAqB;QACrB,YAAY;IAChB;AACJ;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI;QACI,wBAAwB;IAC5B;IACA;QACI,2BAA2B;IAC/B;AACJ;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI;QACI,wBAAwB;IAC5B;IACA;QACI,0BAA0B;IAC9B;AACJ;;AAEA;IACI,+CAA+C;AACnD;;;AAGA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,iBAAiB;IACjB,WAAW;IACX,yCAAyC;IACzC,qDAAqD;IACrD,eAAe;IACf,UAAU;IACV,2BAA2B;IAC3B,sCAAsC;IACtC,kCAA0B;YAA1B,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,6BAA6B;IAC7B,kBAAkB;IAClB,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;AACJ","sourcesContent":[".weather-card-horizontal {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-radius: 20px;\r\n    padding: 24px;\r\n    margin: 20px 0;\r\n    color: #fff;\r\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    transform: translateY(12px);\r\n    animation: fadeInUp 0.6s ease forwards;\r\n    backdrop-filter: blur(8px);\r\n}\r\n\r\n.weather-card-horizontal:hover {\r\n    transform: translateY(-4px);\r\n    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.bg-clear {\r\n    background: linear-gradient(135deg, #4facfe, #00f2fe); /* Blue sky */\r\n}\r\n\r\n.bg-clouds {\r\n    background: linear-gradient(135deg, #d7d2cc, #304352); /* Gray tones */\r\n}\r\n\r\n.bg-rain {\r\n    background: linear-gradient(135deg, #bdc3c7, #2c3e50); /* Dark rain */\r\n}\r\n\r\n.bg-thunderstorm {\r\n    background: linear-gradient(135deg, #434343, #000000); /* Dark storm */\r\n}\r\n\r\n.bg-snow {\r\n    background: linear-gradient(135deg, #e0eafc, #cfdef3); /* Light snow */\r\n}\r\n\r\n.bg-mist {\r\n    background: linear-gradient(135deg, #cfd9df, #e2ebf0); /* Soft mist */\r\n}\r\n\r\n.bg-default {\r\n    background: linear-gradient(135deg, #f2f2f2, #ccc); /* Neutral fallback */\r\n}\r\n\r\n.weather-icon-box img {\r\n    width: 100px;\r\n    height: 100px;\r\n    animation: float 4s ease-in-out infinite;\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.weather-card-horizontal:hover .weather-icon-box img {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.weather-main-info {\r\n    flex-grow: 1;\r\n    padding: 0 24px;\r\n}\r\n\r\n.city {\r\n    font-size: 1.8em;\r\n    margin: 0;\r\n}\r\n\r\n.zip {\r\n    font-size: 0.95em;\r\n    opacity: 0.8;\r\n}\r\n\r\n.condition {\r\n    font-weight: 600;\r\n    margin: 10px 0;\r\n}\r\n\r\n.temps-row {\r\n    display: flex;\r\n    gap: 16px;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.weather-extras {\r\n    text-align: right;\r\n    font-size: 0.95em;\r\n}\r\n\r\n.weather-extras p {\r\n    margin: 4px 0;\r\n}\r\n\r\n.forecast-link {\r\n    display: inline-block;\r\n    margin-top: 8px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    text-decoration: none;\r\n    transition: color 0.2s ease;\r\n}\r\n\r\n.forecast-link:hover {\r\n    text-decoration: underline;\r\n    color: #e0e0ff;\r\n}\r\n\r\n@keyframes fadeInUp {\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes float {\r\n    0%, 100% {\r\n        transform: translateY(0);\r\n    }\r\n    50% {\r\n        transform: translateY(-6px);\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .weather-card-horizontal {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .weather-main-info {\r\n        padding: 16px 0;\r\n    }\r\n\r\n    .weather-extras {\r\n        text-align: left;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.temp-icon {\r\n    display: inline-block;\r\n    margin-right: 6px;\r\n    font-size: 1.2em;\r\n}\r\n\r\n@keyframes pulse {\r\n    0%, 100% {\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n    50% {\r\n        transform: scale(1.1);\r\n        opacity: 0.9;\r\n    }\r\n}\r\n\r\n.pulse {\r\n    animation: pulse 2.5s ease-in-out infinite;\r\n}\r\n\r\n@keyframes bounceUp {\r\n    0%, 100% {\r\n        transform: translateY(0);\r\n    }\r\n    50% {\r\n        transform: translateY(-3px);\r\n    }\r\n}\r\n\r\n.bounce-up {\r\n    animation: bounceUp 2.8s ease-in-out infinite;\r\n}\r\n\r\n@keyframes bounceDown {\r\n    0%, 100% {\r\n        transform: translateY(0);\r\n    }\r\n    50% {\r\n        transform: translateY(3px);\r\n    }\r\n}\r\n\r\n.bounce-down {\r\n    animation: bounceDown 2.8s ease-in-out infinite;\r\n}\r\n\r\n\r\n.weather-card-horizontal {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-radius: 20px;\r\n    padding: 32px;\r\n    margin: 24px 0;\r\n    min-height: 220px;\r\n    color: #fff;\r\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    transform: translateY(12px);\r\n    animation: fadeInUp 0.6s ease forwards;\r\n    backdrop-filter: blur(8px);\r\n}\r\n\r\nweather-icon-box img {\r\n    width: 110px;\r\n    height: 110px;\r\n}\r\n\r\n.loader-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 40vh;\r\n    text-align: center;\r\n}\r\n\r\n.spinner {\r\n    width: 48px;\r\n    height: 48px;\r\n    border: 5px solid #f3f3f3;\r\n    border-top: 5px solid #007bff;\r\n    border-radius: 50%;\r\n    animation: spin 1s linear infinite;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.loading-text {\r\n    font-size: 1.1rem;\r\n    font-weight: 500;\r\n    color: #555;\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8314:
/*!***********************************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.css?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background: linear-gradient(to bottom, #d0d8e8, #f0f2f5);
    min-height: 100vh;
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
}

.container {
    padding: 2rem;
}

.forecast-card {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.forecast-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.weather-icon {
    width: 60px;
    height: 60px;
}

.forecast-card {
    background: #f9fbfc;
    border-radius: 12px;
    padding: 1rem 1.5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;
    border-left: 4px solid #4da6ff;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.forecast-card:hover {
    background: #eef5fa;
    transform: scale(1.01);
}

.weather-icon {
    width: 50px;
    height: 50px;
    animation: floatIcon 3s ease-in-out infinite;
}

@keyframes floatIcon {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-6px);
    }
    100% {
        transform: translateY(0);
    }
}

.back-btn-lg {
    background-color: #4da6ff;
    color: #ffffff;
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1.35rem;
    font-weight: 700;
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.5px;
}

.back-btn-lg:hover {
    background-color: #3399ff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
}
.loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 6px solid #ccc;
    border-top: 6px solid #007bff; /* Blue top */
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.loading-text {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: #555;
    font-weight: 500;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`, "",{"version":3,"sources":["webpack://./src/app/components/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;IACI,wDAAwD;IACxD,iBAAiB;IACjB,SAAS;IACT,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,0CAA0C;IAC1C,qDAAqD;AACzD;;AAEA;IACI,2BAA2B;IAC3B,0CAA0C;AAC9C;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;IACpB,yCAAyC;IACzC,+BAA+B;IAC/B,8BAA8B;;IAE9B,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,4CAA4C;AAChD;;AAEA;IACI;QACI,wBAAwB;IAC5B;IACA;QACI,2BAA2B;IAC/B;IACA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,yBAAyB;IACzB,yCAAyC;IACzC,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,0CAA0C;IAC1C,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,6BAA6B,EAAE,aAAa;IAC5C,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,KAAK,uBAAuB,EAAE;IAC9B,OAAO,yBAAyB,EAAE;AACtC","sourcesContent":["body {\r\n    background: linear-gradient(to bottom, #d0d8e8, #f0f2f5);\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    font-family: 'Segoe UI', sans-serif;\r\n}\r\n\r\n.container {\r\n    padding: 2rem;\r\n}\r\n\r\n.forecast-card {\r\n    background-color: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\r\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.forecast-card:hover {\r\n    transform: translateY(-4px);\r\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.weather-icon {\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n.forecast-card {\r\n    background: #f9fbfc;\r\n    border-radius: 12px;\r\n    padding: 1rem 1.5rem;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\r\n    transition: transform 0.2s ease;\r\n    border-left: 4px solid #4da6ff;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.forecast-card:hover {\r\n    background: #eef5fa;\r\n    transform: scale(1.01);\r\n}\r\n\r\n.weather-icon {\r\n    width: 50px;\r\n    height: 50px;\r\n    animation: floatIcon 3s ease-in-out infinite;\r\n}\r\n\r\n@keyframes floatIcon {\r\n    0% {\r\n        transform: translateY(0);\r\n    }\r\n    50% {\r\n        transform: translateY(-6px);\r\n    }\r\n    100% {\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.back-btn-lg {\r\n    background-color: #4da6ff;\r\n    color: #ffffff;\r\n    border: none;\r\n    padding: 1rem 2.5rem;\r\n    font-size: 1.35rem;\r\n    font-weight: 700;\r\n    border-radius: 14px;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.back-btn-lg:hover {\r\n    background-color: #3399ff;\r\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\r\n    transform: translateY(-3px);\r\n}\r\n.loader-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 100px;\r\n}\r\n\r\n.spinner {\r\n    width: 50px;\r\n    height: 50px;\r\n    border: 6px solid #ccc;\r\n    border-top: 6px solid #007bff; /* Blue top */\r\n    border-radius: 50%;\r\n    animation: spin 1s linear infinite;\r\n}\r\n\r\n.loading-text {\r\n    margin-top: 1rem;\r\n    font-size: 1.1rem;\r\n    color: #555;\r\n    font-weight: 500;\r\n}\r\n\r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2328:
/*!***********************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page-content {
    padding-bottom: 100px;
}

.sticky-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 0 2rem;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
    z-index: 999;
}

.sticky-footer input {
    padding: 10px 14px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 300px;
    transition: border-color 0.2s;
}

.sticky-footer input:focus {
    border-color: #4CAF50;
    outline: none;
}

.sticky-footer button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.sticky-footer button:hover {
    background-color: #45a049;
}

.sticky-footer button {
    padding: 10px 20px;
    background-color: #5dade2;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.sticky-footer button:hover {
    background-color: #3498db;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/settings/settings.component.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,OAAO;IACP,QAAQ;IACR,aAAa;IACb,yBAAyB;IACzB,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,2CAA2C;IAC3C,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[".page-content {\r\n    padding-bottom: 100px;\r\n}\r\n\r\n.sticky-footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100px;\r\n    background-color: #f9f9f9;\r\n    border-top: 1px solid #ddd;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1.5rem;\r\n    padding: 0 2rem;\r\n    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);\r\n    z-index: 999;\r\n}\r\n\r\n.sticky-footer input {\r\n    padding: 10px 14px;\r\n    font-size: 14px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 8px;\r\n    width: 300px;\r\n    transition: border-color 0.2s;\r\n}\r\n\r\n.sticky-footer input:focus {\r\n    border-color: #4CAF50;\r\n    outline: none;\r\n}\r\n\r\n.sticky-footer button {\r\n    padding: 10px 20px;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 8px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n}\r\n\r\n.sticky-footer button:hover {\r\n    background-color: #45a049;\r\n}\r\n\r\n.sticky-footer button {\r\n    padding: 10px 20px;\r\n    background-color: #5dade2;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 8px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n}\r\n\r\n.sticky-footer button:hover {\r\n    background-color: #3498db;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6347:
/*!**********************************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.zipcode-container {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 20px 0;
}

.icon {
  font-size: 20px;
  margin-right: 4px;
}

.zipcode-input {
  flex: 1;
  border: none;
  border-bottom: 1.5px solid #999;
  padding: 10px 8px;
  font-size: 16px;
  background: transparent;
  outline: none;
  transition: border-color 0.3s;
}

.zipcode-input:focus {
  border-bottom-color: #5c6bc0;
}

.zipcode-button {
  background: none;
  border: 1.5px solid #5c6bc0;
  color: #5c6bc0;
  padding: 8px 20px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.zipcode-button:hover {
  background-color: #5c6bc0;
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/app/components/zipcode-entry/zipcode-entry.component.scss","webpack://./../../My%20portfolio/ng-weather/src/app/components/zipcode-entry/zipcode-entry.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,WAAA;EACA,eAAA;ACCF;;ADEA;EACE,eAAA;EACA,iBAAA;ACCF;;ADEA;EACE,OAAA;EACA,YAAA;EACA,+BAAA;EACA,iBAAA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;EACA,6BAAA;ACCF;;ADEA;EACE,4BAAA;ACCF;;ADEA;EACE,gBAAA;EACA,2BAAA;EACA,cAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;ACCF;;ADEA;EACE,yBAAA;EACA,YAAA;ACCF","sourcesContent":[".zipcode-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  width: 100%;\r\n  padding: 20px 0;\r\n}\r\n\r\n.icon {\r\n  font-size: 20px;\r\n  margin-right: 4px;\r\n}\r\n\r\n.zipcode-input {\r\n  flex: 1;\r\n  border: none;\r\n  border-bottom: 1.5px solid #999;\r\n  padding: 10px 8px;\r\n  font-size: 16px;\r\n  background: transparent;\r\n  outline: none;\r\n  transition: border-color 0.3s;\r\n}\r\n\r\n.zipcode-input:focus {\r\n  border-bottom-color: #5c6bc0;\r\n}\r\n\r\n.zipcode-button {\r\n  background: none;\r\n  border: 1.5px solid #5c6bc0;\r\n  color: #5c6bc0;\r\n  padding: 8px 20px;\r\n  font-size: 14px;\r\n  border-radius: 20px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.zipcode-button:hover {\r\n  background-color: #5c6bc0;\r\n  color: white;\r\n}\r\n",".zipcode-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 20px 0;\n}\n\n.icon {\n  font-size: 20px;\n  margin-right: 4px;\n}\n\n.zipcode-input {\n  flex: 1;\n  border: none;\n  border-bottom: 1.5px solid #999;\n  padding: 10px 8px;\n  font-size: 16px;\n  background: transparent;\n  outline: none;\n  transition: border-color 0.3s;\n}\n\n.zipcode-input:focus {\n  border-bottom-color: #5c6bc0;\n}\n\n.zipcode-button {\n  background: none;\n  border: 1.5px solid #5c6bc0;\n  color: #5c6bc0;\n  padding: 8px 20px;\n  font-size: 14px;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.zipcode-button:hover {\n  background-color: #5c6bc0;\n  color: white;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1047:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/tabulation-mechanism/tab-container/tab-container.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nav-tabs {
  display: flex;
  border-bottom: 2px solid #dee2e6;
  padding-left: 0;
  margin-bottom: 16px;
}

.nav-item {
  list-style: none;
}

.nav-item a {
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 1em;
  font-weight: 500;
  color: #555;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  background: none;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.nav-item a:hover {
  color: #007BFF;
  border-bottom: 2px solid #cce5ff;
}

.nav-item a.is-active {
  color: #007BFF;
  border-bottom: 2px solid #007BFF;
  font-weight: 600;
}

.nav-item a .ml-10 {
  margin-left: 8px;
  font-size: 1.1em;
  font-weight: bold;
  color: #999;
  transition: color 0.2s ease;
}

.nav-item a .ml-10:hover {
  color: #dc3545;
}`, "",{"version":3,"sources":["webpack://./src/app/shared/tabulation-mechanism/tab-container/tab-container.component.scss","webpack://./../../My%20portfolio/ng-weather/src/app/shared/tabulation-mechanism/tab-container/tab-container.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,gCAAA;EACA,eAAA;EACA,mBAAA;ACCF;;ADEA;EACE,gBAAA;ACCF;;ADEA;EACE,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;EACA,oCAAA;EACA,gBAAA;EACA,eAAA;EACA,mDAAA;ACCF;;ADEA;EACE,cAAA;EACA,gCAAA;ACCF;;ADEA;EACE,cAAA;EACA,gCAAA;EACA,gBAAA;ACCF;;ADEA;EACE,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;EACA,2BAAA;ACCF;;ADEA;EACE,cAAA;ACCF","sourcesContent":[".nav-tabs {\r\n  display: flex;\r\n  border-bottom: 2px solid #dee2e6;\r\n  padding-left: 0;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.nav-item {\r\n  list-style: none;\r\n}\r\n\r\n.nav-item a {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 10px 16px;\r\n  font-size: 1em;\r\n  font-weight: 500;\r\n  color: #555;\r\n  text-decoration: none;\r\n  border-bottom: 2px solid transparent;\r\n  background: none;\r\n  cursor: pointer;\r\n  transition: color 0.2s ease, border-color 0.2s ease;\r\n}\r\n\r\n.nav-item a:hover {\r\n  color: #007BFF;\r\n  border-bottom: 2px solid #cce5ff;\r\n}\r\n\r\n.nav-item a.is-active {\r\n  color: #007BFF;\r\n  border-bottom: 2px solid #007BFF;\r\n  font-weight: 600;\r\n}\r\n\r\n.nav-item a .ml-10 {\r\n  margin-left: 8px;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n  color: #999;\r\n  transition: color 0.2s ease;\r\n}\r\n\r\n.nav-item a .ml-10:hover {\r\n  color: #dc3545;\r\n}\r\n",".nav-tabs {\n  display: flex;\n  border-bottom: 2px solid #dee2e6;\n  padding-left: 0;\n  margin-bottom: 16px;\n}\n\n.nav-item {\n  list-style: none;\n}\n\n.nav-item a {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 16px;\n  font-size: 1em;\n  font-weight: 500;\n  color: #555;\n  text-decoration: none;\n  border-bottom: 2px solid transparent;\n  background: none;\n  cursor: pointer;\n  transition: color 0.2s ease, border-color 0.2s ease;\n}\n\n.nav-item a:hover {\n  color: #007BFF;\n  border-bottom: 2px solid #cce5ff;\n}\n\n.nav-item a.is-active {\n  color: #007BFF;\n  border-bottom: 2px solid #007BFF;\n  font-weight: 600;\n}\n\n.nav-item a .ml-10 {\n  margin-left: 8px;\n  font-size: 1.1em;\n  font-weight: bold;\n  color: #999;\n  transition: color 0.2s ease;\n}\n\n.nav-item a .ml-10:hover {\n  color: #dc3545;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 2923:
/*!********************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"loader-container\" *ngIf=\"loadingConditions()\">\r\n    <div class=\"spinner\"></div>\r\n    <p class=\"loading-text\">Loading current conditions...</p>\r\n</div>\r\n<div *ngIf=\"!loadingConditions()\">\r\n    <tab-container [(openTabId)]=\"openTabId\" (closeTab)=\"removeCondition($event)\">\r\n        <tab-item *ngFor=\"let location of currentConditionsByZip(); index as i\" [title]=\"location.data.name\">\r\n            <div\r\n                    class=\"weather-card-horizontal\"\r\n                    [ngClass]=\"getWeatherBackground(location.data.weather[0].main)\"\r\n                    (click)=\"showForecast(location.zip)\"\r\n                    [style.animationDelay]=\"(i * 0.1) + 's'\">\r\n                <div class=\"weather-icon-box\">\r\n                    <img [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\" alt=\"weather icon\"/>\r\n                </div>\r\n                <div class=\"weather-main-info\">\r\n                    <h2 class=\"city\">{{ location.data.name }}</h2>\r\n                    <p class=\"zip\">{{ location.zip }}</p>\r\n                    <p class=\"condition\">{{ location.data.weather[0].main }}</p>\r\n                    <div class=\"temps-row\">\r\n                        <p><span class=\"temp-icon pulse\">🌡️</span>\r\n                            Current: {{ location.data.main.temp | number: '0.0-0' }}°</p>\r\n                        <p><span class=\"temp-icon bounce-up\">🔺</span>\r\n                            Max: {{ location.data.main.temp_max | number: '0.0-0' }}°</p>\r\n                        <p><span class=\"temp-icon bounce-down\">🔻</span>\r\n                            Min: {{ location.data.main.temp_min | number: '0.0-0' }}°</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"weather-extras\">\r\n                    <p>💨 {{ location.data.wind.speed }} km/h</p>\r\n                    <p>💧 {{ location.data.main.humidity }}%</p>\r\n                    <p>🌅 {{ getTime(location.data.sys.sunrise) }}</p>\r\n                    <p>🌇 {{ getTime(location.data.sys.sunset) }}</p>\r\n                    <a [routerLink]=\"['/forecast', location.zip]\" class=\"forecast-link\">5 day forecast →</a>\r\n                </div>\r\n            </div>\r\n        </tab-item>\r\n    </tab-container>\r\n</div>\r\n";

/***/ }),

/***/ 5422:
/*!************************************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\r\n    <div class=\"loader-container\" *ngIf=\"loading()\">\r\n        <div class=\"spinner\"></div>\r\n        <p class=\"loading-text\">Loading forecast...</p>\r\n    </div>\r\n    <div *ngIf=\"!loading()\">\r\n        <div *ngIf=\"forecast() as forecast\">\r\n            <h3 class=\"text-center mb-4 fw-bold\">5-day forecast for {{ forecast.city.name }}</h3>\r\n            <div *ngFor=\"let dailyForecast of forecast.list\" class=\"forecast-card\">\r\n                <div>\r\n                    <div class=\"fw-semibold mb-1\">\r\n                        {{ dailyForecast.dt * 1000 | date: 'EEEE, MMM d' }}\r\n                    </div>\r\n                    <div>{{ dailyForecast.weather[0].main }}</div>\r\n                    <div class=\"text-muted small\">\r\n                        Min: {{ dailyForecast.temp.min | number: '.0-0' }}° |\r\n                        Max: {{ dailyForecast.temp.max | number: '.0-0' }}°\r\n                    </div>\r\n                </div>\r\n                <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\"\r\n                     class=\"weather-icon\"\r\n                     alt=\"weather icon\"/>\r\n            </div>\r\n            <div class=\"text-center mt-4\">\r\n                <button class=\"back-btn-lg\" [routerLink]=\"['/']\">← Back to main page</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-settings></app-settings>\r\n";

/***/ }),

/***/ 595:
/*!**************************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n    <app-zipcode-entry></app-zipcode-entry>\r\n    <app-current-conditions></app-current-conditions>\r\n    <app-settings></app-settings>\r\n</div>\r\n";

/***/ }),

/***/ 9645:
/*!************************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer class=\"sticky-footer\">\r\n    <label for=\"refreshCycleInput\">Refresh cache interval (seconds):</label>\r\n    <input\r\n            id=\"refreshCycleInput\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"refreshCacheCycle\"\r\n            placeholder=\"Refresh weather cache after x seconds\"\r\n            min=\"1\"/>\r\n    <button (click)=\"setRefreshCycle()\">Update cash cycle</button>\r\n</footer>\r\n";

/***/ }),

/***/ 2647:
/*!**********************************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"zipcode-container\">\r\n    <span class=\"icon\">📍</span>\r\n    <input type=\"text\" #zipcode placeholder=\"Enter a zipcode...\" class=\"zipcode-input\"/>\r\n    <button (click)=\"addLocation(zipcode.value)\" class=\"zipcode-button\">Search</button>\r\n</div>\r\n";

/***/ }),

/***/ 1439:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/tabulation-mechanism/tab-container/tab-container.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"nav nav-tabs\">\r\n    <li class=\"nav-item\" *ngFor=\"let title of getTitles(); index as index\">\r\n        <a\r\n                [ngClass]=\"index === openTabId ? 'is-active' : ''\"\r\n                (click)=\"selectTabByIndex(index)\">\r\n            <span>{{ title }}</span>\r\n            <span (click)=\"close($event, index)\" class=\"ml-10\">&times;</span></a>\r\n    </li>\r\n</ul>\r\n<div class=\"tab-container\">\r\n    <ng-content></ng-content>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map