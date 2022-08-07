import React from 'react'
import './Home.css';
import Citycard from '../components/Citycard.js';


let testArray = ["card1", "card2", "card3", "card4", "card5"]

let shownArray = testArray.map((test) => (
  <Citycard
    key={test.id}
    />
))

function Home() {
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
        {shownArray}
      </div>
    </div>
    </div>
  )
}

export default Home