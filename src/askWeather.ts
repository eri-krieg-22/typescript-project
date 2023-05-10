import {
    current_temperature,
    current_weathercode,
    current_winddirection,
    current_windspeed,
    process_status,
    div
} from "./dom_utils";
import {current_temperature_function} from "./temperature";
import {current_winddirection_function} from "./winddirection";
import {current_windspeed_function} from "./windspeed";
import {current_weathercode_function} from "./weathercode";

export let data:any|null=null;
export function askWeather() {
    current_temperature.textContent = ""
    current_windspeed.textContent = ""
    current_winddirection.textContent = ""
    current_weathercode.textContent = ""
    div.style.visibility = "visible"

    if (!navigator.geolocation) {
        process_status.textContent = "Geolocation API nicht unterstützt";
    } else {
        process_status.textContent = "Suche...";
        navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: GeolocationPosition) {
        process_status.textContent = "";
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true&daily=temperature_2m_max&daily=temperature_2m_min&timezone=auto");
        xhr.send();
        xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                data = xhr.response;
                console.log(data);
                current_temperature_function();
                current_winddirection_function();
                current_windspeed_function();
                current_weathercode_function();
                console.log("index")
            } else {
                console.log(`Fehler: ${xhr.status}`);
            }
        };
    }

    function error() {
        process_status.textContent = "Standort nicht gefunden";
    }
}