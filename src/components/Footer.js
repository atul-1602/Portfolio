import React from "react";
import "../style/Footer.css";
import fmail from "../images/fmail.png";
import flinkedin from "../images/flinkedin2.png";
import fgithub from "../images/fgithub.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <p>
            ATUL CHAUHAN <br />
            <span> software engineer | frontend developer</span>
          </p>
        </div>
        <div className="footer-right">
          <div className="fimage">
            <img src={fmail} alt="/" />
          </div>
          <div className="fimage">
            <img src={fgithub} alt="/" />
          </div>
          <div className="fimage">
            <img src={flinkedin} alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
