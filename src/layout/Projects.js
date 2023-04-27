import React, {useRef} from "react";
import ProjectCard from "../components/ProjectCard";
import prof_pic from "../assets/prof_pic.jpg";
import classes from "./Projects.module.css";

const Projects = (props, { index }) => {
  const projectRef = useRef(null)

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

  let marginTop = "0px";

  if (index === 0) {
    marginTop = "10px";
  } else if (index === 1) {
    marginTop = "30px";
  } else if (index === 2) {
    marginTop = "60px";
  }

  return (
    <div className={classes.projectsContainer} ref={props.projectRef}>
      <h2 className={classes.projectstitle}>Latest Projects</h2>
      <div className={classes.projectcardcontainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={classes.projectcardmapped}
            style={{
              marginTop:
                index === 0
                  ? "20px"
                  : index === 1
                  ? "100px"
                  : index === 2
                  ? "160px"
                  : "260px",
            }}
          >
            <ProjectCard
              title={project.title}
              alt={project.alt}
              src={project.src}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
