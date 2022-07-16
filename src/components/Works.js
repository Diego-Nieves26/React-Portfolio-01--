import React from "react";
import Data from "../utils/projects.json";
import "../styles/Works.css";
import { useSelector } from "react-redux";

const Works = () => {
  const active = useSelector((state) => state.seeSection);
  return (
    <section id="Projects" className={`${active === "Projects" && "active"}`}>
      <h2 className="caption">Proyectos</h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corrupti
        libero vitae numquam eum culpa dolorem
      </p>
      <ul className="projects">
        {Data.map((project) => (
          <li class="card">
            <div class="header">
              <div class="img-box">
                <img src={project.img} alt="" />
              </div>
            </div>
            <div class="content">
              <h1 class="title">{project.name}</h1>
              <div>
                <a target="_blank" rel="noreferrer" href={project.gitHub}>
                  <i className="bx bxl-github"></i>
                </a>
                <a target="_blank" rel="noreferrer" href={project.web}>
                  <i className="bx bx-windows"></i>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
