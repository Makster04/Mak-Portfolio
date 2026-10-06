import React, { useState } from "react";
import { BsBarChartLine, BsFileEarmarkPdf, BsGithub, BsJournalCode } from "react-icons/bs";
import projectData from "./ProjectData2";
import "./Project2.css";

const linkIcons = {
  presentation: BsFileEarmarkPdf,
  notebook: BsJournalCode,
  github: BsGithub,
  dashboard: BsBarChartLine,
};

const ProjectCard = ({ project }) => {
  const [active, setActive] = useState(0);
  const image = project.images[active];

  return (
    <article className="ds-card">
      <div className="ds-media">
        <a className="ds-stage" href={image.src} target="_blank" rel="noopener noreferrer" title="Open full-size image">
          <img src={image.src} alt={image.alt} />
        </a>
        {project.images.length > 1 && (
          <div className="ds-thumbs" role="group" aria-label={`${project.title} visuals`}>
            {project.images.map((thumb, index) => (
              <button
                type="button"
                key={thumb.src}
                className={`ds-thumb${index === active ? " ds-thumb-active" : ""}`}
                aria-label={thumb.alt}
                aria-pressed={index === active}
                onClick={() => setActive(index)}
              >
                <img src={thumb.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="ds-body">
        <header className="ds-card-header">
          <span className="ds-badge">{project.badge}</span>
          {project.period && <span className="ds-period">{project.period}</span>}
        </header>
        <div className="ds-content">
          <h2>{project.title}</h2>
          <p className="ds-about">{project.about}</p>
          {project.metrics.length > 0 && (
            <dl className="ds-metrics">
              {project.metrics.map((metric) => (
                <div className="ds-metric" key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <ul className="ds-highlights">
            {project.highlights.map((highlight) => {
              const [label, ...rest] = highlight.split(": ");
              return (
                <li key={highlight}>
                  <strong>{label}:</strong> {rest.join(": ")}
                </li>
              );
            })}
          </ul>
          <p className="ds-role">
            <strong>My role:</strong> {project.role}
          </p>
          <ul className="ds-tools">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <div className="ds-links">
            {project.links.map((link) => {
              const Icon = linkIcons[link.type];
              return (
                <a key={link.href} className="ds-link" href={link.href} target="_blank" rel="noopener noreferrer">
                  <Icon aria-hidden="true" /> {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

const Project2 = () => {
  return (
    <div className="ds">
      <h1 className="ds-title">
        <span className="ds-title-main">My Data Science</span> <span className="ds-title-highlight">PROJECTS</span>
      </h1>
      <p className="ds-description">
        These are projects I did in my Data Science Bootcamp, Flatiron, and also alone. Each one links to its presentation, notebook, or live dashboard.
      </p>
      <div className="ds-cards">
        {projectData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project2;
