import React, {useState, useEffect} from "react";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const [infoShown, setInfoShown] = useState(false)
  const [maxHeight, setMaxHeight] = useState('453px')

  useEffect(() => {
    setMaxHeight(infoShown? `${props.description.length * 20}px` : '453px');
  }, [infoShown, props.description]);

  const onMouseEnterHandler = () =>{
    setInfoShown(true)
  }

  const onMouseLeaveHandler = () =>{
    setInfoShown(false)
  }
  return (
    <React.Fragment>
    <div className={classes.projectCard} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} style={{ maxHeight }}>
      <img src={props.src} alt={props.alt} className={classes.projectImg}></img>
      <h3>{props.title}</h3>
      <p classes={classes.description} style={{opacity: infoShown? 1 : 0, transition:"opacity .5s ease"}}>{props.description}</p>
    </div>
    </React.Fragment>
  );
};

export default ProjectCard;
