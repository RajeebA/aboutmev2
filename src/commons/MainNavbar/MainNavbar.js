import React from "react";
import "./MainNavbar.css";
import { Link } from "react-scroll";
const MainNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark rajeeb_navbar rajeeb-navbar-light  navbar-sticky
        -navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <span>R</span>ajeeb
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="my-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item ">
              <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Home
              </Link>
              {/* <a href="#home-section" className="nav-link active">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                About
              </Link>
              {/* <a href="#about-section" className="nav-link">
                <span>About</span>
              </a> */}
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="resume-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Resume
              </Link>
              {/* <a href="#resume-section" className="nav-link">
                <span>Resume</span>
              </a> */}
            </li>
            <li className="nav-item">
              <a href="#services-section" className="nav-link">
                <span>Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects-section" className="nav-link">
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog-section" className="nav-link">
                <span>My Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default MainNavbar;
