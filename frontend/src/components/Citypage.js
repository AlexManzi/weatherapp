import React, {useState, useEffect} from 'react'
import './Citypage.css';
import { useLocation } from 'react-router-dom'

function Citypage() {
  const location = useLocation()
  let cityname = location.state.cityname
  let [hourlyWeatherInfo, setHourlyWeatherInfo] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/showHoursByCityName?cityName=${cityname}`)
    .then(resp => resp.json())
    .then(data => setHourlyWeatherInfo(data))
  }, [])

  console.log(hourlyWeatherInfo)

  
  return (
    <div id="anything">Citypage {cityname}</div>
  )
}

export default Citypage