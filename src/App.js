import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import Contact  from './Components/Contact';
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return ( 
      <div className = 'App' >
        <Header></Header>
        <About/>  
        <Technologies/> 
        <Projects/>
        <Contact/>
      </div >
    )
}

export default App;