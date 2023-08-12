import React from "react";
import {Link} from 'react-scroll';
import logo from '../Images/Definitivo.png'
function Navbar(){
    return(
        <div>
            <nav>
                <Link to='main' className ='logo'>
                    <img src = {logo} alt='logo'/>
                </Link>
                <input className = 'menu-btn' type='checkbox' id= 'menu-btn'/>
                <label className="menu-icon" for='menu-btn'>
                    <span className="nav-icon"></span>
                </label>
                 
            </nav>
            
        </div>
    )
}
export default Navbar