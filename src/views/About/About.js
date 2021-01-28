import React from "react";
import profile from "../../assets/ceo.jpg";
import "./About.css";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import codepen from "react-useanimations/lib/codepen";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import linkedin from "react-useanimations/lib/linkedin";

const About = () => {
  return (
    <div className="row about-screen">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-body p-0">
            <img
              className="responsive-image"
              src={profile}
              alt="profile"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pl-md-5 py-5 heading-section">
        <h2 className="mb-4">About Me</h2>
        <p>
          I am full-stack web/mobile developer and UI/UX javascript specialist.
        </p>
        <ul className="about-info mt-4 px-md-0 px-2">
          <li className="d-flex">
            <span>Name:</span> <span>Rajeeb A</span>
          </li>
          <li className="d-flex">
            <span>Date of birth:</span> <span>May 12, 1998</span>
          </li>
          <li className="d-flex">
            <span>Address:</span>{" "}
            <span>Kollengode, Palakkad, Kerala, India.</span>
          </li>
          <li className="d-flex">
            <span>Pin code:</span> <span>678506</span>
          </li>
          <li className="d-flex">
            <span>Email:</span> <span>rajeebpachu@gmail.com</span>
          </li>
          <li className="d-flex">
            <span>Phone: </span>{" "}
            <span>
              <a href="tel:+918078054465">+918078054465</a>
            </span>
          </li>
          <li className="d-flex">
            <span>Tel: </span>
            <span>
              <a href="tel:+916282831479">+916282831479</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-4 mt-4 pb-4 ">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 offset-1">
            <a
              href="https://github.com/RajeebA"
              rel="noreferrer"
              target="_blank"
              className="social-links"
            >
              <UseAnimations
                animation={github}
                size={56}
                style={{ padding: 100 }}
                className="m-auto"
                strokeColor="#211F1F"
              />
              <span>
                <h2
                  className="text-center social-text"
                  style={{ color: "#211F1F" }}
                >
                  Github
                </h2>
              </span>
            </a>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
            <a
              href="https://codepen.io/Rajeeb_A"
              rel="noreferrer"
              target="_blank"
              className="social-links"
            >
              <UseAnimations
                animation={codepen}
                size={56}
                style={{ padding: 100 }}
                className="m-auto"
                strokeColor="#0EBEFF"
              />
              <span>
                <h2
                  className="text-center social-text"
                  style={{ color: "#0ebeff" }}
                >
                  Codepen
                </h2>
              </span>
            </a>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
            <a
              href="https://www.facebook.com/rajeeb.valiyakalam/"
              rel="noreferrer"
              target="_blank"
              className="social-links"
            >
              <UseAnimations
                animation={facebook}
                size={56}
                style={{ padding: 100 }}
                className="m-auto"
                strokeColor="#3b5998"
              />
              <span>
                <h2
                  className="text-center social-text"
                  style={{ color: "#3b5998" }}
                >
                  Facebook
                </h2>
              </span>
            </a>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
            <a
              href="https://www.instagram.com/rajeeb_valiyakalam/"
              rel="noreferrer"
              target="_blank"
              className="social-links"
            >
              <UseAnimations
                animation={instagram}
                size={56}
                style={{ padding: 100 }}
                className="m-auto"
                strokeColor="#e1306c"
              />
              <span>
                <h2
                  className="text-center social-text"
                  style={{ color: "#e1306c" }}
                >
                  Instagram
                </h2>
              </span>
            </a>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
            <a
              href="https://www.linkedin.com/in/rajeeb-a-172a5a194"
              rel="noreferrer"
              target="_blank"
              className="social-links"
            >
              <UseAnimations
                animation={linkedin}
                size={56}
                style={{ padding: 100 }}
                className="m-auto"
                strokeColor="#0077b5"
              />
              <span>
                <h2
                  className="text-center social-text"
                  style={{ color: "#0077b5" }}
                >
                  Linkedin
                </h2>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
