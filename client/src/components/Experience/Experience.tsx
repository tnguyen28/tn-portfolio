import React from "react";
import "./experience.scss";
import Tabs from "./Tabs/Tabs";

const Experience = () => {
  return (
    <section className="experience-container" aria-labelledby="experience-title">
      <div className="inner">
        <h2 className="section-title" id="experience-title">
          Experience
        </h2>
        <Tabs />
      </div>
    </section>
  );
};

export default Experience;
