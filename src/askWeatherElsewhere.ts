import {
    current_temperature,
    current_weathercode,
    current_winddirection,
    current_windspeed,
    process_status,
    button,
    div,
    search_refresh, reverse_geocoding,
    query, refresh
} from "./dom_utils";
import {search_temperature_function} from "./temperature";
import {search_winddirection_function} from "./winddirection";
import {search_windspeed_function} from "./windspeed";
import {search_weathercode_function} from "./weathercode";
import {search_geocoding_function} from "./reverse_geocoding";

export let search_weatherdata: any | null = null;
export function askWeatherElsewhere() {
    reverse_geocoding.textContent = "";
    current_temperature.textContent = "";
    current_windspeed.textContent = "";
    current_winddirection.textContent = "";
    current_weathercode.textContent = "";
    search_refresh.style.display = "none";
    refresh.style.display = "none";
    button.style.display = "initial";
    div.style.display = "initial";
    let search_data: any | null = null;

    let lat: any | null = null;
    let long: any | null = null;

    const search_xhr = new XMLHttpRequest();
    geoSearch();
    function geoSearch() {
        search_xhr.open("GET", "https://nominatim.openstreetmap.org/search?q=" + query.value + "&format=json&limit=1");
        search_xhr.send();
        search_xhr.responseType = "json";
        search_xhr.onload = () => {
            search_data = search_xhr.response[0];
            if (search_xhr.readyState === 4 && search_xhr.status === 200) {
                lat = search_data.lat;
                long = search_data.lon;
                console.log("geoquery");
                success();
            }
        }

        function success() {
            process_status.textContent = "";
            const latitude = lat;
            const longitude = long;
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true");
            xhr.send();
            xhr.responseType = "json";
            xhr.onload = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    search_weatherdata = xhr.response;
                    console.log(search_weatherdata);
                    search_geocoding_function();
                    search_temperature_function();
                    search_winddirection_function();
                    search_windspeed_function();
                    search_weathercode_function();
                    search_refresh.style.display = "initial";
                    console.log("index");
                } else {
                    console.log(`Fehler: ${xhr.status}`);
                }
            };
        }
    }
}