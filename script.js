function fetchWeather() {
    const location = document.getElementById('location-input').value || " ";
    const weatherData = {
        "New York": { description: "Sunny", temperature: "25°C" },
        "London": { description: "Cloudy", temperature: "18°C" },
        "Andhra pradesh": { description: "Rainy", temperature: "20°C" },
        "Tokyo": { description: "Windy", temperature: "22°C" }
    };

    const data = weatherData[location] || { description: "Data not available", temperature: "N/A" };

    document.getElementById('location').innerText = location;
    document.getElementById('description').innerText = data.description;
    document.getElementById('temperature').innerText = data.temperature;

    document.getElementById('weather-box').style.animation = 'none';
    void document.getElementById('weather-box').offsetWidth;
    document.getElementById('weather-box').style.animation = 'fadeIn 1s ease-in-out';
}