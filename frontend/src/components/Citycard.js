import React, {useState, useEffect} from 'react'
import './Citycard.css';
import { Link } from "react-router-dom"

function Citycard({cityName}) {
  let [cards, setCards] = useState()
  let [displayedCard, setDisplayedCard] = useState({})
  let [cName, setCName] = useState('')
  let [weatherInfo, setWeatherInfo] = useState('')

    useEffect(() => {
      fetch(`/api/showCityByCityName?cityName=${cityName}`)
      .then(resp => resp.json())
      .then(data => {setDisplayedCard(data[0])}) 
  }, [])

  useEffect(() => {
    window.localStorage.setItem('cardInfo', JSON.stringify(weatherInfo))
  }, [weatherInfo])
  
  useEffect(() => {
    const data = window.localStorage.getItem('cardInfo')
    setWeatherInfo(JSON.parse(data))
  }, [])

  function clickInfo(e) {
    setWeatherInfo(e); 
  }

  function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    let newVal = ((valNum-273.15)*1.8)+32
    return newVal.toFixed(0)
  }

  let cityTitle = (displayedCard ? displayedCard.cityName : "")
  let currentTemp = (displayedCard  ? temperatureConverter(displayedCard.currentTemp) : "")
  let currentVibes = (displayedCard  ? temperatureConverter(displayedCard.feelsLike) : "")
  let currentIcon = (displayedCard  ? displayedCard.icon : "")
  let currentDesc = (displayedCard  ? displayedCard.weatherdesc : "")

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

  return (
    <Link to={{pathname: "/citypage"}} onClick={clickInfo} state={{ cityname: cityName }} style={{ textDecoration: 'none'}} id="cardText">
    <div id="wholecard">
        <h1 id="hidden">{cityName}</h1>
        <h1 id="cardTitle">{cName}</h1>
        <div id="currentWeather">
          <h2>{currentTemp}°</h2>
          <img src={`http://openweathermap.org/img/wn/${currentIcon}.png`} id="weatherIcon"/>
          <h3>{currentDesc}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Citycard