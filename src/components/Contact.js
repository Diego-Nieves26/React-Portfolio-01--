import React from "react";
import { useSelector } from "react-redux";
import "../styles/Contact.css";

const Contact = () => {
  const active = useSelector((state) => state.seeSection);
  return (
    <section id="Contact" className={`${active === "Contact" && "active"}`}>
      <h2 className="caption">Contactame</h2>
      <form className="form-contact">
        <div className="form-group">
          <input
            type="text"
            className="form-field btn-cursor-hover-text"
            placeholder="Nombre"
          />
          <label className="form-label">Nombre</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-field btn-cursor-hover-text"
            placeholder="Email"
          />
          <label className="form-label">Email</label>
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-field btn-cursor-hover-text"
            placeholder="Mensaje"
          />
          <label className="form-label">Mensaje</label>
        </div>
        <button className="btn-cursor-hover"> Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
