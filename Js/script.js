import {currentLocationWeather} from "./current-location-weather.js"
import { fetchCoordinates } from "./fetch-coordinates.js";

document.getElementById("form").addEventListener("submit", fetchCoordinates)

currentLocationWeather();
