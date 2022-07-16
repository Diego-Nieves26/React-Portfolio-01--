import "../styles/Nav.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { setSeeSection } from "../store/slices/seeSection.slice";

const Nav = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const activeLink = useSelector((state) => state.seeSection);
  const dispatch = useDispatch();
  let y;

  window.onscroll = () => {
    y = window.scrollY;
    if (y >= 600) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };

  const activeCard = (e) => {
    if (window.screen.width >= 1100) {
      dispatch(setSeeSection(e));
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            className={`btn-cursor-hover ${
              activeLink === "AbautMe" ? "active-link" : "navigation-links"
            }`}
            to="AbautMe"
            offset={-75}
            smooth={true}
            duration={500}
            onClick={() => activeCard("AbautMe")}
          >
            <i className="bx bxs-user"></i>
            <span>Sobre mi</span>
          </Link>
        </li>
        <li>
          <Link
            className={`btn-cursor-hover ${
              activeLink === "Information" ? "active-link" : "navigation-links"
            }`}
            to="Information"
            offset={-75}
            smooth={true}
            duration={500}
            onClick={() => activeCard("Information")}
          >
            <i className="bx bxs-info-circle"></i>
            <span>Informacion</span>
          </Link>
        </li>
        <li>
          <Link
            className={`btn-cursor-hover ${
              activeLink === "Proyectos" ? "active-link" : "navigation-links"
            }`}
            to="Proyectos"
            offset={-75}
            smooth={true}
            duration={500}
            onClick={() => activeCard("Proyectos")}
          >
            <i className="bx bxs-briefcase"></i>
            <span>Proyectos</span>
          </Link>
        </li>
        <li>
          <Link
            className={`btn-cursor-hover ${
              activeLink === "Contact" ? "active-link" : "navigation-links"
            }`}
            to="Contact"
            offset={-75}
            smooth={true}
            duration={500}
            onClick={() => activeCard("Contact")}
          >
            <i className="bx bxs-envelope"></i>
            <span>Contacto</span>
          </Link>
        </li>
      </ul>
      {scrollToTop && (
        <div
          className="scrolltop btn-cursor-hover"
          onClick={() => scroll.scrollToTop()}
        >
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
