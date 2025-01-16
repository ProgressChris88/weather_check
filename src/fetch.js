const api = "RTDLXYU6B82XJAV3MG2NK2GDZ";
const location = "osaka";
const unitGroup = "us";

export const weatherObject = {
  address: {
    value: "london",
    display: "London, UK",
  },
  condition: {
    value: "cloudy",
    display: "Cloudy",
  },
  feelsLike: {
    value: "46.5",
    display: "Feels Like: 46.5 °F",
  },
  humidity: {
    value: "85.2",
    display: "Humidity: 85.2%",
  },
  temperature: {
    value: "46.5",
    display: "Temp: 46.5 °F",
  },
  wind: {
    value: "2",
    display: "2 MPH",
  },
  logo: {
    value: "cloudy",
  },
};

export async function getWeather(locationQuery) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
        locationQuery || location
      }?unitGroup=${unitGroup}&key=${api}`
    );
    const data = await response.json();
    processJSON(data);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

function processJSON(json) {
  weatherObject.address = {
    value: json.resolvedAddress,
    display: json.resolvedAddress,
  };
  weatherObject.condition = {
    value: json.currentConditions.icon,
  };
  weatherObject.temperature = {
    value: json.currentConditions.temp,
    display: `Temp: ${json.currentConditions.temp} °F`,
  };
  weatherObject.feelsLike = {
    value: json.currentConditions.feelslike,
    display: `Feels Like: ${json.currentConditions.feelslike} °F`,
  };
  weatherObject.humidity = {
    value: json.currentConditions.humidity,
    display: `Humidity: ${json.currentConditions.humidity}%`,
  };
  weatherObject.wind = {
    value: json.currentConditions.windspeed,
    display: `Wind: ${json.currentConditions.windspeed} MPH`,
  };
  weatherObject.logo.value = json.currentConditions.icon;
}
