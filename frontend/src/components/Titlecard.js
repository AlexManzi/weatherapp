import React from 'react'
import './Titlecard.css';

function Titlecard({weather}) {

    function temperatureConverter(valNum) {
        valNum = parseFloat(valNum);
        let newVal = ((valNum-273.15)*1.8)+32
        return newVal.toFixed(0)
    }

    let currentTemp = (weather ? temperatureConverter(weather.currentTemp) : "")
    let currentIcon = (weather ? weather.icon : "")
    let currentVibes = (weather ? temperatureConverter(weather.feelsLike) : "")

    console.log(weather)

  return (
    <div id="topdiv">
        <h1 id="placeName">New York</h1>
        <h2>Currently {currentTemp}°</h2>
        <img id="weatherpic" src={`http://openweathermap.org/img/wn/${currentIcon}.png`}/>
        <h2></h2>
        <h2 id="feelslike">It feels like {currentVibes}°</h2>
    </div>
  )
}

export default Titlecard