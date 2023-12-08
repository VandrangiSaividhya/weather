async function getWeather() {
  const cityInput = document.getElementById("cityInput");
  const cityName = cityInput.value;

  if (cityName.trim() === "") {
    alert("Please enter a city name!");
    return;
  }

  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    const weatherInfo = document.getElementById("weatherInfo");
    if (response.ok) {
      const { name, main, weather } = weatherData;
      const temperature = main.temp;
      const description = weather[0].description;

      weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
      `;
    } else {
      weatherInfo.innerHTML = `<p>City not found</p>`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Something went wrong!");
  }
}
