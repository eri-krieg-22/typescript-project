import {data} from './askWeather';
import {current_temperature} from "./dom_utils";

export function current_temperature_function() {
    current_temperature.textContent = "Aktuelle Temperatur: " + data.current_weather.temperature + " °C";
    console.log("temperature");
}