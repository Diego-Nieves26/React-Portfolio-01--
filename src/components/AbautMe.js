import React from "react";
import "../styles/AbautMe.css";
import { useSelector } from "react-redux";

const AbautMe = () => {
  const active = useSelector((state) => state.seeSection);
  return (
    <section id="AbautMe" className={`${active === "AbautMe" && "active"}`}>
      <h3 className="caption">Sobre mi</h3>
      <p className="paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum totam
        ipsam libero provident eveniet? Expedita officiis, enim cum amet harum
        facere eum doloribus assumenda esse maiores incidunt, perspiciatis
        provident! Repudiandae.
      </p>
      <ul>
        <li>
          <h5>Edad...........</h5>
          <span>18</span>
        </li>
        <li>
          <h5>Nacionalidad...</h5>
          <span>Peruana</span>
        </li>
        <li>
          <h5>Idiomas........</h5>
          <span>Español</span>
        </li>
        <li>
          <h5>Pasion.........</h5>
          <span>Videojuegos</span>
        </li>
      </ul>
    </section>
  );
};

export default AbautMe;
