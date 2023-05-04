const process_status = document.querySelector("#process_status")as HTMLParagraphElement;
const current_temperature = document.querySelector("#current_temperature")as HTMLParagraphElement;
const current_windspeed = document.querySelector("#current_windspeed")as HTMLParagraphElement;
const current_winddirection = document.querySelector("#current_winddirection")as HTMLParagraphElement;
const button = document.querySelector("#button")as HTMLButtonElement;
button.addEventListener("click", askWeather);
function askWeather() {

    if (!navigator.geolocation) {
        process_status.textContent = "Geolocation not supported";
    } else {
        process_status.textContent = "Searching...";
        navigator.geolocation.getCurrentPosition(success, error);
    }
    function success(position:GeolocationPosition) {
        process_status.textContent = "";
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
                current_temperature.textContent = "Current temperature: " + data.current_weather.temperature + " Degrees Celsius";
                current_windspeed.textContent = "Current windspeed: " + data.current_weather.windspeed + " km/h";
                current_winddirection.textContent = "Current winddirection: " + data.current_weather.winddirection + " degrees"
            } else {
                console.log(`Error: ${xhr.status}`);
            }
        };
    }
    function error() {
        process_status.textContent = "Position not found";
    }
}