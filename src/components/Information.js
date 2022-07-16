import React from "react";
import { useSelector } from "react-redux";
import "../styles/Information.css";

const Information = () => {
  const active = useSelector((state) => state.seeSection);
  return (
    <section
      id="Information"
      className={`${active === "Information" && "active"}`}
    >
      <h2 className="caption">Informacion</h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        minus.
      </p>
      <div className="education">
        <h2 className="secondary-subtitle">
          <i className="bx bxs-graduation bx-tada bx-flip-horizontal"></i>
          Educacion
        </h2>
        <ul>
          <li className="card-education">
            <span>FEB-2022-NOV-2022</span>
            <h4>Academlo</h4>
            <h6>Bootcamp-Mexico</h6>
            <p>Programación Web Full-Stack y Ciencias de Computación.</p>
          </li>
          <li className="card-education">
            <span>AGO-2021-ENE-2022</span>
            <h4>Udemy-Youtube</h4>
            <h6>Autodidacta</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
        </ul>
      </div>
      <div className="skill">
        <h2 className="secondary-subtitle">
          <i className="bx bxs-wrench bx-tada"></i>Habilidades
        </h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          voluptas!
        </p>
        <div className="code-skill">
          <h2 className="skills-section-title">Codigo</h2>
          <div className="code-skill-container ">
            <div className="code-skills-card">
              <input
                type="radio"
                className="btn-cursor-hover"
                name="acc"
                id="acc1"
              />
              <label htmlFor="acc1">
                <h4>
                  <i className="bx bx-code-alt"></i>
                </h4>
                <h5>Desarrollo FrontEnd</h5>
              </label>
              <div className="code-skill-content">
                <ul>
                  <li>
                    <i className="bx bxl-html5"></i>
                  </li>
                  <li>
                    <i className="bx bxl-css3"></i>
                  </li>
                  <li>
                    <i className="bx bxl-react"></i>
                  </li>
                  <li>
                    <i className="bx bxl-redux"></i>
                  </li>
                  <li>
                    <i className="bx bxl-bootstrap"></i>
                  </li>
                  <li>
                    <i className="bx bxl-vuejs"></i>
                  </li>
                  <li>
                    <i className="bx bxl-sass"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="code-skills-card">
              <input type="radio" name="acc" id="acc2" />
              <label htmlFor="acc2">
                <h4>
                  <i className="bx bx-server"></i>
                </h4>
                <h5>Desarrollo BackEnd</h5>
              </label>
              <div className="code-skill-content">
                <ul>
                  <li>
                    <i className="bx bxl-nodejs"></i>
                  </li>
                  <li>
                    <i className="bx bxl-postgresql"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="code-skills-card">
              <input type="radio" name="acc" id="acc3" />
              <label htmlFor="acc3">
                <h4>
                  <i className="bx bx-bookmark-alt-plus"></i>
                </h4>
                <h5>Herramientas</h5>
              </label>
              <div className="code-skill-content">
                <ul>
                  <li>
                    <i className="bx bxl-git"></i>
                  </li>
                  <li>
                    <i className="bx bxl-firebase"></i>
                  </li>
                  <li>
                    <i className="bx bxl-visual-studio"></i>
                  </li>
                  <li>
                    <i className="bx bxl-aws"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="soft-skill">
          <h2 className="skills-section-title">Habilidades blandas</h2>
          <ul>
            <li>
              <i className="bx bx-check-double"></i> Proactivo
            </li>
            <li>
              <i className="bx bx-check-double"></i> Perseverante
            </li>
            <li>
              <i className="bx bx-check-double"></i> Comunicación asertiva
            </li>
            <li>
              <i className="bx bx-check-double"></i> Buena actitud
            </li>
            <li>
              <i className="bx bx-check-double"></i> Amable
            </li>
            <li>
              <i className="bx bx-check-double"></i> Empatico
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Information;
