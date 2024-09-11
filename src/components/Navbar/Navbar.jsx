import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";


const Navbar = ({isMenuOpen, setIsMenuOpen}) => {
  

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
        <Link onClick={() => setIsMenuOpen(false)} className={`${style.home} ${style.item}`} to="/">Inicio</Link>
        <Link onClick={() => setIsMenuOpen(false)} className={`${style.menu} ${style.item}`} to="/menu">Menu</Link>
        <Link onClick={() => setIsMenuOpen(false)} className={`${style.aboutUs} ${style.item}`} to="/nosotros">Nosotros</Link>
        <Link onClick={() => setIsMenuOpen(false)} className={`${style.contact} ${style.item}`} to="/contacto">Contactanos</Link>
      </ul>
    </nav>

  );
};

export default Navbar;