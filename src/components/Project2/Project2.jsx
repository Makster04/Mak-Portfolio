import React, { useEffect, useState } from "react";
import projectData from "./ProjectData2";
import "./Project2.css";

const Project2 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="projects">
      <h1 className="projects-title">
        <span className="title-main">My Recent</span> <span className="title-highlight">PROJECTS</span>
      </h1>
      <p className="projects-description">
        These are projects I did in my Data Science Bootcamp, Flatiron, and also alone
      </p>
      <div className="project-cards">
        {projectData.map((data, index) => (
          <div className="project-card" key={index}>
            <div className="card-meta">
              <div className="card-photo" style={{ backgroundImage: `url(${data.image})` }}></div>
              <ul className="card-details">
                <li className="role"><strong>ROLE:</strong> {data.role}</li>
                <li className="languages"><strong>LANGUAGES:</strong> {data.languages}</li>
              </ul>
            </div>
            <div className="card-description">
              <h1>{data.title}</h1>
              <p>{data.about}</p>
              <p className="read-more">
                <a href={data.projectLink} target="_blank" rel="noopener noreferrer">Link</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Project2;