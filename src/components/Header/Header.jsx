import React from "react";
import style from "./Header.module.css"
import logo from "../../assets/logo.svg"
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
const Header = () => {

  return(
    <header className={style.header}>
      <div className={style.fondoHeader}>
        <Navbar />
        <img className={style.logo} src={logo} alt="Heladeria D'luz Logo" />
      </div>
      <Banner className={style.mainBanner}/>
    </header>
  )
};

export default Header;