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
          <li className="card" key={project.id}>
            <div className="header">
              <div className="img-box">
                <img src={project.img} alt="Img-Proyecto" />
              </div>
            </div>
            <div className="content">
              <h1 className="title">{project.name}</h1>
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
