import React, {useState, useEffect} from 'react'
import './Citycard.css';
import { Link } from "react-router-dom"

function Citycard({cityName}) {
  let [cards, setCards] = useState()
  let [displayedCard, setDisplayedCard] = useState({})
  let [cName, setCName] = useState('')

    useEffect(() => {
      fetch(`/api/showCityByCityName?cityName=${cityName}`)
      .then(resp => resp.json())
      .then(data => {console.log(data[0]);setDisplayedCard(data[0])}) 
  }, [])

  useEffect(() => {
    window.localStorage.setItem('cardInfo', JSON.stringify(displayedCard))
  }, [displayedCard])

  useEffect(() => {
    const data = window.localStorage.getItem('cardInfo')
    setDisplayedCard(JSON.parse(data))
  }, [])

  let cityTitle = (displayedCard ? displayedCard.cityName : "")
  let currentTemp = (displayedCard  ? displayedCard.currentTemp : "")
  let currentVibes = (displayedCard  ? displayedCard.feelsLike : "")
  let currentIcon = (displayedCard  ? displayedCard.icon : "")

  useEffect(() => {
    if (cityName === "NY") {
      setCName("New York") 
    }
    if (cityName === "SF") {
      setCName("San Francisco") 
    }
    if (cityName === "SYD") {
      setCName("Sydney") 
    }
    if (cityName === "TK") {
      setCName("Tokyo") 
    }
    if (cityName === "RM") {
      setCName("Rome") 
    }
  }, [])

  console.log(cityName)
  return (
    <Link to={{pathname: "/citypage"}} state={{ cityname: cityName }}>
    <div id="wholecard">
        <h1 id="hidden">{cityName}</h1>
        <h1>{cName}</h1>
        <div id="currentWeather">
          <h2>{currentTemp}°</h2>
          <img src={`http://openweathermap.org/img/wn/${currentIcon}.png`}/>
        </div>
    </div>
    </Link>
  )
}

export default Citycard