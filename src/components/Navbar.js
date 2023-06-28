import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="leftSide">
          <Link to="/landing" className="linkleft">
            Atul Chauhan{" "}
          </Link>
        </div>
        <div className="rightSide">
          {/* <SettingsApplicationsIcon className="icon" /> */}
          <Link to="/" className="link">
            {" "}
            Projects
          </Link>
          {/* <ConstructionIcon className="icon"/>   */}
          <Link to="/" className="link">
            Skills
          </Link>
          {/* <CastForEducationIcon className="icon"/>   */}
          <Link to="/" className="link">
            Education
          </Link>
          {/* <MarkunreadIcon className="icon"/>   */}
          <Link to="/" className="link">
            Contact
          </Link>
        </div>
        <div className="rightSidelow">
          <Link to="/" className="link">
            {" "}
            Projects
          </Link>
          <Link to="/" className="link">
            Skills
          </Link>
          <Link to="/" className="link">
            Education
          </Link>
          <Link to="/" className="link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
