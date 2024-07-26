// AboutInfo.jsx
import React from "react";
import TechStack from "./TechStack";
import GitHubGraph from "./GitHubGraph";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/bosnianparrot.gif";
import './AboutInfo.css'; // Import the CSS file

const AboutInfo = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1 className="about-title">
          <span className="about-title-highlight">ABOUT</span> Me 
        </h1>
        
        <p className="about-introduction">
          <span className="about-introduction-text">
            Hello Fellow Comrades, I am{" "}
            <span className="about-introduction-highlight">Mak Trnka</span>. As a Bosnian-American... if I can survive RAKIJA & CEVAPI, then I can survive CODING & PROGRAMMING.
          </span>
        </p>

        <div className="about-details">
          <div className="about-text">
            <p className="about-details-list">
              <ul>
                <li>
                  <p>MY BACKGROUND:</p>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>DATE & PLACE OF BIRTH:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}> April 12, 1998 (Richmond, VA, USA)</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>FAMILY PLACE OF BIRTH:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}> Bosnia & Herzegovina</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>ASTROLOGICAL SIGN:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}> Aries</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>HOME:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}> Seattle, WA, USA</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>EDUCATION:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}> Bellevue College (2016-19), University of Washington (2019-22), Code Fellows (2024)</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>DEGREE:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}> Associates (Sociology), Bachelors (Poli Sci & International Studies)</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>LANGUAGES:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}> English, Bosnian/Serbian/Croatian/Montenegrin</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>HOBBIES:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}> Talking (Movies, Basketball, (GEO)Politics, World Cultures, History, Personal Life, Society, Food, Animals, Pop Culture, News, etc.), Gym (Working Out, Playing Basketball), Traveling, Photography, Playing Video Games, Watching Movies, Creating Data Sets, PowerPoints, Collages, & Such, Comparing & Contrasting, Helping.</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>DREAMS:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}> Start a Podcast, Create a Business (I already have a Tech Business Plan laid out), Start a YouTube Channel, Become an Actor</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>POSITIVE TRAITS:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}> Goofy, Outgoing, Extroverted, Omniligent, Sympathetic, Caring, Energetic, Curious, Open-Minded, Creative, Unintentionally Funny, Dramatic, Generous, Hospitable.</span>
                </li>
                {/* Add other list items here */}
              </ul>
            </p>
          </div>
          <img
            className="about-image"
            src={codeImage}
            alt="Extra large avatar"
          />
        </div>
      </div>
      <div className="tech-stack-section">
        <TechStack />
      </div>
      <GitHubGraph />
    </div>
  );
};

export default AboutInfo;
