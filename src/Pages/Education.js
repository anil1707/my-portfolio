import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../css/education.css";

const Education = () => {
  return (
    <div id="education" className="main-container">
      {/* Education title */}
      <div className="header-container">
        <p className="education-heading">Education</p>
        <div className="underline"></div>
      </div>
      {/* Education detail    */}
      <div className="education-detail-super-container">
        {/* first Education */}
        <div className="education-detail-container">
          <p className="date">September 2018 - September 2022</p>
          <div className="stepper-container">
            <FaMapMarkerAlt className="map" />
            <p className="line"></p>
          </div>
          <div className="education-box">
            <p className="institute-name">
              Rajkiya Emgineering College, Sonbhadra
            </p>
            <p className="education-level">
              Batcher of Techonoloy in Computer Science & Engineering
            </p>
            <p className="education-detail">
              I successfully completed my Bachelor of Technology (B.Tech) at REC
              Sonbhadra with an impressive overall SGPA of 7.77, reflecting my
              commitment to academic excellence.
            </p>
          </div>
        </div>

        {/* second Education */}
        <div className="education-detail-container">
          <p className="date">September 2015 - September 2017</p>
          <div className="stepper-container">
            <FaMapMarkerAlt className="map" />
            <p className="line"></p>
          </div>
          <div className="education-box">
            <p className="institute-name">S. N. B. Public Inter College</p>
            <p className="education-level">Intermediate</p>
            <p className="education-detail">
              I have completed my intermediate from Sant Narayan Baba Public
              Inter College, and I achieved 84.6%.
            </p>
          </div>
        </div>

        {/* Third education */}

        <div className="education-detail-container">
          <p className="date">September 2015 - September 2017</p>
          <div className="stepper-container">
            <FaMapMarkerAlt className="map" />
            <p className="line"></p>
          </div>
          <div className="education-box">
            <p className="institute-name">S. N. B. Public Inter College</p>
            <p className="education-level">High School</p>
            <p className="education-detail">
              I have completed my High School from Sant Narayan Baba Public
              Inter College, and I achieved 84.6%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
