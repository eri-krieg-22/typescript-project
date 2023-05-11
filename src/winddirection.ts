import {data} from './askWeather';
import {current_winddirection} from "./dom_utils";
import {search_weatherdata} from "./askWeatherElsewhere";

function winddirection_explanation(winddirection:number){
    if (winddirection >= 337.5)
    {
        return "Nördlich";
    }
    else if (winddirection >= 292.5)
    {
        return "Nordwestlich";
    }
    else if (winddirection >= 247.5)
    {
        return "Westlich";
    }
    else if (winddirection >= 202.5)
    {
        return "Südwestich";
    }
    else if (winddirection >= 157.5)
    {
        return "Südlich";
    }
    else if (winddirection >= 112.5)
    {
        return "Südöstlich";
    }
    else if (winddirection >= 67.5)
    {
        return "Östlich";
    }
    else if (winddirection >= 22.5)
    {
        return "Nordöstlich";
    }
    else if (winddirection >= 0)
    {
        return "Nördlich";
    }
}

export function current_winddirection_function() {
    current_winddirection.textContent = "Aktuelle Windrichtung: " + data.current_weather.winddirection + "°" + " (" + winddirection_explanation(data.current_weather.winddirection) + ")";
    console.log("winddirection");
}

export function search_winddirection_function() {
    current_winddirection.textContent = "Aktuelle Windrichtung: " + search_weatherdata.current_weather.winddirection + "°" + " (" + winddirection_explanation(search_weatherdata.current_weather.winddirection) + ")";
    console.log("winddirection");
}