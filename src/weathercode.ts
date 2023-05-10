import {data} from './askWeather';
import {current_weathercode} from "./dom_utils";

function weathercode_explanation(weathercode:number) {
    switch(weathercode) {
        case(0):
            return "Klarer Himmel";

        case(1):
            return "Überwiegend klar";

        case(2):
            return "Teilweise bewölkt";

        case(3):
            return "Bewölkt";

        case(45):
            return "Nebel";

        case(48):
            return "Ablagerung von Reifnebel";

        case(51):
            return "Leichter Nieselregen";

        case(53):
            return "Mäßiger Nieselregen";

        case(55):
            return "Dichter Nieselregen";

        case(56):
            return "Leichter gefrierender Nieselregen";

        case(57):
            return "Dichter gefrierender Nieselregen";

        case(61):
            return "Leichter Regen";

        case(63):
            return "Mäßiger Regen";

        case(65):
            return "Starker Regen";

        case(66):
            return "Leichter gefrierender Regen";

        case(67):
            return "Starker gefrierender Regen";

        case(71):
            return "Leichter Schneefall";

        case(73):
            return "Mäßiger Schneefall";

        case(75):
            return "Starker Schneefall";

        case(77):
            return "Schneekörner";

        case(80):
            return "Leichte Regenschauer";

        case(81):
            return "Mäßige Regenschauer";

        case(82):
            return "Heftige Regenschauer";

        case(85):
            return "Leichte Schneeschauer";

        case(86):
            return "Starke Schneeschauer";

        case(95):
            return "Leichtes oder mäßiges Gewitter";

        case(96):
            return "Gewitter mit leichtem Hagel";

        case(99):
            return "Gewitter mit schwerem Hagel";
    }
}
export function current_weathercode_function() {
    current_weathercode.textContent = "Aktueller Wettercode: " + data.current_weather.weathercode + " (" + weathercode_explanation(data.current_weather.weathercode) + ")";
    console.log("weathercode");
}