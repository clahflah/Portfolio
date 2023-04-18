import React from "react";
import Avatar from "./Avatar";
import prof_pic from "../assets/prof_pic.jpg";
import classes from "./Banner.module.css"
import './Banner.module.css'
import Bannerimg from '../assets/BannerImg.png'

const Banner = (props) => {
  return (
    <div className={classes.bannercontainer}>
      <div className={classes.bannertextcontainer}>
      <h1>Clay Flaherty</h1>
      <h2>Full Stack Developer</h2>
        <p>
        Crafting digital experiences through innovative web development solutions
        </p>
      </div>
      <Avatar
        src={prof_pic}
        alt="A picture of Clay Flaherty"
        className="avatar-small"
      />
      <div className={classes.imgContainer}>
        <img src={Bannerimg} alt='style icon'></img>
      </div>
    </div>
  );
};

export default Banner;
