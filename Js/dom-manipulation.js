export function populateDom(obj) {
    document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${obj.weather[0].icon}@4x.png`);
    document.getElementById("city").innerText = obj.name;
    document.getElementById("city").innerHTML += `<span>, ${obj.sys.country}<span/>`;
    document.getElementById("temprature").innerText = Math.round(obj.main.temp);
    document.getElementById("conditions").innerText = obj.weather[0].description;
    document.getElementById("humidity").innerText = obj.main.humidity;
    document.getElementById("wind-speed").innerText = obj.wind.speed;
    document.getElementById("visibility").innerText = obj.visibility/1000;
    document.getElementById("low").innerText = Math.round(obj.main.temp_min);
    document.getElementById("high").innerText = Math.round(obj.main.temp_max);
    document.getElementById("feels-like").innerText = Math.round(obj.main.feels_like);
}