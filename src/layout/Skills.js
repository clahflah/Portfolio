import React from "react";
import classes from "./Skills.module.css";
import ruby from "../assets/ruby.png";
import react from "../assets/physics.png";
import sql from "../assets/sql-server.png";
import git from "../assets/merge.png";
import javascript from "../assets/javascript.png"
import html from "../assets/html-5.png"
import heroku from '../assets/heroku.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';
import css from '../assets/css-3.png'

const Skills = (props) => {
  const attributes = [
    <a href="https://www.flaticon.com/free-icons/ruby" title="ruby icons">
      Ruby icons created by Freepik - Flaticon
    </a>,
    <a
      href="https://www.flaticon.com/free-icons/javascript"
      title="javascript icons"
    >
      Javascript icons created by Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/react" title="react icons">
      React icons created by Kiranshastry - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/sql" title="sql icons">
      Sql icons created by juicy_fish - Flaticon
    </a>,
    <a href="https://iconscout.com/icons/webpack" target="_blank">
      Webpack Icon
    </a>,
    <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">
      Icon Mafia
    </a>,
    <a
      href="https://www.flaticon.com/free-icons/commit-git"
      title="commit git icons"
    >
      Commit git icons created by edt.im - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/github" title="github icons">
      Github icons created by Pixel perfect - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/heroku" title="heroku icons">
      Heroku icons created by Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/heroku" title="heroku icons">
      Heroku icons created by Freepik - Flaticon
    </a>,
    <a
      href="https://www.flaticon.es/iconos-gratis/html-5"
      title="html 5 iconos"
    >
      Html 5 iconos creados por Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.es/iconos-gratis/css" title="css iconos">
      Css iconos creados por Pixel perfect - Flaticon
    </a>,
    <a href="https://iconscout.com/icons/python" target="_blank">
      Python Icon
    </a>,
    <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a>,
    <a href="https://iconscout.com">IconScout</a>,
  ];

  return (
    <React.Fragment>
      <h2>Skills</h2>
      <p>Tech Stack: </p>
      <img src={ruby} alt='ruby icon'></img>
    </React.Fragment>
  );
};

export default Skills;