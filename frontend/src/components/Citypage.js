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


  console.log(dailyWeatherInfo)
  console.log(hourlyWeatherInfo)
  console.log(currentWeatherInfo)
  
  return (
    <div id="anything">
      <h1>{cityName}</h1>

    </div>
  )
}

export default Citypage