import analytics from "../../assets/analysis.svg";
import android from "../../assets/android.svg";
import apple from "../../assets/apple.svg";
import web from "../../assets/settings.svg";
import analytics_white from "../../assets/analysis_white.svg";
import apple_white from "../../assets/apple_white.svg";
import web_white from "../../assets/settings_white.svg";
import "./service.css";
import { useState } from "react";
const Services = () => {
  const [services, setService] = useState([
    {
      icon: analytics,
      hoverIcon: analytics_white,
      heading: "web design",
      hovered: false,
      description:
        "create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips",
    },
    {
      icon: android,
      hoverIcon: android,
      heading: "android developer",
      hovered: false,
      description:
        "developing applications for devices powered by the Android operating system. Due to the fragmentation of this ecosystem",
    },
    {
      icon: web,
      hoverIcon: web_white,
      hovered: false,
      heading: "web developer",
      description:
        "coding, design and layout of a website according to a company's specifications. As the role takes into consideration user experience and function, a certain level of both graphic design and computer programming is necessary.",
    },
    {
      icon: apple,
      hoverIcon: apple_white,
      hovered: false,
      heading: "ios developer",
      description:
        "creating and architecting new mobile applications by the IOS operating system, maintaining and improving existing features on existing applications, and working with our sales team to develop innovative solutions that meet our clients' business needs.",
    },
  ]);
  const onHover = (i) => {
    let _tempServices = [...services];
    _tempServices[i].hovered = true;
    setService(_tempServices);
  };
  const onLeave = (i) => {
    let _tempServices = [...services];
    _tempServices[i].hovered = false;
    setService(_tempServices);
  };
  return (
    <div className="row services">
      {services.map((service, i) => (
        <div
          className="col-md-4 text-center d-flex align-items-center justify-content-center"
          key={i}
        >
          <div
            className="service-card shadow"
            onMouseOver={() => onHover(i)}
            onMouseLeave={() => onLeave(i)}
          >
            <div className="icon">
              <img
                src={service.hovered ? service.hoverIcon : service.icon}
                alt="service-ico"
              />
            </div>
            <div className="desc">
              <h3 className="mb-3">{service.heading}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Services;
