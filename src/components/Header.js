import { setSeeSection } from "../store/slices/seeSection.slice";
import { setMessage } from "../store/slices/message.slice";
import { useDispatch } from "react-redux";
import foto from "../assets/DIEGO.png";
import { Link } from "react-scroll";
import CV from "../assets/CV.pdf";
import "../styles/Header.css";
import React from "react";
import Nav from "./Nav";
import { useState } from "react";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const dispatch = useDispatch();
  const activeCard = (e) => {
    if (window.screen.width >= 1100) {
      dispatch(setSeeSection(e));
    }
  };
  const changeTheme = (theme) => {
    setDarkTheme(theme);
    if (theme) {
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
    }
  };

  return (
    <header>
      <Nav />
      <div>
        <div className="background">
          <article>
            <label className="switch btn-cursor-hover">
              <input
                type="checkbox"
                onChange={(e) => changeTheme(e.target.checked)}
                checked={darkTheme}
              />
              <span className="slider"></span>
            </label>
          </article>
          <div></div>
        </div>
        <div className="presentation">
          <div>
            <img src={foto} alt="Yo" />
          </div>
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
            href={CV}
            className="download-button btn-header btn-cursor-hover "
            download="Diego_Nieves_CV"
            onClick={() =>
              dispatch(
                setMessage(
                  "😉😉😉😉😉"
                )
              )
            }
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
            Contáctame
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
