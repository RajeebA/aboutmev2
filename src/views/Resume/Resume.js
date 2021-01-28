import React, { useEffect } from "react";
import "./Resume.css";
import { Link } from "react-scroll";
import ProgressBar from "progressbar.js";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../../commons/AnimatedProgressProvider/AnimatedProgressProvider";
const Resume = ({ create }) => {
  const skills = [
    {
      name: "Node JS",
      level: 90,
      last_year: 60,
      last_month: 89,
    },
    {
      name: "React JS",
      level: 80,
      last_year: 40,
      last_month: 69,
    },
    {
      name: "Angular",
      level: 75,
      last_year: 60,
      last_month: 67,
    },
  ];
  useEffect(() => {
    if (create) {
      const css_bar = createBar(".css", "90%", 90);
      const html_bar = createBar(".html", "95%", 95);
      const boostrap_bar = createBar(".boostrap", "96%", 96);
      const js_bar = createBar(".js", "91%", 91);
      css_bar.animate(1.0);
      html_bar.animate(1.0);
      boostrap_bar.animate(1.0);
      js_bar.animate(1.0);
      return () => {
        css_bar.destroy();
        html_bar.destroy();
        boostrap_bar.destroy();
        js_bar.destroy();
      };
    }
  }, [create]);

  const createBar = (el, width, value) => {
    return new ProgressBar.Line(el, {
      strokeWidth: 4,
      easing: "easeInOut",
      duration: 1400,
      color: "#007bff",
      trailColor: "#eee",
      trailWidth: 1,

      svgStyle: { width: width, height: "100%" },
      text: {
        style: {
          color: "#999",
          position: "absolute",
          right: "0",
          padding: 0,
          margin: 0,
          fontWeight: 600,
          transform: null,
        },
        autoStyleContainer: false,
      },
      from: { color: "#FFEA82" },
      to: { color: "#ED6A5A" },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * value) + " %");
      },
    });
  };
  return (
    <div className="container resume-screen">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div id="list-example" className="list-group navi">
            <Link
              activeClass="active-resume"
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="list-group-item list-group-item-action"
            >
              Education
            </Link>

            <Link
              activeClass="active-resume"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="list-group-item list-group-item-action"
            >
              Experience
            </Link>

            <Link
              activeClass="active-resume"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="list-group-item list-group-item-action"
            >
              Skills
            </Link>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
          <div
            data-spy="scroll"
            data-target="#list-example"
            data-offset="0"
            className="scrollspy-example"
          >
            <div id="education" className="page">
              <h2 className="heading">Education</h2>
              <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
                <div className="icon-wrap d-flex align-items-center justify-content-center">
                  <i
                    className="fa fa-graduation-cap icon"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="text pl-3">
                  <span className="date">2015-2018</span>
                  <h2>Bachelor of Computer Application</h2>
                  <span className="position">
                    Nehru Arts and Science College
                  </span>
                  <p>Completed BCA (Computer Application) with 76%.</p>
                </div>
              </div>
              <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
                <div className="icon-wrap d-flex align-items-center justify-content-center">
                  <i
                    className="fa fa-graduation-cap icon"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="text pl-3">
                  <span className="date">2013-2015</span>
                  <h2>HSE Computer Science</h2>
                  <span className="position">VMHSS Vadavannur</span>
                  <p>Completed HSE (Computer Science) with 72%.</p>
                </div>
              </div>
              <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
                <div className="icon-wrap d-flex align-items-center justify-content-center">
                  <i
                    className="fa fa-graduation-cap icon"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="text pl-3">
                  <span className="date">2012-2013</span>
                  <h2>SSLC</h2>
                  <span className="position">BSSHSS Kollengode</span>
                  <p>Completed SSLC with 80%.</p>
                </div>
              </div>
            </div>
            <div id="experience" className="page">
              <h2 className="heading">Experience</h2>
              <div className="resume-wrap d-flex fadeInUp">
                <div className="icon-wrap d-flex align-items-center justify-content-center">
                  <i className="fa fa-history icon" aria-hidden="true"></i>
                </div>
                <div className="text pl-3">
                  <span className="date">2018-2019</span>
                  <h2>JavaScript Developer</h2>
                  <span className="position">
                    Crisp Cloud Solution Coimbatore
                  </span>
                  <p>
                    implementing the front-end logic that defines the behavior
                    of the visual elements of a web application.connecting this
                    with the services that reside on the back-end.
                  </p>
                </div>
              </div>
              <div className="resume-wrap d-flex fadeInUp">
                <div className="icon-wrap d-flex align-items-center justify-content-center">
                  <i className="fa fa-history icon" aria-hidden="true"></i>
                </div>
                <div className="text pl-3">
                  <span className="date">2019-2020</span>
                  <h2>Web Apps Developer</h2>
                  <span className="position">Riafy Technologies</span>
                  <p>
                    Writing well designed, testable, efficient code by using
                    best software development practices. Creating website
                    layout/user interfaces by using standard HTML/CSS practices.
                    Integrating data from various back-end services and
                    databases.
                  </p>
                </div>
              </div>
              <div className="resume-wrap d-flex fadeInUp">
                <div className="icon-wrap d-flex align-items-center justify-content-center">
                  <i className="fa fa-history icon" aria-hidden="true"></i>
                </div>
                <div className="text pl-3">
                  <span className="date">2019-2020</span>
                  <h2>Backend Developer</h2>
                  <span className="position">Riafy Technologies</span>
                  <p>
                    writing server-side web application logic in JavaScript with
                    database scripts MYSQL ,PostgreSQL and MongoDB.
                  </p>
                </div>
              </div>
            </div>
            <div id="skills" className="page three">
              <h2 className="heading">Skills</h2>

              <div className="row progress-circle mb-5">
                {create &&
                  skills.map((skill) => (
                    <div className="col-lg-4 mb-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="h5 font-weight-bold text-center mb-4">
                          {skill.name}
                        </h2>
                        {/* <!-- Progress bar 1 --> */}
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={skill.level}
                          duration={1.4}
                          easingFunction={easeQuadInOut}
                        >
                          {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                              <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                strokeWidth={4}
                                styles={buildStyles({
                                  pathTransition: "none",
                                  pathColor: "#3e64ff",
                                })}
                              />
                            );
                          }}
                        </AnimatedProgressProvider>

                        <div className="row text-center mt-4">
                          <div className="col-6 border-right">
                            <div className="h4 font-weight-bold mb-0">
                              {skill.last_year}
                            </div>
                            <span className="small text-gray">Last year</span>
                          </div>
                          <div className="col-6">
                            <div className="h4 font-weight-bold mb-0">
                              {skill.last_month}
                            </div>
                            <span className="small text-gray">Last month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="row">
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
                    <h3>CSS</h3>
                    <div className="css"></div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
                    <h3>HTML5</h3>
                    <div className="html"></div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
                    <h3>BOOSTRAP</h3>
                    <div className="boostrap"></div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
                    <h3>JAVASCRIPT</h3>
                    <div className="js"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
