import "./styles.css";
import { getWeather, weatherObject } from "./fetch";
import { syncData } from "./dom";

const searchButton = document.querySelector("button");
const searchQuery = document.querySelector("#weatherSearch");

export async function startUp(query = "tokyo") {
  await getWeather(query);
  syncData(weatherObject);
}

searchButton.addEventListener("click", () => {
  console.log("button clicked");
  if (!searchQuery.value.trim() == "") {
    startUp(searchQuery.value);
  } else {
    console.log("Invalid Query");
  }
  searchQuery.value = "";
});
