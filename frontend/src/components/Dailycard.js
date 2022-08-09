import React from 'react'
import './Dailycard.css';

function Dailycard({day}) {

  function getHourFromUnixTimestamp(timestamp) {
    let hours = new Date(timestamp * 1000).getDay()    
  }

  let cityDay = (day ? day.dailyTime : "")
  let cityTempH = (day ? day.tempH : "")
  let cityTempL = (day ? day.tempL : "")
  let cityIcon = (day ? day.icon : "")

  console.log(day)


  return (
    <div id="dailycard">
      <h1>{cityDay}</h1>
      <div id="tworow">
        <h2>{cityTempH}°</h2>
        <h2>{cityTempL}°</h2>
      </div>
      <img id="weathericon" src={`http://openweathermap.org/img/wn/${cityIcon}.png`}/>
    </div>
  )
}

export default Dailycard