import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import "./App.css"
import Home from './pages/Home.jsx' 
import Menu from './pages/Menu.jsx'
import Nosotros from './pages/Nosotros.jsx';  
import Contacto from './pages/Contacto.jsx';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        
        <Routes>
            <Route path="/" element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
            <Route path="/menu" element={<Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
            <Route path="/Nosotros" element={<Nosotros isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
            <Route path="/Contacto" element={<Contacto isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
