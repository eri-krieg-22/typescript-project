import {data} from './askWeather';
import {current_temperature} from "./dom_utils";
import {search_weatherdata} from "./askWeatherElsewhere";
export function current_temperature_function() {
    current_temperature.textContent = "Aktuelle Temperatur: " + data.current_weather.temperature + " °C";
    console.log("temperature");
}
export function search_temperature_function() {
    current_temperature.textContent = "Aktuelle Temperatur: " + search_weatherdata.current_weather.temperature + " °C";
    console.log("temperature");
}