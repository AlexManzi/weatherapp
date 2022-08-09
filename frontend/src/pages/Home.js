import React, { useState, useEffect } from 'react'
import './Home.css';
import Citycard from '../components/Citycard.js';
import Hourlycard from '../components/Hourlycard';
import Titlecard from '../components/Titlecard';

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
            "dt": 1646316000+3600,
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
            },
            {
              "dt": 1646316000+2*3600,
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
            },
            {
              "dt": 1646316000+3*3600,
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
            },
            {
              "dt": 1646316000+4*3600,
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
            },
            {
              "dt": 1646316000+5*3600,
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
            },
            {
              "dt": 1646316000+6*3600,
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
            },
            {
              "dt": 1646316000+7*3600,
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
            },
            {
              "dt": 1646316000+8*3600,
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
            },
            {
              "dt": 1646316000+9*3600,
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
            },
            {
              "dt": 1646316000+10*3600,
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
            },
            {
              "dt": 1646316000+11*3600,
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
            },
            {
              "dt": 1646316000+12*3600,
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
            },
            {
              "dt": 1646316000+13*3600,
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
            },
            {
              "dt": 1646316000+14*3600,
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
            },
            {
              "dt": 1646316000+15*3600,
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
            },
            {
              "dt": 1646316000+16*3600,
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
            },
            {
              "dt": 1646316000+17*3600,
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
            },
            {
              "dt": 1646316000+18*3600,
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
            },
            {
              "dt": 1646316000+19*3600,
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
            },
            {
              "dt": 1646316000+20*3600,
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
            },
            {
              "dt": 1646316000+21*3600,
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
            },
            {
              "dt": 1646316000+22*3600,
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
            },
            {
              "dt": 1646316000+23*3600,
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
            },
            {
              "dt": 1646316000+24*3600,
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
            },
            {
              "dt": 1646316000+25*3600,
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
            },
            {
              "dt": 1646316000+26*3600,
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
            },
            {
              "dt": 1646316000+27*3600,
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
            }],
    "daily": [
      {
        "dt": 1646326800,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "moonrise": 1646309880,
        "moonset": 1646352120,
        "moon_phase": 0.03,
        "temp": {
          "day": 281.63,
          "min": 271.72,
          "max": 282.21,
          "night": 271.72,
          "eve": 277.99,
          "morn": 280.92
        },
        "feels_like": {
          "day": 277.83,
          "night": 264.72,
          "eve": 273.35,
          "morn": 277.66
        },
        "pressure": 1016,
        "humidity": 55,
        "dew_point": 273.12,
        "wind_speed": 9.29,
        "wind_deg": 3,
        "wind_gust": 16.48,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 49,
        "pop": 0.25,
        "rain": 0.11,
        "uvi": 3.38
      },
      {
        "dt": 1646326800+86400,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "moonrise": 1646309880,
        "moonset": 1646352120,
        "moon_phase": 0.03,
        "temp": {
          "day": 281.63,
          "min": 271.72,
          "max": 282.21,
          "night": 271.72,
          "eve": 277.99,
          "morn": 280.92
        },
        "feels_like": {
          "day": 277.83,
          "night": 264.72,
          "eve": 273.35,
          "morn": 277.66
        },
        "pressure": 1016,
        "humidity": 55,
        "dew_point": 273.12,
        "wind_speed": 9.29,
        "wind_deg": 3,
        "wind_gust": 16.48,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 49,
        "pop": 0.25,
        "rain": 0.11,
        "uvi": 3.38
      },
      {
        "dt": 1646326800+2*86400,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "moonrise": 1646309880,
        "moonset": 1646352120,
        "moon_phase": 0.03,
        "temp": {
          "day": 281.63,
          "min": 271.72,
          "max": 282.21,
          "night": 271.72,
          "eve": 277.99,
          "morn": 280.92
        },
        "feels_like": {
          "day": 277.83,
          "night": 264.72,
          "eve": 273.35,
          "morn": 277.66
        },
        "pressure": 1016,
        "humidity": 55,
        "dew_point": 273.12,
        "wind_speed": 9.29,
        "wind_deg": 3,
        "wind_gust": 16.48,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 49,
        "pop": 0.25,
        "rain": 0.11,
        "uvi": 3.38
      },
      {
        "dt": 1646326800+3*86400,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "moonrise": 1646309880,
        "moonset": 1646352120,
        "moon_phase": 0.03,
        "temp": {
          "day": 281.63,
          "min": 271.72,
          "max": 282.21,
          "night": 271.72,
          "eve": 277.99,
          "morn": 280.92
        },
        "feels_like": {
          "day": 277.83,
          "night": 264.72,
          "eve": 273.35,
          "morn": 277.66
        },
        "pressure": 1016,
        "humidity": 55,
        "dew_point": 273.12,
        "wind_speed": 9.29,
        "wind_deg": 3,
        "wind_gust": 16.48,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 49,
        "pop": 0.25,
        "rain": 0.11,
        "uvi": 3.38
      },
      {
        "dt": 1646326800+4*86400,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "moonrise": 1646309880,
        "moonset": 1646352120,
        "moon_phase": 0.03,
        "temp": {
          "day": 281.63,
          "min": 271.72,
          "max": 282.21,
          "night": 271.72,
          "eve": 277.99,
          "morn": 280.92
        },
        "feels_like": {
          "day": 277.83,
          "night": 264.72,
          "eve": 273.35,
          "morn": 277.66
        },
        "pressure": 1016,
        "humidity": 55,
        "dew_point": 273.12,
        "wind_speed": 9.29,
        "wind_deg": 3,
        "wind_gust": 16.48,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 49,
        "pop": 0.25,
        "rain": 0.11,
        "uvi": 3.38
      },
      {
        "dt": 1646326800+5*86400,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "moonrise": 1646309880,
        "moonset": 1646352120,
        "moon_phase": 0.03,
        "temp": {
          "day": 281.63,
          "min": 271.72,
          "max": 282.21,
          "night": 271.72,
          "eve": 277.99,
          "morn": 280.92
        },
        "feels_like": {
          "day": 277.83,
          "night": 264.72,
          "eve": 273.35,
          "morn": 277.66
        },
        "pressure": 1016,
        "humidity": 55,
        "dew_point": 273.12,
        "wind_speed": 9.29,
        "wind_deg": 3,
        "wind_gust": 16.48,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 49,
        "pop": 0.25,
        "rain": 0.11,
        "uvi": 3.38
      }]
})
  let [nyHourly, setNyHourly] = useState([])
  let [nyWeather, setNyWeather] = useState([])
  let [currentTemp, setCurrentTemp] = useState(0)
  let [currentVibes, setCurrentVibes] = useState(0)
  let [currentIcon, setCurrentIcon] = useState("")

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
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  let newVal = ((valNum-273.15)*1.8)+32
  return newVal.toFixed(0)
}
let apiKey = "75ed5b185b55fa3e505d70d93a44599e"

let citiesWithLatLongs = {"NY": [40.71, -74.00], "SF": [37.77, -122.41], "SYD": [-33.8, 151.2], "TK": [35.67, 139.65], "RM": [41.9, 12.49]}

useEffect(() => {
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
    console.log(data) 
    setNyWeather([data])
  })


  fetch("/api/showHoursByCityName?cityName=NY")
  .then(resp => resp.json())
  .then(data => {
    data.sort(compare_hours);
    setNyHourly(data)})
}, [])

  
  function populateTablesWithCity(cityWeatherInfo, cityName, cityId) {
    console.log(cityWeatherInfo.current.temp)
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
  let testArr = ["1"]


  let mainWeather = nyHourly.map(weather => (
    <Titlecard
      key={weather.id}
      weather={weather}
      />
  ))

  console.log(nyWeather)

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