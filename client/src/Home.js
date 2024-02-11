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
  <div className='container'>
    <div className='row justify-content-center align-items-center mb-3'>
      <div className='col-md-6 pb-3'>
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
      <div className='col-md-6 pb-3'>
        <img src='https://byliner.com/wp-content/uploads/2023/09/itachi-1-696x392.jpg' alt='loading...' className='img-fluid w-28 h-50' />
      </div>
    </div>
    <div className='row justify-content-center'>
      <a href='CV.pdf' download='CV.pdf'>
        <button type="button" className="btn btn-success btn-rounded">
          Download My CV
        </button>
      </a>
    </div>
  </div>
</section>


      <section id='a-page'>
        <div id='content' className="container-lg mt-5 mb-5 text-center ">
        <h4>ABOUT ME</h4>
        <div className=" ">
        <div className="col-md-6 mb-4">
          <div className="animate-in">
         <p className=' text-justify fs-5' id='a-p'>
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
        <div className="container-lg mt-5 mb-5 text-center">
       <h4>PROJECTS</h4>
       <div class="container">
  <div class="row g-3">
    <div class="col-lg-6">
      <div class="card h-100">
        <img src="/animestore.png" class="card-img-top" alt="anime store"/>
        <div class="card-body">
          <h5 class="card-title">Anime Store</h5>
          <p class="card-text">A mock anime merchandise shopping website</p>
        </div>
        <div class="card-body">
          <a href="" class="card-link"><i class="fab fa-github"></i></a>
          <a href="https://anime-store-react.netlify.app/" class="card-link"><i class="fas fa-globe"></i></a>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card h-100">
        <img src="/opentable.png" class="card-img-top" alt="open table"/>
        <div class="card-body">
          <h5 class="card-title">Open Table</h5>
          <p class="card-text">A restaurant table booking website</p>
        </div>
        <div class="card-body">
          <a href="https://github.com/calebmutisya/OpenTable" class="card-link"><i class="fab fa-github"></i></a>
          <a href="https://leafy-otter-831027.netlify.app/" class="card-link"><i class="fas fa-globe"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
      </section>

      <section id='c-page'>
      <ContactMe toggle3={toggle3}/>
      </section>
    </div>
    
  )
}
