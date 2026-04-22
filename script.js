document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const weatherInfo = document.getElementById("weather-info");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "1296aa9ff98a036e7344238ee3aeacdf";

    getWeatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
        descriptionDisplay.textContent = "Loading...";

        try {
            const data = await fetchWeatherData(city);
            displayWeatherData(data);

            weatherInfo.classList.remove("hidden");
            errorMessage.classList.add("hidden");

        } catch (error) {
            errorMessage.classList.remove("hidden");
            weatherInfo.classList.add("hidden");
        }
    });

    cityInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            getWeatherBtn.click();
        }
    });

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        return await response.json();
    }

    function displayWeatherData(data) {
        const { name, main, weather } = data;

        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature: ${main.temp}°C`;
        descriptionDisplay.textContent = `Weather: ${weather?.[0]?.description || "N/A"}`;
    }
});