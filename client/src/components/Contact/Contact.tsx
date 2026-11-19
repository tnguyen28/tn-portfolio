import React, { useRef } from "react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  // A native modal <dialog> traps focus, hides the page from screen
  // readers, closes on Escape and returns focus to the trigger.
  const open = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();
  const onClose = () => {
    document.body.style.overflow = "";
  };

  return (
    <>
      <button
        type="button"
        className="contact-trigger"
        aria-haspopup="dialog"
        onClick={open}
      >
        <span className="icon" aria-hidden="true">
          <Avatar />
        </span>
        <span className="text">Let's connect!</span>
      </button>

      <dialog
        ref={dialogRef}
        className="panel"
        aria-labelledby="contact-title"
        onClose={onClose}
        // Clicks on the dialog element itself land on the backdrop.
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="panel-body">
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={close}
          >
            ×
          </button>
          <div className="content">
            <h2 id="contact-title">Let's connect.</h2>
            <ul className="links">
              {links.map(({ icon: LinkIcon, label, href, external }) => {
                const row = (
                  <>
                    <span className="link-icon" aria-hidden="true">
                      <LinkIcon focusable="false" />
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
            <a
              className="resume"
              href={resume}
              download="tylernguyen-resume.pdf"
            >
              Download my resume
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Contact;
