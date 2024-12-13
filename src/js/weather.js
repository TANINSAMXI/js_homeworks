export const fetchWeather = async (city) => {
    const apiKey = '5d066958a60d315387d9492393935c19'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('City not found')
    }

    const data = await response.json()
    console.log(data)
    return data
}
