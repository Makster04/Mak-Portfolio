import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/bosnianparrot.gif";
import GitHubCalendar from "react-github-calendar";

const AboutInfo = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div className="about">
        {/* About Me Section */}
        <div className="about-section">
          <h1
            style={{
              marginTop: "5rem",
              fontFamily: "Fira Code",
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "3rem"
            }}
          >
            <span style={{ color: "#32CD30", textShadow: "0 0 10px black", animation: "pulse 2s infinite" }}>ABOUT</span> ME 
          </h1>
          
          <div className="about-parent">
            <div className="about-text">
              <p style={{ textAlign: "justify" }}>
                <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> Hello Fellow Comrades, I am{" "}
                <span style={{ color: "yellow", fontWeight: "bold" }}>Mak Trnka</span>. As a Bosnian-American... if I can survive RAKIJA & CEVAPI, then I can survive CODING & PROGRAMMING.</span>
              </p>
              <br />
              <p style={{ textAlign: "justify"}}>
                Apart from my tech life, here are some of the facts about me:
                <ul>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>DATE & PLACE OF BIRTH:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> April 12, 1998 (Richmond, VA, USA)</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>FAMILY PLACE OF BIRTH:</span> <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> Bosnia & Herzegovina</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>ASTROLOGICAL SIGN:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> Aries</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>HOME:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> Seattle, WA, USA</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>EDUCATION:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> Bellevue College (2016-19), 
                    University of Washington (2019-22),
                    Code Fellows (2024)</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>DEGREE:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> Associates (Sociology), 
                    Bachelors (Poli Sci & International Studies)</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>LANGUAGES:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> English,
                    Bosnian/Serban/Croatian/Montenegrian</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>HOBBIES:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> Talking (Movies, Basketball, (GEO)Politics, World Cultures, Hisory, Personal Life, Society, Food, Animals, Pop Culture, News, etc.), 
                    Gym (Working Out, Playing Basketball), Traveling, Photography, Playing Videogames, Watching Movies
                    Creating Data Sets, Powerpoints, Collages, & Such
                    Comparing & Contrasting, 
                    Helping.</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>DREAMS:</span> 
                    <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> Start a Podcast, 
                    Create a Business (I already have a Tech Business Plan layed out), 
                    Start a Youtube Channel,
                    Become an Actor</span>
                  </li>
                  <li>
                    <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                    <span style={{ color: '#32CD30', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>POSITIVE TRAITS:</span> <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)"}}> Goofy,
                    Outgoing, 
                    Extroverted,
                    Omniligent,
                    Sympathetic, 
                    Caring, 
                    Energetic, 
                    Curious, 
                    Open-Minded, 
                    Creative, 
                    Unintentionally Funny, 
                    Dramatic, 
                    Generous, 
                    Hospitable.</span>
                  </li>
                </ul>
              </p>
            </div>
            <img
              className="rounded about-image"
              src={codeImage}
              alt="Extra large avatar"
              style={{ width: "700px", marginBottom: "50px" }}
            />
          </div>
        </div>

        {/* Tech Skills Section */}
        <div className="tech-stack-section" style={{ marginTop: '7rem', padding: '5rem', borderRadius: '10px' }}>
          <TechStack />
        </div>        

        {/* GitHub Contribution Graph Section */}
        <div className="github-section" style={{ marginTop: '7rem' }}>
          <h1
            style={{
              marginTop: "0rem",
              fontFamily: "Fira Code",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            <span style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>My <span style={{ color: "#32CD30", animation: "pulse 2s infinite" }}>Github</span> Contribution Graph</span> 
          </h1>
          <br />
          <div className="github-graph">
            <GitHubCalendar
              style={{ marginBottom: "90px" }}
              username="Makster04"
              blockMargin={6}
              blockSize={12}
              fontSize={16}
              color={"#32CD30"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
