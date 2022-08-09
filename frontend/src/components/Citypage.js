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
  let [cName, setCName] = useState('')

  function compare_hours( a, b )
  {
  if ( a.hourNumber < b.hourNumber){
    return -1;
  }
  if ( a.hourNumber > b.hourNumber){
    return 1;
  }
  return 0;
}

function compare_days( a, b )
  {
  if ( a.dailyTime < b.dailyTime){
    return -1;
  }
  if ( a.dailyTime > b.dailyTime){
    return 1;
  }
  return 0;
}

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

  useEffect(() => {
    fetch(`/api/showHoursByCityName?cityName=${cityName}`)
    .then(resp => resp.json())
    .then(data => {
      data.sort(compare_hours);
      setHourlyWeatherInfo(data)})
  }, [])

  useEffect(() => {
    fetch(`/api/showDaysByCityName?cityName=${cityName}`)
    .then(resp => resp.json())
    .then(data => {
      data.sort(compare_days);
      setDailyWeatherInfo(data)})
  }, [])

  useEffect(() => {
    fetch(`/api/cities/${cityName}`)
    .then(resp => resp.json())
    .then(data => setCurrentWeatherInfo(data))
  }, [])

  useEffect(() => {
    const data = window.localStorage.getItem('currentInfo')
    setCurrentWeatherInfo(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('currentInfo', JSON.stringify(currentWeatherInfo))
  }, [currentWeatherInfo])

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

  let hourlyInfo = hourlyWeatherInfo.map(hour => (
    <Hourlycard
      key={hour.id}
      hour={hour}
      />
  ))

  let dailyInfo = dailyWeatherInfo.map(day => (
    <Dailycard
      key={day.id}
      day={day}
      />
  ))


  function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    let newVal = ((valNum-273.15)*1.8)+32
    return newVal.toFixed(0)
  }

  let cityTemp = (currentWeatherInfo ? temperatureConverter(currentWeatherInfo.currentTemp) : "")
  let cityTime = (currentWeatherInfo ? getHourFromUnixTimestamp(currentWeatherInfo.time) : "")
  let cityVibes = (currentWeatherInfo ? temperatureConverter(currentWeatherInfo.feelsLike) : "")
  let cityHumidity = (currentWeatherInfo ? currentWeatherInfo.humidity : "")
  let cityUvi = (currentWeatherInfo ? currentWeatherInfo.uvi : "")
  let cityIcon = (currentWeatherInfo ? currentWeatherInfo.icon : "")
  let citySunrise = (currentWeatherInfo ? getHourFromUnixTimestamp(currentWeatherInfo.sunrise) : "")
  let citySunset = (currentWeatherInfo ? getHourFromUnixTimestamp(currentWeatherInfo.sunset) : "")

  // console.log(dailyWeatherInfo)
  // console.log(hourlyWeatherInfo)
  // console.log(currentWeatherInfo)



  
  return (
    <div id="citypage">
      <div id="leftwrapper">
      <div id="currentCityInfo">
      <div id="cityInfo">
        <h1 id="cityName">{cName}</h1>
        <h3>Sunrise today is at {citySunrise}</h3>
        <h3>Sunset today is at {citySunset}</h3>
      </div>
      <div id="cityWeather">
        <div id="weatherline">
          <h2>{cityTemp}°</h2>
          <img id="iconpic" src={`http://openweathermap.org/img/wn/${cityIcon}.png`}/>
        </div>
        <div id="swingRight">
        <h3>The current time is {cityTime}</h3>
        <h3>It feels like {cityVibes}°</h3>
        <h3>{cityHumidity}% Humidity</h3>
        <h3>{cityUvi} UV Index</h3>
        </div>
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