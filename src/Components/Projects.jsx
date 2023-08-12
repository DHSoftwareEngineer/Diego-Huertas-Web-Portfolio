import React from "react";
import HomeFlix from "../Images/Projects/HomeFlix.jpg";
import LabStore from "../Images/Projects/LabStore.jpg";
import Reinos from "../Images/Projects/Reinos.jpg";
import Libreria from "../Images/Projects/Libreria.jpg";
import Carousel from "react-bootstrap/Carousel";

function Projects() {
  return (
    <div id="projects">
      <div class="main-title">
        <h2 class="titules">Proyectos</h2>
      </div>
      <div class="projects">
                    <div class="projects-box">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                       
                        <h5>El Bazar de las sorpresas<span> - Librería web</span></h5>
                        <p>
                            Proyecto elaborado en Javascript, CSS y HTML5. Básicamente mi primer proyecto web.
                        </p>
                        <div class='imgProjects'>
                            <img src={Libreria} alt="Reinos" class='images'/>
                        </div>
                    </div>
                    <div class="projects-box">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        
                        <h5>HomeFlix<span> - Reproductor de vídeos</span></h5>
                        <p>
                           Proyecto elaborado en Java con el framework de JavaFX. Implementación de programación orientada a objetos e hilos.
                        </p>
                        <div class='imgProjects'>
                            <img src={HomeFlix} alt="HomeFlix" class='images'/>
                        </div>
                        
                    </div>
                    <div class="projects-box">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <h5>LabStoreCR<span> - Tienda de exámenes de laboratorio</span></h5>
                        <p>
                            Proyecto elaborado en C# con el framework de .Net. Creación e implementación de una API para la página web.
                        </p>
                        <div class='imgProjects'>
                            <img src={LabStore} alt="LabStore" class='images'/>
                        </div>
                        
                    </div>
                    <div class="projects-box">
                        <div class="tl-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <h5>Reinos Cenfotecos<span> - Videojuego de estrategia por turnos</span></h5>
                        <p>
                            Proyecto elaborado en Java con el framework LibGDX. Implementación de programación de patrones de diseño.
                        </p>

                        <div class='imgProjects'>
                            <img src={Reinos} alt="Reinos" class='images'/>
                        </div>
                        
                    </div>
                    

        </div>
    </div>
  );
}
export default Projects;
