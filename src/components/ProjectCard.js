import React, {useState} from "react";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const [infoShown, setInfoShown] = useState(false)

  const onMouseEnterHandler = () =>{
    setInfoShown(true)
  }

  const onMouseLeaveHandler = () =>{
    setInfoShown(false)
  }
  return (
    <div className={classes.projectCard} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <img src={props.src} alt={props.alt} className={classes.projectImg}></img>
      <h3>{props.title}</h3>
      {infoShown && <p>{props.description}</p>}
    </div>
  );
};

export default ProjectCard;
