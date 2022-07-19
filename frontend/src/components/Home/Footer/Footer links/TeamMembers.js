import React from "react";
import "./Team.modules.css";
import { Link } from "react-router-dom";

const TeamMember = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="r">
      <h1> OUR TEAM</h1>
      <br></br>
      <br></br>

      <div className="wrapper">
        <div className="video-item">
          <div className="images">
            <img src="../imagess/simon.jpg" alt="" className="img" />
            <Link
              className="wrapper"
              to="/"
              onClick={() => openInNewTab("https://github.com/abdsimon")}
            >
              Abdulwahed Diab
            </Link>
          </div>
          <div className="images">
            <img src="../imagess/simon.jpg" alt="" className="img" />
            <Link
              className="wrapper"
              to="/"
              onClick={() => openInNewTab("https://github.com/abdsimon")}
            >
              Abdulwahed Diab
            </Link>
          </div>
          <div className="images">
            <img src="../imagess/simon.jpg" alt="" className="img" />
            <Link
              className="wrapper"
              to="/"
              onClick={() => openInNewTab("https://github.com/abdsimon")}
            >
              Abdulwahed Diab
            </Link>
          </div>
          <div className="images">
            <img src="../imagess/simon.jpg" alt="" className="img" />
            <Link
              className="wrapper"
              to="/"
              onClick={() => openInNewTab("https://github.com/abdsimon")}
            >
              Abdulwahed Diab
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
