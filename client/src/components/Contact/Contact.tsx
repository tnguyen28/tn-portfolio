import React, { useState } from "react";
import "./contact.scss";

import Github from "../../assets/icons/social-media/github.svg";
import Linkedin from "../../assets/icons/social-media/linkedin.svg";
import resume from "../../assets/documents/resume.pdf";

import Avatar from "../../assets/icons/avatar.svg";

import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div>
      {!showPanel ? (
        <div className="button" onClick={() => setShowPanel(true)}>
          <div className="icon">
            <Avatar />
          </div>
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
                  <SocialIcon bgColor="white" fgColor="black" />
                  <div>Chicago, Illinois</div>
                </div>
                <div className="link">
                  <SocialIcon
                    network="whatsapp"
                    bgColor="white"
                    fgColor="black"
                  />
                  <div>(630) 414-9085</div>
                </div>
                <a href="mailto:tntt_tyler@me.com" target="_blank" rel="noopener noreferrer">
                  <div className="link">
                    <SocialIcon
                      network="email"
                      bgColor="white"
                      fgColor="black"
                    />
                    <div>tntt_tyler@me.com</div>
                  </div>
                </a>
                <a href="https://github.com/tnguyen28" target="_blank" rel="noopener noreferrer">
                  <div className="link">
                    <Github />
                    <div>/tnguyen28</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/tylernguyen341/"
                  target="_blank" rel="noopener noreferrer"
                >
                  <div className="link">
                    <Linkedin />
                    <div>/tylernguyen341</div>
                  </div>
                </a>
              </div>
              <div className="resume">
                <a href={resume} download="tylernguyen-resume.pdf">
                  download my resume
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
