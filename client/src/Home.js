import React from 'react'
import Navbar from './Navbar'
import {ReactTyped} from "react-typed";

export default function Home() {
  return (
    <div>
    <Navbar/>    
    <h1>
        {""}
        <ReactTyped
          strings={["Hello","Habari","こんにちは","Ng'aki Bono"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        />
      </h1>
    </div>
  )
}
