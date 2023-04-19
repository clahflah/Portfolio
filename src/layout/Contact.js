import React from "react";
import classes from "./Contact.module.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/mail.png";

const Contact = (props) => {
  return (
    <div className={classes.contactcontainer}>
      <h2 className={classes.contacttitle}>Contact</h2>
      <div className={classes.contactIconContainer}>
        <a href="" target="blank" className={classes.email}>
          <img
            className={`${classes.contactIcon} ${classes.iconShake}`}
            src={email}
            alt="Link to Email"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/clayton-flaherty/"
          target="blank"
          className={classes.linkedin}
        >
          <img
            className={`${classes.contactIcon} ${classes.iconShake}`}
            src={linkedin}
            alt="Linked In Icon"
          ></img>
        </a>
        <a
          href="https://github.com/clahflah"
          target="blank"
          className={classes.git}
        >
          <img
            className={`${classes.contactIcon} ${classes.iconShake}`}
            src={github}
            alt="Github Icon"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Contact;
