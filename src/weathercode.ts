import {data} from './askWeather';
import {current_weathercode} from "./dom_utils";

export function current_weathercode_function() {
    current_weathercode.textContent = "Current weathercode: " + data.current_weather.weathercode;
    console.log("weathercode");
}