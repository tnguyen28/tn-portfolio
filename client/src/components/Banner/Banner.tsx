import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <header className="banner-container">
      <div className="box">
        <p className="introduction">Hi, my name is</p>
        <h1 className="name">Tyler Nguyen,</h1>
        <p className="sub-title">Web/Mobile Developer</p>
        <p className="description">
          I enjoy developing full stack applications and specialize in
          React/React Native. Currently, I'm focused on building accessible
          FinTech products at{" "}
          <a
            className="text-link"
            href="https://investorcashmanagement.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Investor Cash Management
          </a>
          .
        </p>
      </div>
    </header>
  );
};

export default Banner;
