import React from "react";
import { ArrowIcon, CodeIcon } from "./Icons.jsx";

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={
        featured
          ? "project-card featured-project hover-card"
          : "project-card hover-card"
      }
    >
      <div className="project-topline">
        <p className="small-label">
          {project.kind} / {project.number}
        </p>
        {featured ? <ArrowIcon /> : <CodeIcon />}
      </div>

      <div className="project-main">
        <p className="project-label">{project.label}</p>
        <h3>{project.title}</h3>
        <p className="body-copy">{project.description}</p>
      </div>

      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a
        className="project-link"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        VIEW ON GITHUB <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default ProjectCard;
