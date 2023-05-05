import {data} from './askWeather';
import {current_winddirection} from "./dom_utils";

function winddirection_explanation(winddirection:number){
    if (winddirection >= 337.5)
    {
        return "North";
    }
    else if (winddirection >= 292.5)
    {
        return "Northwest";
    }
    else if (winddirection >= 247.5)
    {
        return "West";
    }
    else if (winddirection >= 202.5)
    {
        return "Southwest";
    }
    else if (winddirection >= 157.5)
    {
        return "South";
    }
    else if (winddirection >= 112.5)
    {
        return "Southeast";
    }
    else if (winddirection >= 67.5)
    {
        return "East";
    }
    else if (winddirection >= 22.5)
    {
        return "Northeast";
    }
    else if (winddirection >= 0)
    {
        return "North";
    }
}

export function current_winddirection_function() {
    current_winddirection.textContent = "Current winddirection: " + data.current_weather.winddirection + " Degrees" + " (" + winddirection_explanation(data.current_weather.winddirection) + ")";
    console.log("winddirection");
}