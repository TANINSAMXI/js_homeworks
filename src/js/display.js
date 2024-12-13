export function displayWeather(weatherInfo) {
    const weatherInfoContainer = document.getElementById('weather-info')

    weatherInfoContainer.innerHTML = `
        <h3>Weather in ${weatherInfo.name}</h3>
        <img src="${weatherInfo.icon}" alt="Weather Icon">
        <p>Temperature:${weatherInfo.temp}°C</p>
        <p>Description: ${weatherInfo.description}</p>
        <p>Humidity:${weatherInfo.humidity}%</p>
        <p>Wind Speed: ${weatherInfo.windSpeed} m/s</p>
        <p>Wind Direction: ${weatherInfo.windDeg}°</p>
    `
}
