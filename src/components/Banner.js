import React from "react";
import Avatar from "./Avatar";
import prof_pic from "../assets/prof_pic.jpg";
import classes from "./Banner.module.css"
import './Banner.module.css'

const Banner = (props) => {
  return (
    <div className={classes.bannercontainer}>
      <div className={classes.bannertextcontainer}>
      <h1>Clay Flaherty</h1>
      <h2>Full Stack Developer</h2>
        <p>
          I am a well versed developer in the use of Ruby on Rails, Javascript,
          React, Relational Databases, Stimulus, SQL, PostgresSQL, HTML, CSS, and
          many other vital programming skills. I have worked on projects with
          intricate database schema and complex features such as instant messaging
          using action cable and API calls.
        </p>
      </div>
      <Avatar
        src={prof_pic}
        alt="A picture of Clay Flaherty"
        className="avatar-small"
      />
    </div>
  );
};

export default Banner;
