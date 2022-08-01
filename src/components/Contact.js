import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const active = useSelector((state) => state.seeSection);
  const form = useRef();

  const submit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bq2c8jt",
        "template_20ph756",
        form.current,
        "JYXUKpUhdFgdYljtM"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <section id="Contact" className={`${active === "Contact" && "active"}`}>
      <h2 className="caption">Contactame</h2>
      <form className="form-contact" ref={form} onSubmit={submit}>
        <div className="form-group">
          <input
            type="text"
            className="form-field btn-cursor-hover-text"
            placeholder="Nombre"
            name="user_name"
            required
          />
          <label className="form-label">Nombre</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-field btn-cursor-hover-text"
            placeholder="Email"
            name="user_email"
            required
          />
          <label className="form-label">Email</label>
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-field btn-cursor-hover-text"
            placeholder="Mensaje"
            name="message"
            required
          />
          <label className="form-label">Mensaje</label>
        </div>
        <button className="btn-cursor-hover"> Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
