import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.hamburgerMenuContainer}>
        <GiHamburgerMenu 
          size={45} 
          className={style.hamburgerMenu} 
          onClick={toggleMenu} 
        />
      </div>
      <ul className={`${style.itemsContainer} ${isMenuOpen ? style.show : ''}`}>
        <li className={`${style.home} ${style.item}`}>Home</li>
        <li className={`${style.menu} ${style.item}`}>Menu</li>
        <li className={`${style.aboutUs} ${style.item}`}>Nosotros</li>
        <li className={`${style.contact} ${style.item}`}>Contactanos</li>
      </ul>
    </nav>
  );
};

export default Navbar;