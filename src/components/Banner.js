import React from "react";
import Avatar from "./Avatar";
import prof_pic from '../assets/prof_pic.jpg'

const Banner = props => {
  return (
    <div>
      <h1>Clay Flaherty</h1>
      <h2>Full Stack Developer</h2>
      <Avatar src={prof_pic} alt="A picture of Clay Flaherty" className="avatar-small" />
    </div>
  )
};

export default Banner;
