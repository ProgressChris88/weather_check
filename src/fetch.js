const api = "RTDLXYU6B82XJAV3MG2NK2GDZ";
const location = "london";
export let weatherObject = "";

export async function getWeather() {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${api}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      weatherObject = data;
    })
    .catch(function (error) {
      console.error(error.message);
    });
}
