import React, { useState, useEffect } from 'react'
import './Home.css';
import Citycard from '../components/Citycard.js';
import { Link } from "react-router-dom"

// function testApi() {
//   fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=75ed5b185b55fa3e505d70d93a44599e")
//   .then(resp => resp.json())
//   .then((data) => console.log(data));
// }

// testApi(

function Home() {
  let [cityOne, setCityOne] = useState({
    "lat": 39.31,
    "lon": -74.5,
    "timezone": "America/New_York",
    "timezone_offset": -18000,
    "current": {
      "dt": 1646318698,
      "sunrise": 1646306882,
      "sunset": 1646347929,
      "temp": 282.21,
      "feels_like": 278.41,
      "pressure": 1014,
      "humidity": 65,
      "dew_point": 275.99,
      "uvi": 2.55,
      "clouds": 40,
      "visibility": 10000,
      "wind_speed": 8.75,
      "wind_deg": 360,
      "wind_gust": 13.89,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ]
    },
    "hourly": [
        {
          "dt": 1646316000,
          "temp": 281.94,
          "feels_like": 278.49,
          "pressure": 1014,
          "humidity": 67,
          "dew_point": 276.16,
          "uvi": 1.49,
          "clouds": 52,
          "visibility": 10000,
          "wind_speed": 7.16,
          "wind_deg": 313,
          "wind_gust": 10.71,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "pop": 0.03
        },
        {
            "dt": 1646316000,
            "temp": 281.94,
            "feels_like": 278.49,
            "pressure": 1014,
            "humidity": 67,
            "dew_point": 276.16,
            "uvi": 1.49,
            "clouds": 52,
            "visibility": 10000,
            "wind_speed": 7.16,
            "wind_deg": 313,
            "wind_gust": 10.71,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ]
            }]
})

  // useEffect(() => {
  //   fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly&appid=75ed5b185b55fa3e505d70d93a44599e")
  //     .then(resp => resp.json())
  //     .then((data) => setCityOne(data))

  // }, [])

  useEffect(() => {
    fetch("http://localhost:3000/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentTemp: cityOne.current.temp,
        time: cityOne.current.dt,
        feelsLike: cityOne.current.feels_like,
        uvi: cityOne.current.uvi,
        sunrise: cityOne.current.sunrise,
        sunset: cityOne.current.sunset,
        icon: cityOne.current.weather[0].icon,
        humidity: cityOne.current.humidity,
        cityName: "New York"
      })
    })
  })

  console.log(cityOne)

  return (
    <div id="hpagemain">
    <div id="hpage">
      <div id="leftside">
        <h1 id="mainheading">Live Forecasts So You’ll Never Forget Your Umbrella.</h1>
      </div>
      <div id="rightside">
        <div id="maincitytop">
          <h2>City Here</h2>
          <h2>Temp Here</h2>
          <h2>Pic here</h2>
          <h3>Feels Like</h3>
        </div>
        <div id="maincityinfo">
        </div>
      </div>
    </div>
    <div id="destinationdisplay">
      <div id="destinationtitle">
        <h1>Featured Locations</h1>
      </div>
      <div id="displaycardarea">
      </div>
    </div>
    <div id="footer">
    </div>
    </div>
  )
}

export default Home