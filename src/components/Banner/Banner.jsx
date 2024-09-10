import React from "react";
import style from "./Banner.module.css";
import banner from "../../assets/banner.jpg"

const Banner = () => {
  
  return(
    <div>
      <img className={style.bannerImage} src={banner} alt="Banner" />
    </div>
  )
};

export default Banner;