import clearDayImage from "./images/clear-day.svg";
import clearNightImage from "./images/clear-night.svg";
import cloudyImage from "./images/cloudy.svg";
import fogImage from "./images/fog.svg";
import hailImage from "./images/hail.svg";
import partyCloudyDayImage from "./images/partly-cloudy-day.svg";
import partlyCloudyNight from "./images/partly-cloudy-night.svg";
import rainSnowShowersDay from "./images/rain-snow-showers-day.svg";
import rainSnowShowersNight from "./images/rain-snow-showers-night.svg";
import rainSnowImage from "./images/rain-snow.svg";
import rainImage from "./images/rain.svg";
import showersDayImage from "./images/showers-day.svg";
import showersNightImage from "./images/showers-night.svg";
import sleetImage from "./images/sleet.svg";
import snowShowersDayImage from "./images/snow-showers-day.svg";
import snowShowersNightImage from "./images/snow-showers-night.svg";
import snowImage from "./images/snow.svg";
import thunderrainImage from "./images/thunder-rain.svg";
import thunderShowersDayImage from "./images/thunder-showers-day.svg";
import thunderShowersNightImage from "./images/thunder-showers-night.svg";
import thunderImage from "./images/thunder.svg";
import windImages from "./images/wind.svg";

const weatherLocation = document.querySelector(".weather-location");
const weatherTemp = document.querySelector(".weather-temp");
const weatherFeelsLike = document.querySelector(".weather-feels-like");
const weatherHumidity = document.querySelector(".weather-humidity");
const weatherWind = document.querySelector(".weather-wind");
const weatherLogo = document.querySelector(".weather-logo");

export async function syncData(weatherObject) {
  try {
    weatherLocation.textContent = weatherObject.address.display;
    weatherTemp.textContent = weatherObject.temperature.display;
    weatherFeelsLike.textContent = weatherObject.feelsLike.display;
    weatherHumidity.textContent = weatherObject.humidity.display;
    weatherWind.textContent = weatherObject.wind.display;
    console.log(weatherImages[weatherObject.logo.value]);
    weatherLogo.src = weatherImages[weatherObject.logo.value];
    weatherLogo.alt = weatherObject.logo.value;
  } catch (error) {
    console.error(error.message);
  }
}

const weatherImages = {
  "clear-day": clearDayImage,
  "clear-night": clearNightImage,
  cloudy: cloudyImage,
  fog: fogImage,
  hail: hailImage,
  "partly-cloudy-day": partyCloudyDayImage,
  "partly-cloudy-night": partlyCloudyNight,
  "rain-snow-showers-day": rainSnowShowersDay,
  "rain-snow-showers-night": rainSnowShowersNight,
  "rain-snow": rainSnowImage,
  rain: rainImage,
  "showers-day": showersDayImage,
  "showers-night": showersNightImage,
  sleet: sleetImage,
  "snow-showers-day": snowShowersDayImage,
  "snow-showers-night": snowShowersNightImage,
  snow: snowImage,
  "thunder-rain": thunderrainImage,
  "thunder-showers-day": thunderShowersDayImage,
  "thunder-showers-night": thunderShowersNightImage,
  thunder: thunderImage,
  wind: windImages,
};

export default weatherImages;
