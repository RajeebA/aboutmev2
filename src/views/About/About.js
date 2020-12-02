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
    <div className="row">
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
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <ul class="about-info mt-4 px-md-0 px-2">
          <li class="d-flex">
            <span>Name:</span> <span>Ronaldo Fredrickson</span>
          </li>
          <li class="d-flex">
            <span>Date of birth:</span> <span>November 28, 1989</span>
          </li>
          <li class="d-flex">
            <span>Address:</span> <span>San Francisco CA 97987 USA</span>
          </li>
          <li class="d-flex">
            <span>Zip code:</span> <span>1000</span>
          </li>
          <li class="d-flex">
            <span>Email:</span> <span>ronaldo@gmail.com</span>
          </li>
          <li class="d-flex">
            <span>Phone: </span> <span>+1-2234-5678-9-0</span>
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
