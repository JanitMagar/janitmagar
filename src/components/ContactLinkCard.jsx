import React from "react";

function ContactLinkCard({ link }) {
  return (
    <a
      className="contact-link-card hover-card"
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
    >
      <span className="contact-link-icon" aria-hidden="true">
        {link.symbol}
      </span>
      <span className="contact-link-copy">
        <span className="contact-link-label">{link.name}</span>
        <span className="contact-link-value">{link.value}</span>
      </span>
      <span className="contact-link-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default ContactLinkCard;
