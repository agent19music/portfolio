import { Route, Routes,BrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './Home.js'
import {React, useState} from 'react'
function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const toggle = isDarkMode ? ' bg-dark text-white' : 'bg-light text-black'
    const toggle2 = isDarkMode ? 'dark':'light';
    const toggle3 = isDarkMode ? 'white': 'black'
    const toggle4 = isDarkMode ? 'fas fa-sun': 'fas fa-moon'
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home toggleDarkMode={toggleDarkMode}/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
