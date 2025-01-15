import "./styles.css";
import { getWeather, weatherObject } from "./fetch";

console.log("Index Connected");
getWeather();
console.log(weatherObject);
