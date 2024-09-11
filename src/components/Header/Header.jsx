import React from "react";
import style from "./Header.module.css"
import logo from "../../assets/logo.svg"
import Navbar from "../Navbar/Navbar";
const Header = ({isMenuOpen, setIsMenuOpen}) => {

  return(
    <header className={style.header}>
      <div className={style.fondoHeader}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <img className={style.logo} src={logo} alt="Heladeria D'luz Logo" />
      </div>
    </header>
  )
};

export default Header;