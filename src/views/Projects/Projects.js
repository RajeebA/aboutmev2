import zymmo from "../../assets/zymmo.png";
import ketomined from "../../assets/keto.png";

import "./projects.css";
import { useState } from "react";
const Projects = () => {
  const [projects] = useState([
    {
      icon: zymmo,
      heading: "ZYMMO",
      hovered: false,
      description: "Work as a full stack developer",
    },
    {
      icon: ketomined,
      heading: "KETOMINED",
      hovered: false,
      description: "Work as a front end developer",
    },
  ]);
  // const onHover = (i) => {
  //   let _tempServices = [...projects];
  //   _tempServices[i].hovered = true;
  //   setProjects(_tempServices);
  // };
  // const onLeave = (i) => {
  //   let _tempServices = [...projects];
  //   _tempServices[i].hovered = false;
  //   setProjects(_tempServices);
  // };
  return (
    <div className="row  projects">
      {projects.map((project, i) => (
        <div className="col-md-4 text-center project" key={i}>
          <img src={project.icon} alt="project" />
          <div className="overlay" />
          <div class="text text-center p-4">
            <h3>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                Branding &amp; Illustration Design
              </a>
            </h3>
            <span>Web Design</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Projects;
