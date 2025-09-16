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
    <div className="projects2">
      <h1 className="projects-title2">
        <span className="title-main2">My Recent</span> <span className="title-highlight">PROJECTS</span>
      </h1>
      <p className="projects-description2">
        These are projects I did in my Data Science Bootcamp, Flatiron, and also alone
      </p>
      <div className="project-cards2">
        {projectData.map((data, index) => (
          <div className="project-card2" key={index}>
            <div className="card-meta2">
              <div className="card-photo2" style={{ backgroundImage: `url(${data.image})` }}></div>
              <ul className="card-details2">
                <li className="role2"><strong>ROLE:</strong> {data.role}</li>
                <li className="languages2"><strong>LANGUAGES:</strong> {data.languages}</li>
              </ul>
            </div>
            <div className="card-description2">
              <h1>{data.title}</h1>
              <p>{data.about}</p>
              <p className="read-more2">
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