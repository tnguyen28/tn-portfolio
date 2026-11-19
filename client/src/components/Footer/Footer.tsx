import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">© {new Date().getFullYear()} Tyler Nguyen</footer>
  );
};

export default Footer;
