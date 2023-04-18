import React from "react";
import ProjectCard from "../components/ProjectCard";
import prof_pic from "../assets/prof_pic.jpg";
import classes from "./Projects.module.css";

const Projects = (props) => {
  const projects = [
    {
      title: "Project 1",
      alt: "Project 1 Alt",
      src: prof_pic,
      description:
        "A very lovely project with intense and complicated features. Please visit the site.",
    },
    {
      title: "Project 2",
      alt: "Project 2 Alt",
      src: prof_pic,
      description:
        "A very lovely second project with intense and complicated features. Please visit the site.",
    },
    {
      title: "Project 3",
      alt: "Project 3 Alt",
      src: prof_pic,
      description:
        "A very lovely Third project with intense and complicated features. Please visit the site.",
    },
  ];
  return (
    <React.Fragment>
      <h2 className={classes.projectstitle}>Latest Projects</h2>
      <div className={classes.projectcard}>
        {projects.map(project => <ProjectCard title={project.title} alt={project.alt} src={project.src} description={project.description} />)}
      </div>
    </React.Fragment>
  );
};

export default Projects;
