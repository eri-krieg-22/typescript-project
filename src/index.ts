const progress_status = document.querySelector("#status")as HTMLParagraphElement;
const temperatur = document.querySelector("#temperatur")as HTMLParagraphElement;
const button = document.querySelector("#button")as HTMLButtonElement;
button.addEventListener("click", askWeather);
function askWeather() {

    if (!navigator.geolocation) {
        progress_status.textContent = "Geolocation nicht unterstützt";
    } else {
        progress_status.textContent = "Suche...";
        navigator.geolocation.getCurrentPosition(success, error);
    }
    function success(position:GeolocationPosition) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true");
        xhr.send();
        xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = xhr.response;
                console.log(data);
                temperatur.textContent = "Aktuell: " + data.current_weather.temperature + " Grad Celcius";
            } else {
                console.log(`Error: ${xhr.status}`);
            }
        };
    }
    function error() {
        progress_status.textContent = "Position nicht auffindbar";
    }
}