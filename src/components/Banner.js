import React from "react";
import Avatar from "./Avatar";
import prof_pic from "../assets/prof_pic.jpg";
import classes from "./Banner.module.css";
import "./Banner.module.css";
import Bannerimg from "../assets/BannerImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "../layout/Projects";

const Banner = (props) => {

  const projects = Projects.projectRef

  const scroll = () => {
    projects.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className={classes.bannercontainer}>
      <div className={classes.bannertextcontainer}>
        <h1 style={{textAlign: 'center', marginTop: '50px'}}>Clay Flaherty</h1>
        <div className={classes.h2icon}>
          <h2 className={classes.bannertitle}>Full Stack Developer</h2>
          <i className={`fa-solid fa-arrow-down ${classes.bannerIcon}`} onClick={scroll}></i>
        </div>
        <p>
          Crafting digital experiences through innovative web development
          solutions
        </p>
      </div>
      <Avatar
        src={prof_pic}
        alt="A picture of Clay Flaherty"
        className="avatar-small"
      />
      <div className={classes.imgContainer}>
        <img src={Bannerimg} alt="style icon"></img>
      </div>
    </div>
  );
};

export default Banner;
