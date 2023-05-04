import {data} from './askWeather';
import {current_winddirection} from "./dom_utils";

export function current_winddirection_function() {
    current_winddirection.textContent = "Current winddirection: " + data.current_weather.winddirection + " Degrees";
    console.log("winddirection");
}