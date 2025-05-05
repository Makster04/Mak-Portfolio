import React, { useEffect, useState } from "react";
import ProjectData2 from "./ProjectData2";
import SingleProjectCard2 from "./SingleProjectCard2";
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
      <div className="projects-header2">
        <h1 className="projects-title2">
          <span className="title-main">My Recent</span>{" "}
          <span className="title-highlight">DATA SCIENCE PROJECTS</span>
        </h1>
        <p className="projects-description">
          These are projects I developed independently during my Data Science Bootcamp at Flatiron, 
          focusing on data engineering, machine learning, and interpretable modeling.
        </p>
      </div>
      
      <div className="project-cards-grid2">
        {ProjectData2.map((project, index) => (
          <SingleProjectCard2 key={index} projectDetails={project} />
        ))}
      </div>
    </div>
  );
};

export default Project2;