import {React} from 'react'
import Navbar from './Navbar'
import {ReactTyped} from "react-typed";
import './App.css'
import ContactMe from './ContactMe';


export default function Home({toggleDarkMode, toggle, toggle2, toggle3, toggle4}) {

  return (
    <div>
    <Navbar  toggleDarkMode={toggleDarkMode} toggle={toggle} toggle2={toggle2} toggle3={toggle3} toggle4={toggle4}/> 
    <section id='page'> 
      <div>
    <h4>
        {""}
        <ReactTyped
          strings={["Hello","Habari","こんにちは","Ng'aki Bono"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        />
      </h4>
      <h5> My Name is Sean Motanya</h5>
      <h5>A full stack web developer</h5>
      </div>
      </section>
      <section id='about-page'>
      <h4>ABOUT ME</h4>
        <div id='content'>
          
        </div>
      </section>  
      <section id='page'>
      <ContactMe/>
      </section>
    </div>
    
  )
}
