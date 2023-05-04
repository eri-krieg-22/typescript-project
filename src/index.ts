const process_status = document.querySelector("#process_status")as HTMLParagraphElement;
const current_temperature = document.querySelector("#current_temperature")as HTMLParagraphElement;
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
                current_temperature.textContent = "Current: " + data.current_weather.temperature + " Degrees Celsius";
            } else {
                console.log(`Error: ${xhr.status}`);
            }
        };
    }
    function error() {
        process_status.textContent = "Position not found";
    }
}