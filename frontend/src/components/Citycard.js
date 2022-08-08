import React, {useState, useEffect} from 'react'
import './Citycard.css';
import { Link } from "react-router-dom"

function Citycard({cityName}) {
  let [cards, setCards] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/cities")
      .then(resp => resp.json())
      .then(data => setCards(data)) 
  }, [])

  console.log(cards)


  return (
    <Link to={{pathname: "/citypage"}} state={{ cityname: cityName }}>
    <div id="wholecard">
        <h1>Card</h1>
    </div>
    </Link>
  )
}

export default Citycard