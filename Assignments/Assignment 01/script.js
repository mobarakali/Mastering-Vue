// OpenWeatherMap API key
const API_KEY = "ba60b48beedfcceb3ddc6e79ecda50aa";

// Function to retrieve weather data from OpenWeatherMap API
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

// Function to display weather information on the page
const displayWeatherInfo = (weatherData) => {
  const weatherInfo = document.getElementById("weatherInfo");
  const temperatureCelsius = weatherData.main.temp - 273.15;

  weatherInfo.innerHTML = `
      <h2>${weatherData.name}</h2>
      <p>Temperature: ${temperatureCelsius.toFixed(2)} &#8451;</p>
      <p>Description: ${weatherData.weather[0].description}</p>
      <p>Humidity: ${weatherData.main.humidity}%</p>
    `;
};

// Function to handle button click event and retrieve weather data
const getWeather = () => {
  const locationInput = document.getElementById("locationInput");
  const location = locationInput.value.trim();

  if (location === "") {
    alert("Please enter a valid location.");
    return;
  }

  // Call getWeatherData function and pass location as an argument
  getWeatherData(location)
    .then((data) => displayWeatherInfo(data))
    .catch((error) => {
      console.error(error);
      alert("Failed to fetch weather data. Please try again.");
    });

  // Clear input field
  locationInput.value = "";
};
