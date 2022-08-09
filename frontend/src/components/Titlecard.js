import React from 'react'
import './Titlecard.css';

function Titlecard({weather}) {

    let currentTemp = (weather ? weather.currentTemp : "")
    let currentIcon = (weather ? weather.currentIcon : "")
    let currentVibes = (weather ? weather.currentVibes : "")

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