import React from 'react'
import './Currentweather.css';

function Currentweather({weather, cName}) {
    function temperatureConverter(valNum) {
        valNum = parseFloat(valNum);
        let newVal = ((valNum-273.15)*1.8)+32
        return newVal.toFixed(0)
    }

    function getHourFromUnixTimestamp(timestamp) {
        let hours = new Date(timestamp * 1000).getHours()
        if( hours > 12 && hours < 24) {
            hours = hours - 12
            return `${hours} pm`
        } else if (hours === 12) {
            return "12 pm"
        } else if (hours === 24) {
            return "12 am"
        }
        return `${hours} am`
    }
    
    let cityTemp = (weather ? temperatureConverter(weather.currentTemp) : "")
    let cityVibes = (weather ? temperatureConverter(weather.feelsLike) : "")
    let cityHumidity = (weather ? weather.humidity : "")
    let cityUvi = (weather ? weather.uvi : "")
    let cityIcon = (weather ? weather.icon : "")
    let citySunrise = (weather ? getHourFromUnixTimestamp(weather.sunrise) : "")
    let citySunset = (weather ? getHourFromUnixTimestamp(weather.sunset) : "")

    return (
    <div id="currentCityInfo">
        <div id="cityInfo">
            <h1 id="cityName">{cName}</h1>
            <h3>Sunrise today is at {citySunrise} EST</h3>
            <h3>Sunset today is at {citySunset} EST</h3>
        </div>
        <div id="cityWeather">
            <div id="weatherline">
            <h2>{cityTemp}°</h2>
            <img id="iconpic" src={`http://openweathermap.org/img/wn/${cityIcon}.png`}/>
            </div>
            <div id="swingRight">
            <h3>Feels like {cityVibes}°</h3>
            <h3>{cityHumidity}% Humidity</h3>
            <h3>{cityUvi} UV Index</h3>
            </div>
        </div>
        </div>
    )
}

export default Currentweather