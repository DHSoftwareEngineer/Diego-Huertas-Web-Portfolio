import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import { Link } from "react-scroll";
import logo from "../Images/Definitivo4.png";
import CV_Espaniol from "../CV/CV Español.pdf";
import CV_English from "../CV/CV English.pdf";
function Header() {
  return (
    <div id="main">
      <div class="header-main">
        <div class="header-img">
          <div class="header-decorator"></div>
          
            <Link to="main" className="logo">
              <img src={logo} alt="logo" />
            </Link>
          
        </div>
        <div class="header-info">
          <h1 class="name">
            Hola, soy <span>Diego Huertas! </span>
            Ingeniero de Software
          </h1>
          <p>
            Bienveni@ a mi portafolio web.  Debajo podrá encontra mi currículum en español e inglés. Estoy para servirle!
          </p>
          <div class="btn-cv">
            <a href={CV_Espaniol} class="cv" download>
              <span class="cv-text">Descarga mi currículum</span>
              
            </a>
            <a href={CV_English} class="cv" download>
              <span class="cv-text">Download my CV</span>
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
