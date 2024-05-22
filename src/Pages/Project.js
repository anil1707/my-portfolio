import React from "react";
import img1 from "../images/laptop.jpeg";
import projectData from "../data.json";
import { useNavigate } from "react-router-dom";
import "../css/project.css";

const Project = () => {
  const navigate = useNavigate();
  const handleClick = (projectDetail) => {
    console.log(projectDetail);
    navigate("/project/" + projectDetail.id);
  };
  return (
    <div className="main-container" id="projects">
      <div className="project-container">
        <p className="project-heading">Project</p>
        <div className="underline"></div>
      </div>
      {projectData.project.length > 0 &&
        projectData.project.map((item, index) => {
          return (
            <div className="single-project-container" key={index}>
              <img className="project-image" src={img1} alt="img" />
              <div className="project-detail-container">
                <p className="project-name">{item.name}</p>
                <p className="about-project">{item.about}</p>
                <button
                  className="case-study-btn"
                  onClick={() => handleClick(item)}
                >
                  Case Study
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Project;
