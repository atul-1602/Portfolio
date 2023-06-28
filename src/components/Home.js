import React, { useState } from "react";
import "../style/Home.css";
import Typewriter from "typewriter-effect";
import Img from "../images/home-pic22p.png";
import hgithub from "../images/hgithub.png";
import download from "../images/hdownload.png";

const Home = () => {


  const [state] = useState({
    home_name1: "I'm",
    home_name2: "Atul Singh Chauhan",
  });
  
  return (
    <>
      <div className="content" >
        <div className="contentinside">
          <div className="home-detail">
            <div className="detail-name">
              <div className="home_name1">{state.home_name1}</div>
              <div className="home_name2">{state.home_name2}</div>
            </div>
            <hr style={{ width: "85%", marginTop: "1rem" }} />

            <div className="home_text">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: ["FrontEnd Developer ", " Programmer"],
                }}
              />
            </div>

            <div className="home-line">
              I'm a frontend developer who loves building user-friendly websites
              and web apps.
            </div>
            <div className="home-btn">
              <a href="ATUL_RESUME.pdf" download="ATUL_RESUME.pdf">
                <button className="resume hbtn">
                  <img src={download} alt="/" />
                  <span>Resume</span>
                </button>
              </a>
              <button className="github hbtn">
                <a href="https://github.com/atul-1602" target="blank">
                  <img src={hgithub} alt="/" />
                  Github
                </a>
              </button>
            </div>
          </div>
          <div className="home-image">
            <div className="home-img"></div>
            <img src={Img} alt="google.com" />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Home;
