import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ toggleDarkMode, toggle, toggle2, toggle4}) {
  
  return (
    <div>
 <nav className={`navbar navbar-expand-lg navbar-${toggle2} ${toggle} fixed-top`}>
  <div className="container-fluid">
       <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <Link className="navbar-brand mt-2 mt-lg-0" to="#">
        <img
          src="/logo.png"
          height="70"
          alt="Logo"
          
        />
      </Link>
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#page">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#a-page">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#p-page">Projects</a>
        </li>
        
        <li className="nav-item">
        <a className="nav-link" href="#c-page">Contact Me</a>
        </li>
      </ul>
      
    </div>
    
    <nav className="navbar navbar-light">
 
</nav>

    
    <div className="d-flex align-items-center">
     
      <NavLink className="text-reset me-3 " to="/">
        <i className={`${toggle4}`} onClick={()=> toggleDarkMode()}></i>
      </NavLink>

     
     
    </div>
   
  </div>

</nav>

    </div>
  )
}