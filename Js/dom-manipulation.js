export function populateDom(obj) {
    document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${obj.weather[0].icon}.png`);
    document.getElementById("city").innerText = obj.name;
    document.getElementById("city").innerHTML += `<span>, ${obj.sys.country}<span/>`;
    document.getElementById("conditions").innerText = obj.weather[0].description;
    document.getElementById("temprature").innerText = obj.main.temp;
    document.getElementById("humidity").innerText = obj.main.humidity;
    document.getElementById("wind-speed").innerText = obj.wind.speed;
}