import React, { useState } from "react";
import "./tabs.scss";
import { experienceData } from "./constants";
import { ExperienceData, TechItem } from "./types";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(
    `${experienceData[0].companyName}_${experienceData[0].title}`
  );

  const handleTab = (id: string) => {
    setActiveTab(id);
  };

  const renderTabs = (data: ExperienceData[]) => {
    return data.map((company: ExperienceData) => {
      const { companyName, title } = company;
      const id: string = `${companyName}_${title}`;
      return (
        <li
          key={id}
          className={activeTab === id ? "active" : "not-active"}
          onClick={() => handleTab(id)}
        >
          <p>{companyName}</p>
        </li>
      );
    });
  };

  const renderTabContent = (data: ExperienceData[]) => {
    return data.map((company: ExperienceData) => {
      const { companyName, title, dateRange, description, tech } = company;
      const id: string = `${companyName}_${title}`;
      return activeTab === id ? (
        <div id={id} key={id}>
          <div className="tab-item-title">
            <p>{title}</p>
            <p>{companyName}</p>
          </div>
          <div className="tab-item-date">
            <p>{dateRange}</p>
          </div>
          <div className="tab-item-description">
            <ul>
              {description.map((desc) => {
                return <li key={desc}>{desc}</li>;
              })}
            </ul>
          </div>
          <div className="tab-item-techstack">
            <strong>Tech Stack</strong>
            <ul>
              {tech.map((item: TechItem) => (
                <li key={item.name}>
                  <div className='tech-item'>
                    <div className='tech-img'></div>
                    <p>{item.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null;
    });
  };

  return (
    <div className="tabs-container">
      <div className="menu">
        <ul>{renderTabs(experienceData)}</ul>
      </div>
      <div className="tab-content">{renderTabContent(experienceData)}</div>
    </div>
  );
};

export default Tabs;
