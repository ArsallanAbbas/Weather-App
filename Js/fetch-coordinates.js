import { fetchWeather } from "./fetch-weather.js";

export function fetchCoordinates() {
    let input = document.getElementById("search-input").value;
    console.log(input);
    if (/[0-9]/.test(input)) {
        let url = `http://api.openweathermap.org/geo/1.0/zip?zip=${input}&appid=74e6f02cdc206d1d0ad92f6b1ee4bbcd`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                fetchWeather(data.lat, data.lon);
            })
    } else {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=74e6f02cdc206d1d0ad92f6b1ee4bbcd`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                fetchWeather(data[0].lat, data[0].lon);
            })
    }
}