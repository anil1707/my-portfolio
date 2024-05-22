import React, { useEffect, useState } from "react";
import "../css/header.css";
import { RxAvatar } from "react-icons/rx";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

const Header = () => {
  const [isHambunrgerOpe, setIsHamburgerOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const params = useParams();
  const handleClick = (e) => {
    if (screenWidth <= 480) setIsHamburgerOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth > 480) {
      setIsHamburgerOpen(true);
    } else if (screenWidth <= 480) {
      setIsHamburgerOpen(false);
    }
  }, [screenWidth]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="nav">
        <div className="avatar">
          <div>
            {params && !params.id && (
              <div
                className={
                  isHambunrgerOpe
                    ? "hamburger hamburger-border-style"
                    : "hamburger"
                }
                onClick={() => setIsHamburgerOpen(!isHambunrgerOpe)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {params && !params.id ? (
              <div
                className={
                  isHambunrgerOpe ? "nav-items" : "disappear-nav-items"
                }
              >
                <a href="#home" onClick={handleClick}>
                  Home
                </a>
                <a href="#about" onClick={handleClick}>
                  About
                </a>
                <a href="#experience" onClick={handleClick}>
                  Experience
                </a>
                <a href="#education" onClick={handleClick}>
                  Education
                </a>
                <a href="#projects" onClick={handleClick}>
                  Projects
                </a>
                <a href="#contact" onClick={handleClick}>
                  Contact
                </a>
              </div>
            ) : (
              <div>
                <button
                  style={{
                    padding: "10px",
                    width: "150px",
                    border: "none",
                    fontSize: "20px",
                    background: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "1px",
                  }}
                  onClick={handleBack}
                >
                  <MdArrowBackIos />
                  BACK
                </button>
              </div>
            )}
          </div>
          <div className="avatar-style">
            <RxAvatar style={{ fontSize: "40px" }} />
            <p style={{ fontSize: "20px", fontWeight: "bolder" }}>ANIL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
