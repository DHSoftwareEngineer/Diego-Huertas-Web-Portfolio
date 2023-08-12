import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Java from "../Images/TechnologieIcons/Java.png";
import ASP from "../Images/TechnologieIcons/ASP.png";
import Azure from "../Images/TechnologieIcons/Azure.png";
import C from "../Images/TechnologieIcons/C.png";
import CSS from "../Images/TechnologieIcons/CSS.png";
import ERP from "../Images/TechnologieIcons/ERP.png";
import Html5 from "../Images/TechnologieIcons/Html.png";
import JS from "../Images/TechnologieIcons/JS.png";
import Linux from "../Images/TechnologieIcons/Linux.png";
import PowerBi from "../Images/TechnologieIcons/PowerBi.png";
import SQL from "../Images/TechnologieIcons/SQL.png";
import Python from "../Images/TechnologieIcons/Python.png";

function Technologies() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div id="technologies">
      <div className="main-title">
        <h2>Tecnologías</h2>
      </div>
      <Slider {...settings}>   
          <div className="tech-box">
            <img src={Html5} alt="Html5" />
            <p>HTML</p>
          </div>
          <div className="tech-box">
            <img src={CSS} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="tech-box">
            <img src={JS} alt="JS" />
            <p>JavaScript</p>
          </div>
          <div className="tech-box">
            <img src={ASP} alt="ASP" />
            <p>ASP .Net</p>
          </div>
          <div className="tech-box">
            <img src={Java} alt="Java" />
            <p>Java</p>
          </div>
          <div className="tech-box">
            <img src={C} alt="C" />
            <p>C++</p>
          </div>
          <div className="tech-box">
            <img src={Python} alt="Python" />
            <p>Python</p>
          </div>
          <div className="tech-box">
            <img src={SQL} alt="SQl" />
            <p>MySQL/PL SQL</p>
          </div>
          <div className="tech-box">
            <img src={PowerBi} alt="PowerBi" />
            <p>Microsoft Power BI</p>
          </div>
          <div className="tech-box">
            <img src={Azure} alt="Azure" />
            <p>Microsoft Azure</p>
          </div>
          <div className="tech-box">
            <img src={Linux} alt="Linux" />
            <p>Linux/Ubuntu</p>
          </div>
          <div className="tech-box">
            <img src={ERP} alt="ERP" />
            <p>SAP ERP</p>
          </div>
      </Slider>
    </div>
  );
}
export default Technologies;
