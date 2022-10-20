import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="box">
        <div className="introduction">Hi, my name is</div>
        <div className="name">Tyler Nguyen,</div>
        <div className="sub-title">Web/Mobile Developer</div>
        <div className="description">
          I enjoy developing full stack applications and specialize in
          React/React Native. Currently, I'm focused on building accessible
          products at{" "}
          <a href="https://investorcashmanagement.com/" target="_blank">
            <strong>Investor Cash Management</strong>
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Banner;
