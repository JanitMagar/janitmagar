import React from "react";
import { PinIcon, ShieldIcon } from "./Icons.jsx";

function ExperienceCard({ experience }) {
  return (
    <article
      className={
        experience.community
          ? "experience-card community-card hover-card"
          : "experience-card hover-card"
      }
    >
      {experience.logo ? (
        <div
          className={
            experience.community
              ? "experience-logo community-logo"
              : "experience-logo void-logo"
          }
        >
          <img src={experience.logo} alt={experience.logoDescription} />
        </div>
      ) : (
        <div className="experience-logo fallback-logo">
          <ShieldIcon />
        </div>
      )}

      <div className="experience-copy">
        <div className="experience-topline">
          <div>
            <p className="small-label">{experience.number} / EXPERIENCE</p>
            <h3>{experience.title}</h3>
            <p className="experience-organization">{experience.organization}</p>
            {experience.role && (
              <p className="experience-role">{experience.role}</p>
            )}
          </div>

          {experience.community && (
            <span className="community-badge">COMMUNITY</span>
          )}
        </div>

        <p className="body-copy">{experience.description}</p>

        {experience.location && (
          <p className="location-line">
            <PinIcon />
            <span>{experience.location}</span>
          </p>
        )}
      </div>
    </article>
  );
}

export default ExperienceCard;
