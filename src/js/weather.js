'use strict'

export const fetchWeatherData = async (city) => {
    const apiKey = '5d066958a60d315387d9492393935c19'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) new Error('City not found')
        return await response.json()
    } catch (error) {
        console.error('Error fetching weather data:', error.message)
    }
}
