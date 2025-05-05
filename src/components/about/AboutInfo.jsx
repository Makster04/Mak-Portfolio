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
          <span className="about-title-highlight">DISCOVER</span> MY WORLD
        </h1>
        
        <p className="about-introduction">
          <span className="about-introduction-text">
            Zdravo World! I'm{" "}
            <span className="about-introduction-highlight">Mak Trnka</span> — Bosnian heritage, American roots, and coding in my DNA. If I can handle <span className="about-accent">RAKIJA & ĆEVAPI</span>, I can conquer <span className="about-accent">ANY CODE CHALLENGE</span>.
          </span>
        </p>

        <div className="about-details">
          <div className="about-text">
            <div className="about-details-list">
              <h3 className="life-story-header">MY ORIGIN STORY</h3>
              <ul className="vibrant-list">
                <li className="list-item">
                  <BsFillArrowRightSquareFill className="arrow-icon" />{" "}
                  <span className="item-label">BORN:</span> 
                  <span className="item-value">April 12, 1998 | Richmond, VA</span>
                </li>
                <li className="list-item">
                  <BsFillArrowRightSquareFill className="arrow-icon" />{" "}
                  <span className="item-label">HERITAGE:</span> 
                  <span className="item-value">Bosnia & Herzegovina</span>
                </li>
                <li className="list-item">
                  <BsFillArrowRightSquareFill className="arrow-icon" />{" "}
                  <span className="item-label">ASTROLOGICAL SIGN:</span> 
                  <span className="item-value">Aries ♈</span>
                </li>
                <li className="list-item">
                  <BsFillArrowRightSquareFill className="arrow-icon" />{" "}
                  <span className="item-label">LOCATION:</span> 
                  <span className="item-value">Seattle, WA (1998-2024) → NYC (2024-Present)</span>
                </li>
                <li className="list-item">
                  <BsFillArrowRightSquareFill className="arrow-icon" />{" "}
                  <span className="item-label">EDUCATION:</span> 
                  <span className="item-value">Bellevue College (2016-19) → University of Washington (2019-22) → Code Fellows (2024) →  Flatiron (2025)</span>
                </li>
                <li className="list-item">
                  <BsFillArrowRightSquareFill className="arrow-icon" />{" "}
                  <span className="item-label">CREDENTIALS:</span> 
                  <span className="item-value">Associates (Sociology) → Bachelors (Poli Sci & International Studies) → Ceritificate (Web Design) → Certificate (Data Science)</span>
                </li>
                <li className="list-item">
                  <BsFillArrowRightSquareFill className="arrow-icon" />{" "}
                  <span className="item-label">LANGUAGES:</span> 
                  <span className="item-value">English + Bosnian/Serbian/Croatian/Montenegrin</span>
                </li>
                <li className="list-item">
                  <BsFillArrowRightSquareFill className="arrow-icon" />{" "}
                  <span className="item-label">PASSIONS:</span> 
                  <span className="item-value">Deep conversations, gym rat, globe-trotter, tech enthusiast, basketball enthusiast, gaming competitor, cinephile, data wizard</span>
                </li>
                <li className="list-item">
                  <BsFillArrowRightSquareFill className="arrow-icon" />{" "}
                  <span className="item-label">FUTURE VISIONS:</span> 
                  <span className="item-value">Podcast empire, tech startup founder, YouTube sensation, Hollywood breakthrough, etc.</span>
                </li>
                <li className="list-item">
                  <BsFillArrowRightSquareFill className="arrow-icon" />{" "}
                  <span className="item-label">TRAITS:</span> 
                  <span className="item-value">Infectious energy, easygoing, goofy, boundless creativity, genuine compassion, unstoppable curiosity, natural entertainer</span>
                </li>
              </ul>
            </div>
          </div>
          <img
            className="about-image"
            src={codeImage}
            alt="Mak Trnka - Bosnian American Coder"
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

