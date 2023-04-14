import React from "react";
import classes from "./Contact.module.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png"
import email from "../assets/mail.png"

const Contact = props => {
  return(
    <React.Fragment>
      <h2 className={classes.contacttitle}>Contact</h2>
      <div className={classes.contactContainer}>
        <a href="https://github.com/clahflah" target='blank'><img className={classes.contactIcon} src={github} alt="Github Icon"></img></a>
        <a href="https://www.linkedin.com/in/clayton-flaherty/" target='blank'><img className={classes.contactIcon} src={linkedin} alt="Linked In Icon"></img></a>
        <a href="" target='blank'><img className={classes.contactIcon} src={email} alt="Link to Email"></img></a>
      </div>
    </React.Fragment>
  )
};

export default Contact;
