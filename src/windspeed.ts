import {data} from './askWeather';
import {current_windspeed} from "./dom_utils";

export function current_windspeed_function() {
    current_windspeed.textContent = "Current windspeed: " + data.current_weather.windspeed + " km/h";
    console.log("windspeed");
}