import React from "react";
import Data from "../utils/projects.json";
import "../styles/Works.css";
import { useSelector } from "react-redux";

const Works = () => {
  const active = useSelector((state) => state.seeSection);
  return (
    <section id="Proyectos" className={`${active === "Proyectos" && "active"}`}>
      <h2 className="caption">Proyectos</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corrupti
        libero vitae numquam eum culpa dolorem
      </p>
      <ul className="proyect">
        {Data.map((project) => (
          <li key={project.id}>
            <img src={project.img} alt="Img-proyect" />
            <h4>{project.name}</h4>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href={project.gitHub}
                className="btn"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={project.web}
                className="btn"
              >
                <i className="bx bx-windows"></i>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
