import React, { useState, useEffect } from 'react'
import './Home.css';
import Citycard from '../components/Citycard.js';
import Hourlycard from '../components/Hourlycard';
import Titlecard from '../components/Titlecard';

function Home() {
  let [nyHourly, setNyHourly] = useState([])
  let [nyWeather, setNyWeather] = useState([])

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

let apiKey = "75ed5b185b55fa3e505d70d93a44599e"

let citiesWithLatLongs = {"NY": [40.71, -74.00], "SF": [37.77, -122.41], "SYD": [-33.8, 151.2], "TK": [35.67, 139.65], "RM": [41.9, 12.49]}

useEffect(() => {
  window.history.replaceState({}, document.title)
  let cities = Object.keys(citiesWithLatLongs)
  for(let i = 0; i < cities.length; i++) {
    let city = cities[i]
    let lat = citiesWithLatLongs[city][0]
    let long = citiesWithLatLongs[city][1]
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`)
    .then(resp => resp.json())
    .then(data => {
      populateTablesWithCity(data, city, city.id)
    })
  }
  
  fetch("/api/showCityByCityName?cityName=NY")
  .then(resp => resp.json())
  .then(data => { 
    setNyWeather(data)
  })

  fetch("/api/showHoursByCityName?cityName=NY")
  .then(resp => resp.json())
  .then(data => {
    data.sort(compare_hours);
    setNyHourly(data)})
}, [])

  function populateTablesWithCity(cityWeatherInfo, cityName, cityId) {
    fetch("/api/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentTemp: cityWeatherInfo.current.temp,
        time: cityWeatherInfo.current.dt,
        feelsLike: cityWeatherInfo.current.feels_like,
        uvi: cityWeatherInfo.current.uvi,
        sunrise: cityWeatherInfo.current.sunrise,
        sunset: cityWeatherInfo.current.sunset,
        icon: cityWeatherInfo.current.weather[0].icon,
        humidity: cityWeatherInfo.current.humidity,
        weatherdesc: cityWeatherInfo.current.weather[0].description,
        cityName: cityName
      })
    })
    for (let i=0; i < 24; i++) {
      let hour = cityWeatherInfo.hourly[i]
      fetch("/api/hours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hourlyTime: hour.dt,
        temp: hour.temp,
        icon: hour.weather[0].icon,
        hourNumber: i,
        cityName: cityName,
        city_id: cityId
      })
    })
    }
    for (let i=0; i < 5; i++) {
      let day = cityWeatherInfo.daily[i]
      fetch("/api/days", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dailyTime: day.dt,
        tempH: day.temp.max,
        tempL: day.temp.min,
        icon: day.weather[0].icon,
        weatherdesc: day.weather[0].description,
        dayNumber: i,
        cityName: cityName,
        city_id: cityId
      })
    })
    }
  }
  
  let mainWeather = nyWeather.map(weather => (
    <Titlecard
      key={weather.id}
      weather={weather}
      />
  ))

  let shownArray = Object.keys(citiesWithLatLongs).map(city => (
    <Citycard
    key={city.id}
    cityName={city}
    />
  ))

  let currentHourly = nyHourly.map(hour => (
    <Hourlycard
      key={hour.id}
      hour={hour}
      />
  ))

  return (
    <div id="hpagemain">
    <div id="hpage">
      <div id="leftside">
        <h1 id="mainheading">Live Forecasts So You’ll Never Forget Your Umbrella.</h1>
      </div>
      <div id="rightside">
      <div id="maincitytop">
          {mainWeather}
        </div>
        <div id="maincityinfo">
          <h2>NY Hourly Forecast</h2>
          {currentHourly}
        </div>
      </div>
    </div>
    <div id="destinationdisplay">
      <div id="destinationtitle">
        <h1 id="locationTitle">Featured Locations</h1>
      </div>
      <div id="displaycardarea">
        {shownArray}
      </div>
    </div>
    <div id="footer">
    </div>
    </div>
  )
}

export default Home