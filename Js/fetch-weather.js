import { populateDom } from "./dom-manipulation.js";

export function fetchWeather(coord1, coord2) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${coord1}&lon=${coord2}&units=metric&appid=d4e52272c6bbf5c3a1e43ec4589220c4`;
    if (url in localStorage) {
        let data = JSON.parse(localStorage.getItem(url));
        populateDom(data);
    } else {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem(url, JSON.stringify(data));
                populateDom(data);
            })
            .catch(err => document.getElementById("error").innerText = err)
    }
}