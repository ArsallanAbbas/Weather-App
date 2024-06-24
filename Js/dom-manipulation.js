export function populateDom(weatherData) {
    document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`);
    document.getElementById("city").innerText = weatherData.name;
    document.getElementById("city").innerHTML += `<span>, ${weatherData.sys.country}<span/>`;
    document.getElementById("temprature").innerText = Math.round(weatherData.main.temp);
    document.getElementById("conditions").innerText = weatherData.weather[0].description;
    document.getElementById("humidity").innerText = weatherData.main.humidity;
    document.getElementById("wind-speed").innerText = weatherData.wind.speed;
    document.getElementById("visibility").innerText = weatherData.visibility/1000;
    document.getElementById("low").innerText = Math.round(weatherData.main.temp_min);
    document.getElementById("high").innerText = Math.round(weatherData.main.temp_max);
    document.getElementById("feels-like").innerText = Math.round(weatherData.main.feels_like);
}