import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../css/experience.css";

const Experience = () => {
  return (
    <div id="experience" className="main-container">
      {/* Exprience title */}
      <div className="experience-heading-container">
        <p className="experience-heading">Experience</p>
        <div className="underline"></div>
      </div>
      {/* Exprrience detail    */}
      <div className="experience-detail-super-container">
        {/* first exprience */}
        <div className="experience-detail-container">
          <p className="date" style={{paddingRight:"20px"}}>November 2022 - Continue </p>
          <div className="stepper-container">
            <FaMapMarkerAlt className="map" />
            <p className="line"></p>
          </div>
          <div className="experience-box">
            <p className="employer-name">Cognologix Technologies Pvt. Ltd.</p>
            <p className="job-title">Associate Test Developer</p>
            <p className="job-detail">
              At Cognologix, I hold the position of a Test Developer,
              contributing my expertise to ensure the robustness and reliability
              of various projects. Additionally, I actively engage in frontend
              development using React.js, showcasing my versatility by
              seamlessly transitioning between the roles of a test developer and
              a frontend developer.
            </p>
          </div>
        </div>

        {/* second experience */}
        <div className="experience-detail-container">
          <p className="date">January 2022 - October 2022</p>
          <div className="stepper-container after-first-experience">
            <FaMapMarkerAlt className="map" />
            <p className="line"></p>
          </div>
          <div className="experience-box">
            <p className="employer-name">Newton School</p>
            <p className="job-title">Internship</p>
            <p className="job-detail">
              During my time at Newton School, I acquired a strong foundation in
              Java, data structures, and algorithms. Building on that knowledge,
              I expanded my skill set to include HTML, CSS, JavaScript, React,
              Node, Express, MongoDB, and MySQL. Applying these skills, I
              successfully created various projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
