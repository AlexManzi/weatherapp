import React, {useState, useEffect} from 'react'
import './Citycard.css';
import { Link } from "react-router-dom"

function Citycard({cityName}) {
  let [cards, setCards] = useState()
  let [displayedCard, setDisplayedCard] = useState('')

    useEffect(() => {
      fetch("http://localhost:3000/cities")
      .then(resp => resp.json())
      .then(data => setCards(data)) 
  }, [])

  let cityTitle = (displayedCard ? displayedCard.cityName : "")
  let currentTemp = (displayedCard  ? displayedCard.currentTemp : "")
  let currentVibes = (displayedCard  ? displayedCard.feelsLike : "")
  let currentIcon = (displayedCard  ? displayedCard.icon : "")

  if (cityName === "NY") {
    cityName = "New York"
  }
  else if (cityName === "SF") {
    cityName = "San Francisco"
  }
  else if (cityName === "SYD") {
    cityName = "Sydney"
  }
  else if (cityName === "TK") {
    cityName = "Tokyo"
  }
  else if (cityName === "RM") {
    cityName = "Rome"
  }

  console.log(cityName)
  return (
    <Link to={{pathname: "/citypage"}} state={{ cityname: cityName }}>
    <div id="wholecard">
        <h1>{cityName}</h1>
        <div id="currentWeather">
          <h2>{currentTemp}°</h2>
          <img src={`http://openweathermap.org/img/wn/${currentIcon}.png`}/>
        </div>
    </div>
    </Link>
  )
}

export default Citycard