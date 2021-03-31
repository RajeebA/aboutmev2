import React, { useEffect, useState } from "react";
import "./home.css";
import anime from "animejs/lib/anime.es.js";
import About from "../About/About";
import Resume from "../Resume/Resume";
import FadeInSection from "../../commons/Fadeinsection/FadeInSection";
import { scroller } from "react-scroll";
import Services from "../Services/Service";
import Projects from "../Projects/Projects";
const Homeview = () => {
  const consoleText = (words, id, colors) => {
    if (colors === undefined) colors = ["#fff"];
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          let usedColor = colors.shift();
          colors.push(usedColor);
          let usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
  };

  const [skillSection, setSkillSection] = useState(false);
  useEffect(() => {
    anime({
      targets: ".fadeInUp",
      duration: 1000,
      easing: "linear",
      opacity: [0, 1],
      autoPlay: false,
      offset: 1000,
    });
    window.addEventListener("scroll", handleScroll);
    return () => {};
  }, []);
  useEffect(() => {
    consoleText(
      ["Web Application Developer", "Mobile Application Developer"],
      "text",
      ["#212529", "#212529", "#212529"]
    );
    return () => {};
  }, []);

  const handleScroll = () => {
    console.log(scroller.getActiveLink());
    let activelink = scroller.getActiveLink();
    if (activelink === "experience") {
      setSkillSection(true);
    }
  };
  return (
    <React.Fragment>
      <FadeInSection>
        <section id="home-section" className="full-height home-screen">
          <div className="container-fluid fadeInUp" id="banner">
            <div
              className="row no-gutters slider-text justify-content-center align-items-center"
              style={{ minHeight: 400 }}
            >
              <div className="col-lg-8 col-md-6 ftco-animate  align-items-center ">
                <div className="text text-center">
                  <span className="subheading">Hey! I am</span>
                  <h1>Rajeeb A</h1>
                  <h2 id="text">.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="about-section" className="section">
          <div className="container fadeInUp">
            <About />
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section id="resume-section" className="section">
          <Resume create={skillSection} />
        </section>
      </FadeInSection>
      <FadeInSection>
        <section id="service-section" className="section">
          <h2 className="heading-section mb-4">SERVICES</h2>
          <Services />
        </section>
      </FadeInSection>
      <FadeInSection>
        <section id="projects-section" className="section">
          <h2 className="heading-section mb-4">PROJECTS</h2>
          <Projects />
        </section>
      </FadeInSection>
    </React.Fragment>
  );
};
export default Homeview;
