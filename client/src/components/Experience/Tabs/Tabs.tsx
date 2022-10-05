import React, { useState } from "react";
import "./tabs.scss";
import { experienceData } from "./constants";
import { ExperienceData } from "./types";

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
          className={activeTab === id ? "active" : "not-active"}
          onClick={() => handleTab(id)}
        >
          {companyName}
        </li>
      );
    });
  };

  const renderTabContent = (data: ExperienceData[]) => {
    return data.map((company: ExperienceData) => {
      const { companyName, title, dateRange, description } = company;
      const id: string = `${companyName}_${title}`;
      return (
        <>
          {activeTab === id ? (
            <div id={id}>
              <p>
                {title} @ {companyName}
              </p>
              <p>{dateRange}</p>
              <p>{description}</p>
            </div>
          ) : null}
        </>
      );
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
