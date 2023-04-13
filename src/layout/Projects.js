import React from "react";
import ProjectCard from "../components/ProjectCard";
import prof_pic from "../assets/prof_pic.jpg";

const Projects = (props) => {
  return(
  <React.Fragment>
    <h2>Latest Projects</h2>
    <ProjectCard title='test' alt='test alt' src={prof_pic}/>
    <ProjectCard title='test' alt='test alt' src={prof_pic}/>
    <ProjectCard title='test' alt='test alt' src={prof_pic}/>
  </React.Fragment>)
};

export default Projects;
