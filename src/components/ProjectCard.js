import React from "react";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={classes.projectCard}>
      <img src={props.src} alt={props.alt} className={classes.projectImg}></img>
      <h3>{props.title}</h3>
    </div>
  );
};

export default ProjectCard;
