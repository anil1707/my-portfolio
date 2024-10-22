import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import { MdCopyright } from "react-icons/md";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="name-about-container">
        <div className="name-detail-container">
          <p className="user-name">ANIL KUMAR YADAV</p>
          <p className="user-about">
            "Turning ideas into reality, one line of code at a time." Passionate
            about crafting user-friendly, efficient solutions that make a
            difference. Available for freelance projects and collaborations.
          </p>
        </div>
        <div>
          <p className="user-name">SOCIAL</p>
          <div className="social-media-icons-container">
            <FaLinkedinIn className="footer-media-icons" />
            <IoLogoInstagram className="footer-media-icons" />
            <FaGithub className="footer-media-icons" />
            <SiGeeksforgeeks className="footer-media-icons" />
          </div>
        </div>
      </div>
      <hr />
      <div className="rights-container">
        <MdCopyright /> Copyright 2024. Made by
        <span> Anil Kumar Yadav</span> !
      </div>
    </div>
  );
};

export default Footer;
