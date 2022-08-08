import React from 'react'
import './Citypage.css';
import { useLocation } from 'react-router-dom'

function Citypage() {
  const location = useLocation()
  let cityname = location.state.cityname
  return (
    <div id="anything">Citypage {cityname}</div>
  )
}

export default Citypage