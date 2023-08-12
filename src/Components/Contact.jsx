import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Ubicacion from "../Images/Icons/001-tierra.png"
import Telefono from "../Images/Icons/002-llamada-telefonica.png"
import Email from "../Images/Icons/003-email.png"
import Github from "../Images/Icons/005-github.png"
import Linkedin from "../Images/Icons/006-linkedin.png"
import Header from "./Header"
function Contact(){
    const form = useRef();
    const sendEmail = (event) =>{
        
        event.preventDefault();

        emailjs.sendForm('service_ndhfn98', 'template_iivyl8v', event.target, 'pPiC5ZbGEyYJCDUUK')
        .then(response => console.log(response), form.current.reset())
        .catch(error => console.log(error))

        
    }

    

    return(
    <div id="contact">
        <div class="contact-container">
            <div class="main-title">
                <h2>Contacto</h2>
            </div>
            <div class="contact-content-con">
                
                
                <div class="right-contact">
                <h3>Envíame un mensaje</h3>
                    <form ref={form} class="contact-form" onSubmit={sendEmail}>
                        <div class="input-control i-c-2">
                            <input type="text" required placeholder="Nombre" name="user_name"/>
                            <input type="email" required placeholder="Correo Electrónico" name="user_email"/>
                        </div>
                        <div class="input-control">
                            <input type="text" required placeholder="Asunto" name="user_subject"/>
                        </div>
                        <div class="input-control">
                            <textarea name="user_message" id="" cols="15" rows="8" placeholder="Mensaje"></textarea>
                        </div>
                        <div class="submit-btn">
                            <button class="Send-btn" Click>
                               <span className="send-text">Enviar</span> 
                            </button>
                        </div>
                    </form>
                </div>
                <div class="left-contact">
                    <h4 className="contact-info">Información de contacto</h4>
                    
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="icon">
                                <img src={Ubicacion} alt="Ubicacion" class="icon-contact"/>
                                <span>Ubicación</span>
                            </div>
                            <p>
                                San José, Costa Rica.
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <img src={Email} alt="Ubicacion" class="icon-contact"/>
                                <span>Email</span>
                            </div>
                            <p>
                                <span>die19h.g@hotmail.com</span>
                            </p>
                        </div>
                        
                        <div class="contact-item">
                            <div class="icon">
                                <img src={Telefono} alt="Ubicacion" class="icon-contact"/> 
                                <span>Número de teléfono</span>
                            </div>
                            <p>
                                <span>+506 72067421</span>
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <img src={Linkedin} alt="Ubicacion" class="icon-contact"/>
                                <span>Linkedin</span>
                            </div>
                            <p>
                                <a href="https://www.linkedin.com/in/diego-emanuel-huertas-gonzalez/" target="_blank">Mi Linkedin</a>
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <img src={Github} alt="Ubicacion" class="icon-contact"/>
                                <span>Github</span>
                            </div>
                            <p>
                                <a href="https://github.com/DHSoftwareEngineer/" target="_blank">Mi Github</a>
                            </p>
                        </div>

                        
                        
                    </div>
                        
                </div>
                
            </div>
            <div className="btn-home">
                                <a href="#">Volver al inicio</a>
            </div>
            
        </div>
    
    </div>
    
    
    )
}export default Contact; 