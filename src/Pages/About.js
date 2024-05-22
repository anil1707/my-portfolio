import React from "react";
import "../css/about.css";

const About = () => {
  const skillSet = [
    "Node.js",
    "Express.js",
    "React.js",
    "MongoDb",
    "JavaScript",
    "MySql",
    "Cypress",
    "Data Structor",
    "OOPs",
    "Java",
    "Material UI",
    "Talwind CSS",
    "Redux",  
    "HTML5",
    "CSS3",
  ];
  return (
    <div className="about-container-container" id="about">
      <div className="about-container">
        <p className="about-header">About Me</p>
        <div className="underline"></div>
        <p className="about-description">
          Hello, I'm Anil Kumar Yadav, a dedicated web developer with a
          comprehensive skill set spanning both frontend and backend
          technologies. In the realm of UI development, I am well-versed in
          using tools like React.js, HTML, CSS and JavaScript to craft visually stunning
          and interactive user interfaces. My passion lies in transforming
          design concepts into seamless, engaging web experiences.
          <br />
          <br />
          On the backend, I harness the power of Node.js and Express to build
          robust server-side logic, ensuring efficient request handling and
          smooth communication between the frontend and backend. Proficient in
          database management, I leverage MongoDB and MySQL to store and
          retrieve data, contributing to the robustness of web applications.
          <br />
          <br />  
          In addition to my frontend and backend expertise, I am well-acquainted
          with the Cypress testing tool. With Cypress, I ensure the reliability
          and functionality of web applications through effective end-to-end
          testing. This proficiency allows me to deliver applications with a
          high level of quality and performance.
        </p>
      </div>
      <div className="skill-super-container">
        <div className="know-me-container">
          <p className="know-me-container-first-child">Get to know me!</p>
          <p className="know-me-container-second-child">
            As a dedicated and versatile software developer, I bring a passion
            for turning innovative ideas into efficient and user-friendly
            software solutions. With a strong foundation in React.js, JavaScript, HTML5, CSS3, Node.js, Express.js, Material UI, Cypress, Java, MongoDB and MySQL, I am committed to
            delivering high-quality code, solving complex problems, and
            contributing to the success of projects through collaboration and
            continuous learning.
          </p>
          <a href="#contact" className="contact-btn">CONTACT</a>
        </div>
        <div className="skill-container">
          <p className="skill-container-first-child">My Skills!</p>
          <div className="skill-container-second-child">
            {skillSet.map((item, index) => {
              return (
                <p key={index} className="skill">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
