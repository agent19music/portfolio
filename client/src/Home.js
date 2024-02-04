import React from 'react'
import Navbar from './Navbar'
import {ReactTyped} from "react-typed";
import './App.css'

export default function Home() {
  return (
    <div>
    <Navbar/> 
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
    </div>
    
  )
}
