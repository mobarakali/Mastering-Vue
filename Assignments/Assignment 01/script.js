// Constants
// const API_KEY = "ba60b48beedfcceb3ddc6e79ecda50aa"; // Replace with your API key from OpenWeatherMap
const API_KEY = "d6a5a587d9f2465fb9161231232106&q"; // Replace with your API key from OpenWeatherMap

// Function to retrieve weather data
const getWeatherData = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch weather data.");
  }
};

// Function to display weather information
const displayWeatherInfo = (weatherData) => {
  const weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.innerHTML = `
    <h2>${weatherData.name}</h2>
    <p>Temperature: ${weatherData.main.temp} &#8451;</p>
    <p>Description: ${weatherData.weather[0].description}</p>
    <p>Humidity: ${weatherData.main.humidity}%</p>
  `;
};

// Function to handle button click event
const getWeather = () => {
  const locationInput = document.getElementById("locationInput");
  const location = locationInput.value.trim();

  if (location === "") {
    alert("Please enter a valid location.");
    return;
  }

  getWeatherData(location)
    .then((data) => displayWeatherInfo(data))
    .catch((error) => {
      console.error(error);
      alert("Failed to fetch weather data. Please try again.");
    });

  locationInput.value = "";
};
