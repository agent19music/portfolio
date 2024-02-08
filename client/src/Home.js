import {React} from 'react'
import Navbar from './Navbar'
import {ReactTyped} from "react-typed";
import './App.css'
import ContactMe from './ContactMe';
import CountUp from 'react-countup';

export default function Home({toggleDarkMode, toggle, toggle2, toggle3, toggle4}) {

  return (
    <div>
    <Navbar  toggleDarkMode={toggleDarkMode} toggle={toggle} toggle2={toggle2} toggle3={toggle3} toggle4={toggle4}/> 
    <section id='page'> 
    <div className='row justify-content-center align-items-center'>
      <div className='col md-6'>
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
      <div className='col md-6'>
      <img src='https://byliner.com/wp-content/uploads/2023/09/itachi-1-696x392.jpg'alt='loading...' className='img-fluid w-28 h-50' />

      </div>
      </div>
      </section>

      <section id='a-page'>
        <div id='content' className="container-lg mt-5 mb-5 text-center">
        <h4>ABOUT ME</h4>
        <div className="row justify-content-centre">
        <div className="col-lg-12 mb-4">
          <div className="animate-in">
         <p className='text-justify fs-3'>
          I am an experienced software engineer skilled in both frontend and backend  development with a focus on building user friendly applications that are easy to navigate and use.
          React.js, Flask, Next.js and Django are my tools of trade. I am currently a student pursuing my Bsc in Computer Science Bachelor's degree. When not coding I'm binging anime,
          listening to music, video editing or maybe asleep. Be sure to reach out for any queries or for any work/collaboration opportunities. Cheers.
         </p>
          </div>
        </div>
      </div>
        </div>
      </section>  
      <section id='p-page'>
       <h4>PROJECTS</h4>
       <div>
       <CountUp className='fs-3' delay={1} end={12}duration={5} />
       </div>
       <div className="card" style={{width: '35%'}}>
      <img src="/animestore.png" className="card-img-top" alt="anime store"/>
      <div className="card-body">
        <h5 className="card-title">Anime Store</h5>
        <p className="card-text">A mock anime merchandise shopping website</p>
      </div>
      
      <div className="card-body">
        <a href="" className="card-link"><i className="fab fa-github"></i></a>
        <a href="https://anime-store-react.netlify.app/" className="card-link"><i className="fas fa-globe"></i></a>
      </div>
    </div> 

    <div className="card" style={{width: '35%'}}>
      <img src="/opentable.png" className="card-img-top" alt="open table"/>
      <div className="card-body">
        <h5 className="card-title">Open Table</h5>
        <p className="card-text">A restaurant table booking website</p>
      </div>
      
      <div className="card-body">
        <a href="https://github.com/calebmutisya/OpenTable" className="card-link"><i className="fab fa-github"></i></a>
        <a href="https://leafy-otter-831027.netlify.app/" className="card-link"><i className="fas fa-globe"></i></a>
      </div>
    </div> 
      </section>

      <section id='c-page'>
      <ContactMe toggle3={toggle3}/>
      </section>
    </div>
    
  )
}
