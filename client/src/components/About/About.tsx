import React from "react";
import "./about.scss";

import profile from "../../assets/images/profileimg.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="box">
        <div className="text">
          <div className="title">
            <h2>About Me</h2>
          </div>
          <p>
            Hello! My name is Tyler and I enjoy developing code. My interest in
            programming first began back in 2012 when I decided to take an
            Introduction Computer Science course as a Freshman in high school.
            From there, I started to look at the world in a more logical way and
            knew I could not turn back.
          </p>
          <p>
            Fast-forward to 2020 and I've attended{" "}
            <a href="https://www.luc.edu/" target="_blank">
              Loyola University Chicago
            </a>{" "}
            to earn a Bachelor of Science degree. There I studied Software
            Engineering and Computer Forensics.
          </p>
          <p>
            Up until today, I've had the honor and privilege of working at{" "}
            <a href="https://www.bosch.com/" target="_blank">
              a global engineering company
            </a>
            ,{" "}
            <a href="https://investorcashmanagement.com/" target="_blank">
              a FinTech investing start-up
            </a>
            , and graduating from{" "}
            <a href="https://www.codingdojo.com/" target="_blank">
              a full-stack coding bootcamp
            </a>
            .
          </p>
        </div>
        <div className="image">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
