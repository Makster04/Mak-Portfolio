import React, { useEffect, useState } from "react";
import SingleProjectCard from "./SingleProjectCard";
import projectData from "./ProjectData";
import { Card } from "semantic-ui-react";
const Project = () => {
  const [width,setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  },[width]);


  
  return (
    <div className="projects">
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
          color: "white"
        }}
      >
       <span style={{position: 'relative', zIndex: 2, textShadow: "0 0 5px black"}}>My Recent</span> <span style={{color: "yellow", position: 'relative', zIndex: 2, textShadow: "0 0 10px white", animation: "pulse 2s infinite"}}>PROJECTS</span>
      </h1>
      <p><span style={{ position: 'relative', zIndex: 2 }}>These are Group Projects I worked on in my Software Bootcamp, Code Fellows, both as a Backend and Frontend Engineer (NOTE: Deployments are still in the works for a few)</span></p>
      <div className="project-cards">
        <Card.Group itemsPerRow={width > 786 ? 3 : 1}>
          {projectData.map((data, index) => {
            return <SingleProjectCard
              className="card"
              key={index}
              projectDetails={data}
            />;
          })}
        </Card.Group>
      </div>
    </div>
  );
};

export default Project;

