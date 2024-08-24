import React from "react";
import TypeAnimation from "./TypeAnimation";
import HomeBottomPage from "./HomeBottomPage";
import Clock from "../../Clock"; // Ensure the path is correct
// import ThreeDObject from "./ThreeDObject"; // Import the new component

const HomePage = () => {
  return (
    <div className="home" style={{ position: 'relative', zIndex: 1 }}>
      <Clock /> {/* Add the Clock component here */}
      {/* <ThreeDObject /> Add the 3D object component here */}
      <div className="home-parent">
        <div className="home-content">
          <div className="heading-text">
            <h1
              style={{
                fontFamily: "Fira Code",
                fontSize: "3rem",
                position: "relative",
                zIndex: 2,
              }}
            >
              <span style={{ textShadow: "0 0 10px black"}}>Greetings, it's</span>
            </h1>
            <h1
              style={{
                color: "white",
                fontFamily: "Fira Code",
                fontSize: "4rem",
                position: "relative",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  color: "black",
                  fontFamily: "monospace",
                  position: "relative",
                  fontSize: "7rem",
                  textShadow: "0 0 10px white",
                  animation: "pulse 2s infinite",
                  zIndex: 2,
                }}
              >
                MAK TRNKA
              </span>
            </h1>
          </div>
          <div className="text-animation">
            <TypeAnimation />
          </div>
        </div>
      </div>
      <HomeBottomPage />
    </div>
  );
};

export default HomePage;
