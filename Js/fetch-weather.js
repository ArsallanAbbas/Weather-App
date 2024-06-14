import { populateDom } from "./dom-manipulation.js";

export function fetchWeather(coord1, coord2) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${coord1}&lon=${coord2}&units=metric&appid=74e6f02cdc206d1d0ad92f6b1ee4bbcd`;
    if (url in localStorage) {
        let data = JSON.parse(localStorage.getItem(url));
        populateDom(data);
    } else {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem(url, JSON.stringify(data));
                populateDom(data);
            })
    }
}