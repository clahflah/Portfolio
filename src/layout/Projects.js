import React from "react";
import ProjectCard from "../components/ProjectCard";
import prof_pic from "../assets/prof_pic.jpg";
import classes from "./Projects.module.css"

const Projects = (props) => {
  return(
  <React.Fragment>
    <h2 className={classes.projectstitle}>Latest Projects</h2>
    <div className={classes.projectcard}>
      <ProjectCard title='test' alt='test alt' src={prof_pic} description="asdfasdf"/>
      <ProjectCard title='test' alt='test alt' src={prof_pic}/>
      <ProjectCard title='test' alt='test alt' src={prof_pic}/>
    </div>
  </React.Fragment>)
};

export default Projects;
