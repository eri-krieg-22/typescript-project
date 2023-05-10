const process_status = document.querySelector("#process_status")as HTMLParagraphElement;
const current_temperature = document.querySelector("#current_temperature")as HTMLParagraphElement;
const current_windspeed = document.querySelector("#current_windspeed")as HTMLParagraphElement;
const current_winddirection = document.querySelector("#current_winddirection")as HTMLParagraphElement;
const current_weathercode = document.querySelector("#current_weathercode")as HTMLParagraphElement;
const button = document.querySelector("#button")as HTMLButtonElement;

const div = document.querySelector("#div")as HTMLDivElement;

export {
    process_status,
    current_temperature,
    current_windspeed,
    current_winddirection,
    current_weathercode,
    button,
    div
}