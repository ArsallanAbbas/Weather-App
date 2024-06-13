import {currentLocationWeather} from "./current-location-weather.js"
import { fetchCoordinates } from "./fetch-coordinates.js";

document.getElementById("search-input").addEventListener("change", fetchCoordinates)

currentLocationWeather();
