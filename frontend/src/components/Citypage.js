import React, {useState, useEffect} from 'react'
import './Citypage.css';
import { useLocation } from 'react-router-dom'
import Dailycard from './Dailycard';
import Hourlycard from './Hourlycard';

function Citypage() {
  const location = useLocation()
  let cityName = location.state.cityname
  let [currentWeatherInfo, setCurrentWeatherInfo] = useState([])
  let [hourlyWeatherInfo, setHourlyWeatherInfo] = useState([])
  let [dailyWeatherInfo, setDailyWeatherInfo] = useState([])

  useEffect(() => {
    console.log(cityName)
    fetch(`http://localhost:3000/showHoursByCityName?cityName=${cityName}`)
    .then(resp => resp.json())
    .then(data => setHourlyWeatherInfo(data))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/showDaysByCityName?cityName=${cityName}`)
    .then(resp => resp.json())
    .then(data => setDailyWeatherInfo(data))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/cities/${cityName}`)
    .then(resp => resp.json())
    .then(data => setCurrentWeatherInfo(data))
  }, [])

  useEffect(() => {
    const data = window.localStorage.getItem('hourInfo')
    setHourlyWeatherInfo(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('hourInfo', JSON.stringify(hourlyWeatherInfo))
  }, [hourlyWeatherInfo])

  useEffect(() => {
    const data = window.localStorage.getItem('dailyInfo')
    setDailyWeatherInfo(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('dailyInfo', JSON.stringify(dailyWeatherInfo))
  }, [dailyWeatherInfo])



  let hourlyInfo = hourlyWeatherInfo.map(hour => (
    <Hourlycard
      key={hour.id}
      hour={hour}
      />
  ))

  let dailyInfo = dailyWeatherInfo.map(day => (
    <Dailycard
      key={day.id}
      hour={day}
      />
  ))

  let cityTemp = (currentWeatherInfo ? currentWeatherInfo.currentTemp : "")
  let cityTime = (currentWeatherInfo ? currentWeatherInfo.time : "")
  let cityVibes = (currentWeatherInfo ? currentWeatherInfo.feelsLike : "")
  let cityHumidity = (currentWeatherInfo ? currentWeatherInfo.humidity : "")
  let cityUvi = (currentWeatherInfo ? currentWeatherInfo.uvi : "")
  let cityIcon = (currentWeatherInfo ? currentWeatherInfo.icon : "")
  let citySunrise = (currentWeatherInfo ? currentWeatherInfo.sunrise : "")
  let citySunset = (currentWeatherInfo ? currentWeatherInfo.sunset : "")

  // console.log(dailyWeatherInfo)
  console.log(hourlyWeatherInfo)
  // console.log(currentWeatherInfo)
  
  return (
    <div id="citypage">
      <div id="leftwrapper">
      <div id="currentCityInfo">
      <div id="cityInfo">
        <h1>{cityName}</h1>
        <h3>Sunrise today is {citySunrise}</h3>
        <h3>Sunset today is {citySunset}</h3>
      </div>
      <div id="cityWeather">
        <div id="weatherline">
          <h2>{cityTemp}</h2>
          <img src={`http://openweathermap.org/img/wn/${cityIcon}.png`}/>
        </div>
        <h3>{cityTime}</h3>
        <h3>{cityVibes}</h3>
        <h3>{cityHumidity}</h3>
        <h3>{cityUvi}</h3>
      </div>
      </div>
      <div id="fiveday">
        {dailyInfo}
      </div>
      </div>
      <div id="rightwrapper">
        <h2>Hourly Forecast</h2>
        {hourlyInfo}
      </div>
      
    </div>
  )
}

export default Citypage