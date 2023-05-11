import {button, refresh, search_button, search_refresh} from './dom_utils';
import {askWeather} from "./askWeather";
import {askWeatherElsewhere} from "./askWeatherElsewhere";
button.addEventListener("click", askWeather);
refresh.addEventListener("click", askWeather);
search_button.addEventListener("click", askWeatherElsewhere);
search_refresh.addEventListener("click", askWeatherElsewhere);