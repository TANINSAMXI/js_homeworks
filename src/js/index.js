'use strict'

/**
 * @param {Object} data
 * @param {Object} data.main
 * @param {number} data.main.temp
 * @param {number} data.main.pressure
 * @param {number} data.main.humidity
 * @param {Object[]} data.weather
 * @param {string} data.weather[0]
 * @param {string} data.weather[0]
 * @param {Object} data.wind
 * @param {number} data.wind.speed
 * @param {number} data.wind.deg
 */

import { fetchWeatherData } from './weather.js'
import { handleFormSubmit } from './handler.js'

const weatherForm = document.querySelector('#weatherForm')
const weatherCard = document.querySelector('#weatherCard')

const updateWeatherCard = (data) => {
    weatherCard.querySelector('.card-title').innerHTML =
        ` ${data.name} | ${data.main.temp}°C`
    weatherCard.querySelector('#weatherInfo').innerHTML =
        `Description: ${data.weather[0].description}`
    weatherCard.querySelector('.card-pressure').innerHTML =
        `Pressure: ${data.main.pressure} mm Hg.`
    weatherCard.querySelector('.card-humidity').innerHTML =
        `Humidity: ${data.main.humidity}%`
    weatherCard.querySelector('.card-wind').innerHTML =
        `Wind: ${data.wind.speed} m/s, direction: ${data.wind.deg}°`
    weatherCard.querySelector('.col-md-4').innerHTML =
        `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="icon" >`
    weatherCard.className = 'card mt-4'
}

const fetchWeatherAndRender = async (event) => {
    event.preventDefault()
    const cityInput = handleFormSubmit(weatherForm)
    const weatherData = await fetchWeatherData(cityInput)
    updateWeatherCard(weatherData)
}

weatherForm.addEventListener('submit', fetchWeatherAndRender)
