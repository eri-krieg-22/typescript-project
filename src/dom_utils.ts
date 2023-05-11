const process_status = document.querySelector("#process_status")as HTMLParagraphElement;
const current_temperature = document.querySelector("#current_temperature")as HTMLParagraphElement;
const current_windspeed = document.querySelector("#current_windspeed")as HTMLParagraphElement;
const current_winddirection = document.querySelector("#current_winddirection")as HTMLParagraphElement;
const current_weathercode = document.querySelector("#current_weathercode")as HTMLParagraphElement;
const button = document.querySelector("#button")as HTMLButtonElement;

const div = document.querySelector("#div")as HTMLDivElement;

const reverse_geocoding = document.querySelector("#reverse_geocoding")as HTMLParagraphElement;

const refresh = document.querySelector("#refresh")as HTMLButtonElement;

const search_button = document.querySelector("#search_button")as HTMLButtonElement;

const query = document.querySelector("#query") as HTMLInputElement;

const search_refresh = document.querySelector("#search_refresh")as HTMLButtonElement;

export {
    process_status,
    current_temperature,
    current_windspeed,
    current_winddirection,
    current_weathercode,
    button,
    div,
    reverse_geocoding,
    refresh,
    search_button,
    query,
    search_refresh
}