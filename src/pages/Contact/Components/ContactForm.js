"use client";
import React from "react";
import "./Styles/contact-form.css"; // import the plain CSS file

export default function ContactForm({
  onSubmit,
  buttonText = "Leave us a message",
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log("[Contact Form Submitted]", data);
    }
    e.currentTarget.reset();
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="name">
            Your Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder=""
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="phone">
            Phone Number (optional)
          </label>
          <input className="form-input" type="tel" id="phone" name="phone" />
        </div>
      </div>

      <div className="form-message-block full-width">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-input form-textarea"
          id="message"
          name="message"
          placeholder="Write your message here..."
          rows={4}
          required
        />
      </div>

      <button className="form-cta" type="submit" aria-label="Submit form">
        <span>{buttonText}</span>
        <span className="form-arrow" aria-hidden>
          ›
        </span>
      </button>
    </form>
  );
}
