import React, { useState, useEffect } from "react";
import Timeline from "./Timeline";
import GlobeComponent from "./GlobeComponent";
import KeyBoard from "./KeyBoard"; // Import the KeyBoard component
import travelData from "./TravelData";
import './Timeline.css'; // Ensure you import the styles

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
      <div className="background-image">
        <h1
          style={{
            marginTop: "2rem",
            fontFamily: "Fira Code",
            fontSize: "2.5rem",
            color: "white",
            position: "relative",
            zIndex: 1,
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
      
      <div className="content-container" style={{ marginTop: "-4rem", display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10rem' }}>
        <div className="globe-container" style={{ flex: 1, maxWidth: '45%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <GlobeComponent width={width} />
        </div>
        <div className="key-board-container" style={{ marginTop: "-4rem", flex: 1, maxWidth: '45%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <KeyBoard />
        </div>
      </div>

      <h2
        style={{
          marginTop: "2rem",
          fontFamily: "Fira Code",
          fontSize: "2.5rem",
          color: "white",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
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

      {/* Render the Timeline component with travelData */}
      <Timeline data={travelData} />
    </div>
  );
};

export default Travel;
