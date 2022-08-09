import React, {useState, useEffect} from 'react'
import './Citypage.css';
import { useLocation } from 'react-router-dom'
import Dailycard from './Dailycard';
import Hourlycard from './Hourlycard';
import Currentweather from './Currentweather';

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
}, [cityName])

  useEffect(() => {
    fetch(`/api/showHoursByCityName?cityName=${cityName}`)
    .then(resp => resp.json())
    .then(data => {
      data.sort(compare_hours);
      setHourlyWeatherInfo(data)})
  }, [cityName])

  useEffect(() => {
    fetch(`/api/showDaysByCityName?cityName=${cityName}`)
    .then(resp => resp.json())
    .then(data => {
      data.sort(compare_days);
      setDailyWeatherInfo(data)})
  }, [cityName])

  useEffect(() => {
    fetch(`/api/showCityByCityName?cityName=${cityName}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setCurrentWeatherInfo(data)})
  }, [cityName])

  let testArr = ["1"]

  let currentInfo = testArr.map(weather => (<Currentweather
    key={weather.id}
    weather={weather}
    cName={cName}
    />))
    
   

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

  // console.log(dailyWeatherInfo)
  // console.log(hourlyWeatherInfo)
  // console.log(currentWeatherInfo)

  return (
    <div id="citypage">
      <div id="leftwrapper">
      {currentInfo}
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