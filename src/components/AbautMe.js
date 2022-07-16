import React from "react";
import "../styles/AbautMe.css";
import { useSelector } from "react-redux";

const AbautMe = () => {
  const active = useSelector((state) => state.seeSection);
  return (
    <section id="AbautMe" className={`${active === "AbautMe" && "active"}`}>
      <h3 className="caption">Sobre mi</h3>
      <p className="paragraph">
        Hola! Soy Diego tengo 18 años, llevo 8 meses educandome sobre desarrollo
        web, siento que cuando programo no tengo consiencia del tiempo, me
        gustaria aprender ingles y aleman. Comence a programar por querer crear
        un juego, y aun no he perdido las ganas de hacerlo.
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
