import {populateDom} from "./dom-manipulation.js";
import { fetchWeather } from "./fetch-weather.js";

export function currentLocationWeather() {
    navigator.geolocation.getCurrentPosition(showPosition)
    function showPosition(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        fetchWeather(lat, long);   
    }
}