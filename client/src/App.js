import { Route, Routes,BrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './Home.js'
import {React, useState} from 'react'
import ContactMe from './ContactMe.js';
function App() {

  const addFeedback = (comm) => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comm),
    })
      .then((response) => response.json())
      .then((newFeedback) => {
        
        setFeedback([...feedback, newFeedback]);
      })
      .catch((error) => {
        console.error('Error adding anime:', error);
      });
  };

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [feedback, setFeedback] = useState('')
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const toggle = isDarkMode ? ' bg-dark text-white' : 'bg-light text-black'
    const toggle2 = isDarkMode ? 'dark':'light';
    const toggle3 = isDarkMode ? 'white': 'black'
    const toggle4 = isDarkMode ? 'fas fa-sun': 'fas fa-moon'
    const toggle5 = isDarkMode ? 'animestore.png': 'animestoredark.png'
  return (
    <div className={toggle}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home toggleDarkMode={toggleDarkMode} toggle={toggle} toggle2={toggle2} toggle3={toggle3} toggle4={toggle4} addFeedback={addFeedback}/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
