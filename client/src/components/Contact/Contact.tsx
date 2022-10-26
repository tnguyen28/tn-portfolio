import React, { useState } from "react";
import "./contact.scss";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="contact">
      <a href="mailto:tntt_tyler@me.com">
        <button onClick={() => {}}>
          <h2>Let's Connect</h2>
        </button>
      </a>

      {/* {showForm && <ContactForm />} */}
    </div>
  );
};

export default Contact;
