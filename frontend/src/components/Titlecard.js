import React from 'react'
import './Titlecard.css';

function Titlecard({hour}) {

    let currentTemp = (hour ? hour.currentTemp : "Loading")
    let currentIcon = (hour ? hour.currentIcon : "Loading")
    let currentVibes = (hour ? hour.currentVibes : "Loading")

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