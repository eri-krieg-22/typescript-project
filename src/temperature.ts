import {data} from './askWeather';
import {current_temperature} from "./dom_utils";

export function current_temperature_function() {
    current_temperature.textContent = "Current temperature: " + data.current_weather.temperature + " Degrees Celsius";
    console.log("temperature");
}