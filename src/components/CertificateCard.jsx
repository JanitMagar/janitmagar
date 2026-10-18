import React from "react";
import { CheckIcon } from "./Icons.jsx";

function CertificateCard({ certificate }) {
  return (
    <article className="certificate-card hover-card">
      <div className="certificate-topline">
        <p className="small-label">CERTIFICATE / {certificate.number}</p>
        <span className="certificate-icon">
          <CheckIcon />
        </span>
      </div>
      <img
        className="certificate-image"
        src={certificate.image}
        alt={certificate.imageDescription}
      />
      <h3>{certificate.title}</h3>
      <p className="body-copy">{certificate.description}</p>
    </article>
  );
}

export default CertificateCard;
