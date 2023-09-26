let data;
const options = {
    method: 'GET',
    headers: { 
        accept: 'application/json',
        'apikey':'kOUFkZ1L8hTDLV9NN5dP9JSTcMvT0ujJ'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city

    fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${city}`, options)
        .then(response => response.json())
        .then((response) => {
            data = response
            console.log(data)

            cloudBase.innerHTML = response.data.values.cloudBase
            cloudCeiling.innerHTML = response.data.values.cloudCeiling
            cloudCover.innerHTML = response.data.values.cloudCover
            humidity.innerHTML = response.data.values.humidity
            humidity2.innerHTML = response.data.values.humidity
            pressureSurfaceLevel.innerHTML = response.data.values.pressureSurfaceLevel
            temperature.innerHTML = response.data.values.temperature
            temperature2.innerHTML = response.data.values.temperature
            temperatureApparent.innerHTML = response.data.values.temperatureApparent
            visibility.innerHTML = response.data.values.visibility
            weatherCode.innerHTML = response.data.values.weatherCode
            windDirection.innerHTML = response.data.values.windDirection
            windGust.innerHTML = response.data.values.windGust
            windSpeed.innerHTML = response.data.values.windSpeed
            windSpeed2.innerHTML = response.data.values.windSpeed
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
