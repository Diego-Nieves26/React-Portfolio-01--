import "../styles/Header.css";
import React from "react";
import Nav from "./Nav";
import foto from "../assets/DIEGO.png";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { setSeeSection } from "../store/slices/seeSection.slice";

const Header = () => {
  const dispatch = useDispatch();
  const activeCard = (e) => {
    if (window.screen.width >= 1100) {
      dispatch(setSeeSection(e));
    }
  };
  return (
    <header>
      <Nav />
      <div>
        <div className="background">
          <div></div>
        </div>
        <div className="presentation">
          <img src={foto} alt="Naruto" />
          <h1>Diego Nieves</h1>
          <h2>Desarrollador Front-end</h2>
          <ul>
            <li>
              <a
                className="btn-cursor-hover"
                href="https://github.com/Diego-Nieves26"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li>
              <a
                className="btn-cursor-hover"
                href="https://www.linkedin.com/in/diego-nieves-04b409242/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="btn-cursor-hover"
                href="https://es.stackoverflow.com/users/295820/diego-nieves"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-stack-overflow"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="btnCvContact">
          <a
            className="download-button btn-header btn-cursor-hover"
            href="../assets/CV.pdf"
            target="_blank"
          >
            <svg
              className="css-i6dzq1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line y2="3" x2="12" y1="15" x1="12"></line>
            </svg>
            CV
          </a>
          <Link
            className="btn-header btn-cursor-hover"
            to="Contact"
            offset={-75}
            smooth={true}
            duration={1000}
            onClick={() => activeCard("Contact")}
          >
            Contactame
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
