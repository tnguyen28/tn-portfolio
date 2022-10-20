import React from "react";
import "./contact.scss";

import { Form, Field } from "react-final-form";

const required = (value: string) => (value ? undefined : "Required");

interface ContactFieldTypes {
  name: string;
  validate?: (value: string) => string | undefined;
  type?: string;
  placeholder?: string;
}

const ContactField = ({
  name,
  validate,
  type = "text",
  placeholder,
}: ContactFieldTypes) => {
  return (
    <div>
      <Field name={name} validate={validate}>
        {({ input, meta }) => (
          <div>
            <input {...input} type={type} placeholder={placeholder} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    </div>
  );
};

interface PersonalItemProps {
  text: string;
}
const PersonalItem = ({ text }: PersonalItemProps) => {
  return (
    <div className="personal-item">
      <div className="icon">icon</div>
      <span>{text}</span>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="form">
        <Form
          onSubmit={() => {}}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <ContactField
                name="name"
                validate={required}
                placeholder="NAME"
              />
              <ContactField
                name="email"
                validate={required}
                placeholder="EMAIL"
              />
              <div>
                <Field name="message">
                  {({ input, meta, textarea }) => (
                    <div>
                      <textarea {...input} rows={10} placeholder="MESSAGE" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          )}
        />
      </div>
      <div className="info">
        <div className="personal">
          <PersonalItem text="Chicago,Illinois" />
          <PersonalItem text="(630) 414-9085" />
          <PersonalItem text="tntt_tyler@me.com" />
        </div>
        <div className="links">
          <a href="https://github.com/tnguyen28/" target="_blank">
            github
          </a>
          <a href="https://www.linkedin.com/in/tylernguyen341/" target="_blank">
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
