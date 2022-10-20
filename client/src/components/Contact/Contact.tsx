import React, { useState } from "react";
import "./contact.scss";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="contact">
      <h2>Let's Connect</h2>
      <button onClick={() => setShowForm(!showForm)}>Say Hello</button>
      {showForm && <ContactForm />}
    </div>
  );
};

export default Contact;
