import React from "react";
import "./styles/Testimonials.css";
import { ReactComponent as QuoteMark } from "../../assets/red-quote-mark-icon.svg";

export default function TestimonialCard({ quote, author, location }) {
  return (
    <article className="tt-quote-card" aria-label={`Testimonial by ${author}`}>
      <div className="tt-quote-icon" aria-hidden="true">
        {/* red quote mark */}
        <QuoteMark />
      </div>
      <blockquote className="tt-quote-text">“{quote}”</blockquote>
      <footer className="tt-quote-footer">
        <span className="tt-quote-author">{author}</span>
      </footer>
    </article>
  );
}
