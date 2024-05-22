import React from "react";
import projectData from "../../data.json";
import { useParams } from "react-router-dom";
import projectImg from "../../images/laptop.jpeg";
import "../../css/singleProject.css";
import FirstProjectFeature from "../../projectFeature/FirstProjectFeature";
const SingleProject = () => {
  const { id } = useParams();
  const projectDetail = projectData.project.find((item) => {
    return item.id === +id;
  });
  console.log("projectDetail", projectDetail, typeof id)
  let toolUsed = projectDetail?.toolUsed;
  const handleLivePage = () => {
    const url = projectDetail?.liveLink;
    window.open(url, "_blank");
  };

  const handeCodePage = () => {
    const url = projectDetail?.codeLink;
    window.open(url, "_blank");
  };
  return (
    <div className="main-container-singleProject" id="singlePage">
      <div className="project-name-detail-super-container">
        <div className="project-name-detail-container">
          <h1 className="project-name">{projectDetail?.name}</h1>
          <p className="project-about">{projectDetail?.about}</p>
          <button onClick={handleLivePage} className="live-btn">
            Live Link
          </button>
        </div>
      </div>
      <div className="project-overview-tool-super-container">
        <img className="project-img" src={projectImg} alt="img" />
        <div className="project-overiew-container">
          <p className="project-overiew-heading">Project Overview</p>
          <div className="project-overiew">
            {projectDetail?.projectOverView} <br />
            <br></br>
            <h2 style={{ color: "black" }}>Features:</h2> <br></br> 
            {id === "1" && <FirstProjectFeature />}
          </div>
          <div>
            <p className="tool-used-heading">Tool Used</p>
            <div className="tools-container">
              {toolUsed?.length > 0 &&
                toolUsed.map((item, index) => {
                  return (
                    <p key={index} className="tool">
                      {item}
                    </p>
                  );
                })}
            </div>
          </div>
          <div style={{}}>
            <p className="see-live-heading">See Live</p>
            <div className="btn-conatiner">
              <button
                onClick={handleLivePage}
                target="_blank"
                className="second-live-btn"
              >
                Live Link
              </button>
              <button
                onClick={handeCodePage}
                target="_blank"
                className="code-link-btn"
              >
                Code Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
