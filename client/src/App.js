import { Route, Routes,BrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './Home.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
