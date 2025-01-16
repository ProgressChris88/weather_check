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
  } catch (error) {
    console.error(error.message);
  }
}
