import React, { useEffect, useState } from "react";
import "./contact.scss";

import Github from "../../assets/icons/social-media/github.svg";
import Linkedin from "../../assets/icons/social-media/linkedin.svg";
import Email from "../../assets/icons/social-media/email.svg";
import Phone from "../../assets/icons/social-media/phone.svg";
import Location from "../../assets/icons/social-media/location.svg";
import Avatar from "../../assets/icons/avatar.svg";
import resume from "../../assets/documents/resume.pdf";

interface ContactLink {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  href?: string;
  external?: boolean;
}

const links: ContactLink[] = [
  { icon: Location, label: "Chicago, Illinois" },
  { icon: Phone, label: "(630) 414-9085", href: "tel:+16304149085" },
  { icon: Email, label: "tntt_tyler@me.com", href: "mailto:tntt_tyler@me.com" },
  {
    icon: Github,
    label: "/tnguyen28",
    href: "https://github.com/tnguyen28",
    external: true,
  },
  {
    icon: Linkedin,
    label: "/tylernguyen341",
    href: "https://www.linkedin.com/in/tylernguyen341/",
    external: true,
  },
];

const Contact = () => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    if (!showPanel) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShowPanel(false);
    document.addEventListener("keydown", onKey);
    // Keep the page behind the panel from scrolling on phones.
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [showPanel]);

  if (!showPanel) {
    return (
      <button
        type="button"
        className="contact-trigger"
        onClick={() => setShowPanel(true)}
      >
        <span className="icon" aria-hidden="true">
          <Avatar />
        </span>
        <span className="text">let's connect!</span>
      </button>
    );
  }

  return (
    <>
      <div className="contact-backdrop" onClick={() => setShowPanel(false)} />
      <aside className="panel" role="dialog" aria-modal="true" aria-label="Contact">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => setShowPanel(false)}
          autoFocus
        >
          ×
        </button>
        <div className="content">
          <h2>Let's Connect.</h2>
          <ul className="links">
            {links.map(({ icon: LinkIcon, label, href, external }) => {
              const row = (
                <>
                  <span className="link-icon" aria-hidden="true">
                    <LinkIcon />
                  </span>
                  <span className="link-label">{label}</span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      className="link"
                      href={href}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {row}
                    </a>
                  ) : (
                    <div className="link">{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <a className="resume" href={resume} download="tylernguyen-resume.pdf">
            download my resume
          </a>
        </div>
      </aside>
    </>
  );
};

export default Contact;
