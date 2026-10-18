import React from "react";

function EducationCard({ item }) {
  return (
    <article className="education-card hover-card">
      <div>
        <div className="education-title">
          {item.current && <span className="current-mark">✓</span>}
          <h3>{item.school}</h3>
        </div>
        <p className="education-qualification">{item.qualification}</p>
        <p className="education-location">{item.location}</p>
      </div>

      {item.current && <span className="current-badge">CURRENT</span>}
    </article>
  );
}

export default EducationCard;
