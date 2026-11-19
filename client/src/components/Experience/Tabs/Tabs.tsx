import React, { useState } from "react";
import "./tabs.scss";

import { experienceData } from "./constants";
import { ExperienceData, TechItem } from "./types";

import Icon from "../../../util/iconPicker";

const idFor = ({ companyName, title }: ExperienceData) =>
  `${companyName}_${title}`.replace(/[^a-zA-Z0-9]+/g, "-");

// "Summer 2019 - May 2020" -> "2019 – 2020"; "Spring 2021 - Present" -> "2021 – Present"
const shortDate = (dateRange: string) => {
  const parts = dateRange.match(/\d{4}|Present/g) ?? [];
  const unique = parts.filter((p, i) => parts.indexOf(p) === i);
  return unique.join(" – ");
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(idFor(experienceData[0]));

  const active = experienceData.find((job) => idFor(job) === activeTab);

  return (
    <div className="tabs-container">
      <div className="menu" role="tablist" aria-label="Experience">
        {experienceData.map((job) => {
          const id = idFor(job);
          const selected = id === activeTab;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={selected}
              aria-controls="experience-panel"
              className={selected ? "tab active" : "tab"}
              onClick={() => setActiveTab(id)}
            >
              <span className="tab-company">{job.companyName}</span>
              <span className="tab-date">{shortDate(job.dateRange)}</span>
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="tab-content"
          id="experience-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
        >
          <div className="tab-item-title">
            <h3>{active.title}</h3>
            <p>{active.companyName}</p>
          </div>
          <p className="tab-item-date">{active.dateRange}</p>
          <ul className="tab-item-description">
            {active.description.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
          <div className="tab-item-techstack">
            <strong>Tech Stack</strong>
            <ul>
              {active.tech.map((item: TechItem) => (
                <li key={item.name} className="tech-item">
                  <div className="tech-img">
                    <Icon name={item.icon} />
                  </div>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
