import React from "react";

function About(){
    return(
        <div id="about">
            
                <div class="main-title">
                    <h2>Acerca de mi </h2>
                </div>
                <div class="about-info">
                    <div class="left-about">
                        <h4 className="about-titules">Perfil profesional</h4>
                        
                            
                                <p>
                                    Soy un ingeniero de software especializado en full
                                    stack, implementando tecnologías como
                                    Bootstrap, Java, React JS, C#, NET,
                                    MySQL, PL/SQL, entre otras. 
                                </p>
                            
                        
                        <h4 className="about-titules">Misión</h4>
                        <p>
                            A través del compromiso con la
                            calidad, la eficiencia y la colaboración, crear aplicaciones y
                            sistemas de software escalables, seguros y confiables que
                            impulsen el éxito empresarial de los clientes en un entorno
                            tecnológico en constante evolución.
                        </p>
                        <h4 className="about-titules">Visión</h4>
                        <p>
                        Ser un referente nacional y global en servicios de ingienería de software, destacado como un lider en la creación de soluciones de tecnología que se adapten y anticipen a las necesidades del mercado.

                        </p>

                        <h4 className="about-titules">Valores</h4>
                        <ol>
                            <li>Liderazgo</li>
                            <li>Ética</li>
                            <li>Comunicación</li>
                            <li>Excelencia</li>
                            <li>Trabajo en equipo</li>
                        </ol>
                    </div>
                    <div class="right-about">
                        <div class="about-box">
                            <div class="about-text">
                                <p class="large-text">Estudiante</p>
                                <p class="small-text">Ingienería de Software <br /> Universidad Cenfotec</p>
                            </div>
                        </div>
                        <div class="about-box">
                            <div class="about-text">
                                <p class="large-text">2+</p>
                                <p class="small-text">Años de<br /> experiencia en programación</p>
                            </div>
                        </div>
                        <div class="about-box">
                            <div class="about-text">
                                <p class="large-text">Idiomas</p>
                                <p class="small-text">Español nativo <br /> Inglés B2+</p>
                            </div>
                        </div>
                        <div class="about-box">
                            <div class="about-text">
                                <p class="large-text">Trabajo Actual</p>
                                <p class="small-text">IT Application Manager <br /> P&G</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default About;