import {data} from './askWeather';
import {search_weatherdata} from "./askWeatherElsewhere"
import {reverse_geocoding} from "./dom_utils";
let geo_data:any|null=null;
export function reverse_geocoding_function() {
    const latitude = data.latitude;
    const longitude = data.longitude;
    const geo_xhr = new XMLHttpRequest();
    geo_xhr.open("GET", "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitude + "&lon=" + longitude);
    geo_xhr.send();
    geo_xhr.responseType = "json";
    geo_xhr.onload = () => {
        geo_data = geo_xhr.response;
        if (geo_xhr.readyState === 4 && geo_xhr.status === 200) {
            reverse_geocoding.textContent = "Aktueller Standort: " + geo_data.display_name;
            console.log("reverse_geocoding");
        }
    }
}
export function search_geocoding_function() {
    const latitude = search_weatherdata.latitude;
    const longitude = search_weatherdata.longitude;
    const geo_xhr = new XMLHttpRequest();
    geo_xhr.open("GET", "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitude + "&lon=" + longitude);
    geo_xhr.send();
    geo_xhr.responseType = "json";
    geo_xhr.onload = () => {
        geo_data = geo_xhr.response;
        if (geo_xhr.readyState === 4 && geo_xhr.status === 200) {
            reverse_geocoding.textContent = "Aktueller Standort: " + geo_data.display_name;
            console.log("reverse_geocoding");
        }
    }
}