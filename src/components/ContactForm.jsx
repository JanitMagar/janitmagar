import React, { useState } from "react";

const GMAIL_ADDRESS = "janitmagar2007@gmail.com";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  function updateField(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: fieldValue,
    }));
  }

  function sendMessage(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${formValues.name}`,
    );
    const messageBody = encodeURIComponent(
      `Name: ${formValues.name}\nEmail: ${formValues.email}\n\n${formValues.message}`,
    );

    // Opens Gmail directly on a new compose window with "To" already filled in
    const gmailComposeUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(GMAIL_ADDRESS)}` +
      `&su=${subject}` +
      `&body=${messageBody}`;

    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-window-body contact-message-form" onSubmit={sendMessage}>
      <label htmlFor="message-name">Name</label>
      <input
        id="message-name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Your name"
        value={formValues.name}
        onChange={updateField}
        required
      />

      <label htmlFor="message-email">Email</label>
      <input
        id="message-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Your email address"
        value={formValues.email}
        onChange={updateField}
        required
      />

      <label htmlFor="message-text">Message</label>
      <textarea
        id="message-text"
        name="message"
        placeholder="Write your message..."
        value={formValues.message}
        onChange={updateField}
        required
      />

      <button className="contact-submit hover-card" type="submit">
        Send message <span aria-hidden="true">→</span>
      </button>
      <p className="contact-form-note" id="contact-form-note">
        OPENS GMAIL · NO DATA STORED
      </p>
    </form>
  );
}

export default ContactForm;
