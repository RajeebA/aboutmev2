import React, { useEffect, useState } from "react";
import "./home.css";
import anime from "animejs/lib/anime.es.js";
import About from "../About/About";
import Resume from "../Resume/Resume";
import FadeInSection from "../../commons/Fadeinsection/FadeInSection";
import { scroller } from "react-scroll";
const Homeview = () => {
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
    sliderText();
    window.addEventListener("scroll", handleScroll);
    return () => {};
  }, []);

  const sliderText = () => {
    var textWrapper = document.querySelector(".ml3");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml3 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
      })
      .add({
        targets: ".ml3",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  };
  const handleScroll = () => {
    console.log(scroller.getActiveLink());
    var activelink = scroller.getActiveLink();
    if (activelink === "experience") {
      setSkillSection(true);
    }
  };
  return (
    <React.Fragment>
      <FadeInSection>
        <section id="home-section" className="full-height">
          <div className="container-fluid fadeInUp" id="banner">
            <div
              className="row no-gutters slider-text justify-content-center align-items-center"
              style={{ minHeight: 400 }}
            >
              <div className="col-lg-8 col-md-6 ftco-animate  align-items-center ">
                <div className="text text-center">
                  <span className="subheading">Hey! I am</span>
                  <h1>Rajeeb A</h1>
                  <h2 className="ml3">
                    <span className="text-wrapper">
                      <span className="line line1"></span>
                      <span className="letters">
                        I am a &nbsp;
                        <span style={{ color: "#3e64ff" }}>Developer</span>
                      </span>
                    </span>
                  </h2>
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
    </React.Fragment>
  );
};
export default Homeview;
