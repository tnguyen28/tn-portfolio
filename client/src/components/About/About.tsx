import React from "react";
import "./about.scss";

import profile from "../../assets/images/profileimg.jpeg";

const About = () => {
  return (
    <section className="about-container" aria-labelledby="about-title">
      <div className="box">
        <div className="text">
          <h2 className="section-title" id="about-title">
            About Me
          </h2>
          <p>
            I've been hooked on programming since 2012, when I took an
            Introduction to Computer Science course as a high school freshman.
            It changed how I approach problems, and I never looked back.
          </p>
          <p>
            In 2020 I earned a Bachelor of Science from{" "}
            <a
              className="text-link"
              href="https://www.luc.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Loyola University Chicago
            </a>
            , where I studied Software Engineering and Computer Forensics.
          </p>
          <p>
            Along the way I've built software at{" "}
            <a
              className="text-link"
              href="https://www.bosch.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              a global engineering company
            </a>{" "}
            and{" "}
            <a
              className="text-link"
              href="https://investorcashmanagement.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              a FinTech investing start-up
            </a>
            , and completed{" "}
            <a
              className="text-link"
              href="https://www.codingdojo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              a full-stack coding bootcamp
            </a>
            .
          </p>
          <p>
            I like owning my work end to end: building the feature, testing
            it, and seeing it through to release.
          </p>
        </div>
        <div className="image">
          <img src={profile} alt="Tyler Nguyen" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default About;
