import React from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Contact from "./Contact";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

const Index = (props) => {

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
