import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import "./App.css"
import Home from './pages/Home.jsx' 
import Menu from './pages/Menu.jsx'
import Nosotros from './pages/Nosotros.jsx';  
import Contacto from './pages/Contacto.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [styles, setStyles] = useState({
    filter: "none",
    pointerEvents: "auto",
    zIndex: "auto"
  });

  useEffect(() => {
    // Actualiza los estilos después de 500 ms
    const timer = setTimeout(() => {
      setStyles({
        filter: isMenuOpen ? "blur(5px)" : "none",
        pointerEvents: isMenuOpen ? "none" : "auto",
        position: isMenuOpen ? "relative" : "auto",
        zIndex: isMenuOpen ? -1 : "auto"
      });
    }, 200);

    // Desactiva el scroll en el body cuando isMenuOpen es true
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Limpia el temporizador y restablece el overflow cuando el componente se desmonta o isMenuOpen cambia
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <Router>
      <div>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        
        <Routes>
            <Route path="/" element={<Home  style={styles} />} />
            <Route path="/menu" element={<Menu  style={styles} />} />
            <Route path="/Nosotros" element={<Nosotros   />} />
            <Route path="/Contacto" element={<Contacto   />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
