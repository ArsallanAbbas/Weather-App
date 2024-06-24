import { fetchWeather } from "./fetch-weather.js";

export function fetchCoordinates(event) {
    event.preventDefault();
    document.getElementById("error").innerText = "";
    let input = document.getElementById("search-input").value;
    if (/[0-9]/.test(input)) {
        let url = `https://api.openweathermap.org/geo/1.0/zip?zip=${input}&appid=74e6f02cdc206d1d0ad92f6b1ee4bbcd`;
        fetch(url)
            .then(res => {
                if (res.ok) {
                return res.json();
                } else {
                    throw new Error("Invalid Zip/Potal code. Please enter Zip/post code and country code divided by comma")
                }
            })
            .then(data => {
                fetchWeather(data.lat, data.lon);
            })
            .catch(err => {
                document.getElementById("error").innerText = err;
            })
    } else {
        let url = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=74e6f02cdc206d1d0ad92f6b1ee4bbcd`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    throw new Error("Invalid city name. Please enter correct city name")
                } else {
                    fetchWeather(data[0].lat, data[0].lon);
                }
            })
            .catch(err => document.getElementById("error").innerText = err)
    }
    document.getElementById("search-input").value = "";
}