import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Citypage from './components/Citypage.js';

function App() {
  return (
    <div className="App">
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="CityWeather" element={<Citypage />}/>
          </Routes>
    </div>
  );
}

export default App;
