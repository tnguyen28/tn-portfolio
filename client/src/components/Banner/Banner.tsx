import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="container">
      <div className="box">
        <p className="introduction">Hi, my name is</p>
        <h1 className="name">Tyler Nguyen</h1>
        <h1 className="sub-title">Web/Mobile Developer</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Banner;
