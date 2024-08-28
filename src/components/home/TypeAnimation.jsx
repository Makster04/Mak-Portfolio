import { index } from "d3";
import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Serial Creator",
          "Software Enthusiast",
          "Data Enthusiast",
          "Presentation Enthusiast",
          "History Buff",
          "Cinephile",
          "News Buff",
          "(Geo)Political Buff",
          "Societal Geek",
          "Pop Culture Buff",
          "World Travler",
          "Photographer",
          "Balkan Boy",
          "Bosnian"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
        delay: 60, // Adds delay between each character
        pauseFor: 1500, // Pauses for 2 seconds after each string
        cursor: "|", // Custom cursor
        cursorStyle: "|", // Custom cursor style
        cursorSpeed: 1000, // Speed of cursor blinking
        wrapperClassName: "type-animation-wrapper", // Custom wrapper class
        cursorClassName: "type-animation-cursor", // Custom cursor class
        onComplete: () => console.log("Animation completed"), // Callback function on animation completion
      }}
    />
  );
};

export default TypeAnimation;