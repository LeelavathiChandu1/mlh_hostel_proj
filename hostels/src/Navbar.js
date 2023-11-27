import React from "react";
import './Navbar.css'
function Navbar() {
    return(
        <nav className="nav">
            {/* <img href="/" className="site-title" src="svecw_logo.png"/> */}
            {/* <a href="/"> <img className="site-title" src="svecw_logo.png"/></a> */}
            <ul>
                <li>
                    <a href="/about">About</a></li>
                   <li> <a href="/Booking/App1">Bookings</a></li>
                   {/* <li> <a href="/complaints">Complaints</a></li>
                  <li>  <a href="/admin">Admin</a> */}
                    {/* </li> */}
            </ul>
        </nav>
    )
}
export default Navbar;