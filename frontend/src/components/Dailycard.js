import React from 'react'
import './Dailycard.css';

function Dailycard({day}) {

  function getDayFromUnixTimestamp(timestamp) {
    let dayNumber = new Date(timestamp * 1000).getDay()
    switch (dayNumber) {
      case 0:
        return "Sunday"
      case 1:
        return "Monday"
      case 2:
        return "Tuesday"
      case 3:
        return "Wednesday"
      case 4:
        return "Thursday"
      case 5:
        return "Friday"
      case 6:
        return "Saturday"
      default:
        return "uh oh"
    } 
  }

  function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    let newVal = ((valNum-273.15)*1.8)+32
    return newVal.toFixed(0)
  }

  let cityDay = (day ? getDayFromUnixTimestamp(day.dailyTime) : "")
  let cityTempH = (day ? temperatureConverter(day.tempH) : "")
  let cityTempL = (day ? temperatureConverter(day.tempL) : "")
  let cityIcon = (day ? day.icon : "")

  console.log(day)


  return (
    <div id="dailycard">
      <h1 id="dailyHeading">{cityDay}</h1>
      <div id="tworow">
        <h2>The High will be {cityTempH}°</h2>
        <h2>The Low will be {cityTempL}°</h2>
      </div>
      <img id="weathericon" src={`http://openweathermap.org/img/wn/${cityIcon}.png`}/>
    </div>
  )
}

export default Dailycard