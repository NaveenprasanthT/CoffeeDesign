import React from "react";
import "./styles/AvatarCircle.css";

export default function AvatarCircle({ src, name, role, alt }) {
  return (
    <figure className="tt-avatar">
      <img
        className="tt-avatar-img"
        src={src || "/placeholder.svg"}
        alt={alt || `${name} - ${role}`}
        loading="lazy"
      />
      <figcaption className="tt-avatar-caption">
        <span className="tt-avatar-name">{name}</span>
        <span className="tt-avatar-role">{role}</span>
      </figcaption>
    </figure>
  );
}
