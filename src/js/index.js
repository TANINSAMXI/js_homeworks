'use strict'

import { fetchWeather } from './weather.js'
import { displayWeather } from './display.js'

const form = document.getElementById('city-form')
const cityInput = document.getElementById('city')
const weatherInfoContainer = document.getElementById('weather-info')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const city = cityInput.value.trim()
    if (city) {
        fetchWeather(city)
            .then((weatherData) => {
                const weatherInfo = {
                    name: weatherData.name,
                    temp: weatherData.main.temp,
                    description: weatherData.weather[0].description,
                    humidity: weatherData.main.humidity,
                    windSpeed: weatherData.wind.speed,
                    windDeg: weatherData.wind.deg,
                    icon: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
                }
                displayWeather(weatherInfo)
            })
            .catch((error) => {
                weatherInfoContainer.innerHTML = `<p class="text-danger">Error: ${error}</p>`
            })
    }
})
