import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import "../css/home.css";

const Home = () => {
  const handleSocialMedia = (type) => {
    let url = "";
    if (type === "handleSocialMedia") {
      url = "https://linkedin.com";
    } else if (type === "insta") {
      url = "https://insta.com";
    } else if (type === "github") {
      url = "https://github.com/anil1707";
    } else if (type === "gfg") {
      url = "https://auth.geeksforgeeks.org/user/yadavanil1707ax";
    }

    window.open(url, "_blank");
  };
  return (
    <div id="home" className="home-container">
      {/* for social media icons */}
      <div className="icon-container">
        <FaLinkedinIn
          className="icons linkedin"
          onClick={() => handleSocialMedia("handleSocialMedia")}
        />
        <div style={{ width: "60px", height: "3px", background: "white" }} />
        <IoLogoInstagram
          className="icons insta"
          onClick={() => handleSocialMedia("insta")}
        />
        <div style={{ width: "60px", height: "3px", background: "white" }} />
        <FaGithub
          className="icons github"
          onClick={() => handleSocialMedia("github")}
        />
        <div style={{ width: "60px", height: "3px", background: "white" }} />
        <SiGeeksforgeeks
          className="icons gfg"
          onClick={() => handleSocialMedia("gfg")}
        />
      </div>
      <div>
        <div className="name-description-container">
          <p className="home-heading">Hey, my name is Anil Yadav</p>
          <p className="description">
          A well-rounded web developer often has skills in both frontend and backend development and understands the importance of testing to ensure a reliable and robust application. The combination of these skills contributes to the development of high quality web applications that provide an intuitive user experience.
          </p>
          <a href="#projects" className="project-btn">
            <p>Projects</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
