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
  let apikey = "75ed5b185b55fa3e505d70d93a44599e";
  let cityCards = []
  let latLongs = {
    "San Francisco": [123, 456],
    "Sydney" : [123, 123],
    "Toronto" : [123, 123],
    "Rome": [123, 123]
  }

  function createCityCard(city) {
    let lat = latLongs[city][0]
    let long = latLongs[city][1]
    let apiCall = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=hourly&appid=${apikey}`
    fetch(apiCall)
    .then(resp => resp.json())
    .then(
    cityCards.push(<Citycard
      key={city}
      />))
  }

  Object.keys(latLongs).forEach((city) => createCityCard(city))


  // useEffect(() => {
  //   fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly&appid=75ed5b185b55fa3e505d70d93a44599e")
  //     .then(resp => resp.json())
  //     .then((data) => console.log(data));


  // }, [])

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
        {cityCards}
      </div>
    </div>
    <div id="footer">
    </div>
    </div>
  )
}

export default Home