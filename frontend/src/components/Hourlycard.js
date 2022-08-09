import React from 'react'
import './Hourlycard.css';

function getHourFromUnixTimestamp(timestamp) {
  let hours = new Date(timestamp * 1000).getHours()
  if( hours > 12) {
    hours = hours - 12
    return `${hours} pm`
  } else if (hours === 12) {
    return "12 pm"
  }
  return `${hours} am`
  
}
function Hourlycard({hour}) {

  function temperatureConverter(valNum) {
    valNum = parseFloat(valNum).toFixed(2);
    return ((valNum-273.15)*1.8)+32
  }

  let hourTime = (hour ? getHourFromUnixTimestamp(hour.hourlyTime) : "")
  let hourTemp = (hour ? temperatureConverter(hour.temp) : "")
  let hourIcon = (hour ? hour.icon : "")

  // console.log(hour)

  return (
    <div id="hourlycard">
      <div id="hourrow">
        <h2>{hourTime}</h2>
        <h2>{hourTemp}°</h2>
        <img id="weatherpic" src={`http://openweathermap.org/img/wn/${hourIcon}.png`}/>
      </div>
    </div>
  )
}

export default Hourlycard