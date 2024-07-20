import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import SingleTravelCard from "./SingleTravelCard";
import GlobeComponent from "./GlobeComponent"; // Import the GlobeComponent
import AccordionComponent from "./AccordionComponent"; // Import the new AccordionComponent
import travelData from "./TravelData";
import "./Travel.css"; // Assuming you have defined styles for .travels

const Travel = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="travels">
      <div className="background-image"> {/* or use className="background-color" */}
        {/* Content inside the background */}
        <h1
          style={{
            marginTop: "2rem", // Adjusted marginTop to move title up
            fontFamily: "Fira Code",
            fontSize: "2.5rem", // Adjust font size
            color: "white",
            position: "relative", // Ensure content is above background
            zIndex: 1, // Ensure content is above background
          }}
        >
          <span style={{ position: "relative", zIndex: 2, textShadow: "0 0 5px black" }}>My Recent</span>{" "}
          <span style={{ fontWeight: 'bold', color: "yellow", position: "relative", zIndex: 2, textShadow: "0 0 10px white", animation: "pulse 2s infinite" }}>
            TRIPS
          </span>
        </h1>
        <p>
          <span style={{ position: "relative", zIndex: 2, textShadow: "0 0 5px black" }}>
            A Globe with the Pin Points of every destination I went to around the world! 
          </span>
        </p>
      </div>
      
      <div className="content-container" style={{ marginTop: "-7rem" }}> {/* Adjusted marginTop for content-container */}
        <div className="globe-container">
          <GlobeComponent width={width} />
        </div>
        {/* <div className="accordion-container">
          <AccordionComponent />
        </div> */}
      </div>

      <h2
        style={{
          marginTop: "2rem",
          fontFamily: "Fira Code",
          fontSize: "2.5rem", // Match the font size
          color: "white",
          position: "relative",
          zIndex: 1,
          textAlign: "center", // Center the title
        }}
      >
        <span style={{ position: "relative", zIndex: 2, textShadow: "0 0 5px black" }}>My</span>{" "}
        <span style={{ fontWeight: 'bold', color: "orange", position: "relative", zIndex: 2, textShadow: "0 0 10px white", animation: "pulse 2s infinite" }}>
          PHOTO ALBUMS
        </span>
      </h2>
      
      <p style={{ textAlign: "center", color: "white", textShadow: "0 0 5px black" }}>
        <span style={{ position: "relative", zIndex: 2 }}>
          Explore the Photos I took across my Journey around certain places on the globe I visited!
        </span>
      </p>

      <div className="travel-cards-container">
        <Card.Group itemsPerRow={width > 786 ? 3 : 1}>
          {travelData.map((spot, index) => (
            <SingleTravelCard className="card" key={index} spot={spot} />
          ))}
        </Card.Group>
      </div>
    </div>
  );
};

export default Travel;
