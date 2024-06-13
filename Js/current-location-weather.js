import {populateDom} from "./dom-manipulation.js";
import { fetchWeather } from "./fetch-weather.js";

export function currentLocationWeather() {
    navigator.geolocation.getCurrentPosition(showPosition)
    function showPosition(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        fetchWeather(lat, long);
        // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=74e6f02cdc206d1d0ad92f6b1ee4bbcd`;
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         populateDom(data);
        //     })   
    }
}