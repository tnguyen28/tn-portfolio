import React, { useState } from "react";
import "./contact.scss";
import ContactForm from "./ContactForm/ContactForm";

import Github from "../../assets/icons/social-media/github.svg";
import Linkedin from "../../assets/icons/social-media/linkedin.svg";
import Location from "../../assets/icons/social-media/location.svg";
import Phone from "../../assets/icons/social-media/phone.svg";
import Email from "../../assets/icons/social-media/email.svg";

const Contact = () => {
  const [showPanel, setShowPanel] = useState(true);

  const downloadResume = () => {
    fetch("resume.pdf").then((response: any) => {
      response.blob().then((blob: any) => {
        const fileUrl = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileUrl;
        alink.download = "tylernguyen-resume.pdf";
        alink.click();

      });
    });
  };

  return (
    <div>
      {!showPanel ? (
        <div className="button" onClick={() => setShowPanel(true)}>
          <div className="icon"></div>
          <div className="text">let's connect!</div>
        </div>
      ) : (
        <>
          <div className="panel">
            <div className="close" onClick={() => setShowPanel(false)}>
              close
            </div>
            <div className="content">
              <h2>Let's Connect.</h2>
              <div>
                <div className="link">
                  <Location />
                  <div>Chicago, Illinois</div>
                </div>
                <div className="link">
                  <Phone />
                  <div>(630) 414-9085</div>
                </div>
                <a href="mailto:tntt_tyler@me.com" target="_blank">
                  <div className="link">
                    <Email />
                    <div>tntt_tyler@me.com</div>
                  </div>
                </a>
                <a href="https://github.com/tnguyen28" target="_blank">
                  <div className="link">
                    <Github />
                    <div>/tnguyen28</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/tylernguyen341/"
                  target="_blank"
                >
                  <div className="link">
                    <Linkedin />
                    <div>/tylernguyen341</div>
                  </div>
                </a>
              </div>
              <div className="resume">
                <div onClick={downloadResume}>download my resume</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
