import React from "react";

function SkillCard({ group }) {
  return (
    <article className="skill-card hover-card">
      <div className="skill-title">
        <span className="skill-symbol" aria-hidden="true">
          {group.symbol}
        </span>
        <h3>{group.title}</h3>
      </div>

      <ul className="skill-list">
        {group.skills.map((skill) => (
          <li className="skill-pill hover-card" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;
