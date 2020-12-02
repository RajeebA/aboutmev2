import React from "react";
import "./Auth.css";
import anime from "animejs/lib/anime.es.js";
import { useHistory } from "react-router-dom";
const AuthView = () => {
  const history = useHistory();
  const onSubmit = (e) => {
    let form = document.querySelector("form");
    let input = document.querySelector("input");
    e.preventDefault();
    if (form.dataset.state === "typing") {
      let animation = anime({
        targets: ".icon-arrow",
        rotate: [0, 360],
        loop: true,
        duration: 100,
        easing: "easeInOutSine",
        autoPlay: false,
        opacity: 1,
      });

      animation.play();
      setTimeout(() => {
        animation.pause();
        if (input.value !== "rajeeb") {
          form.dataset.state = "error";
          anime({
            targets: ".icon-arrow",
            opacity: 0,
          });
          anime({
            targets: ".icon-error",
            rotate: 360 * 3,
            opacity: 1,
            easing: "easeInOutQuad",
          });
        } else {
          form.dataset.state = "success";
          anime({
            targets: ".icon-arrow",
            opacity: 0,
          });
          anime({
            targets: ".icon-success path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
          });
          setTimeout(() => {
            history.push("/home");
          }, 1000);
        }
        anime({
          targets: ".icon-arrow",
          rotate: 0,
          loop: false,
          duration: 100,
          easing: "easeInOutSine",
          autoPlay: true,
        });
      }, 500);
      return;
    } else if (form.dataset.state === "error") {
      form.dataset.state = "typing";
      anime({
        targets: ".icon-arrow",
        opacity: 1,
        easing: "easeInOutQuad",
      });
      anime({
        targets: ".icon-error",
        opacity: 0,
        easing: "easeInOutQuad",
      });
    }
  };
  return (
    <div className="auth container">
      <form data-state="typing" className="form">
        <input type="password" placeholder="Password" />
        <button className="submit" type="submit" onClick={onSubmit}>
          <div className="submit-bg"></div>
          <svg className="icon-arrow" viewBox="0 0 31.49 31.49">
            <path d="M21.205 5.007c-.429-.444-1.143-.444-1.587 0-.429.429-.429 1.143 0 1.571l8.047 8.047H1.111C.492 14.626 0 15.118 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587.444.444 1.159.444 1.587 0l9.952-9.952c.444-.429.444-1.143 0-1.571l-9.952-9.953z" />
          </svg>
          <svg className="icon-error" viewBox="0 0 100 100">
            <path d="M10 10 L90 90 M10 90 L90 10" />
          </svg>
          <svg className="icon-success" viewBox="0 0 100 100">
            <path d="M0 60 L40 100 L100 0" />
          </svg>
        </button>
        <span className="message message--error">Oops!</span>
        <span className="message message--success">Yes!</span>
      </form>
      <p>
        Try "<strong>rajeeb</strong>"
      </p>
    </div>
  );
};
export default AuthView;
