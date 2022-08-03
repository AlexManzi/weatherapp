import React, {useState, useEffect } from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"

function Navbar() {

    const [menu, setMenu] = useState(false)
    const [screenWidth,  setScreenWidth] = useState(window.innerWidth)

    function toggleNav() {
        setMenu(!menu)
    }

    useEffect(() => {
        function changeWidth() {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('newsize', changeWidth)
        return() => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

return (
    <div id="wholebar">
        <Link to="/" style={{ textDecoration: 'none'}}><h1 id="siteName">Umbrella</h1></Link>
    <nav>
        {(menu || screenWidth > 500) && (
            <ul className='list'>
                <li className='items'>Destinations</li>
            </ul>
        )}
    </nav>
    </div>
)
}

export default Navbar