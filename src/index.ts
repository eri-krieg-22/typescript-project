import {button, refresh} from './dom_utils';
import {askWeather} from "./askWeather";
button.addEventListener("click", askWeather);
refresh.addEventListener("click", askWeather);