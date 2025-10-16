"use client";
import React, { useRef } from "react";
import "./Styles/contact-form.css"; // import the plain CSS file
import emailjs from "@emailjs/browser";

export default function ContactForm({
  onSubmit,
  buttonText = "Leave us a message",
}) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // 👈 replace with your Service ID
        "YOUR_TEMPLATE_ID", // 👈 replace with your Template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // 👈 replace with your Public Key
      )
      .then(
        (result) => {
          console.log("✅ Email sent successfully!", result.text);
          alert("Your message has been sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("❌ Email send error:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <form
      ref={formRef}
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
