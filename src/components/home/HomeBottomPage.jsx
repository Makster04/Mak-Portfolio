import React, { useState } from "react";
import avatar from "../../assets/ComputerGif.gif";
import Tilt from "react-parallax-tilt";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { Computer } from "@mui/icons-material";

// Import your certificate images
import certificate201 from "../../assets/certificate201.png";
import certificate301 from "../../assets/certificate301.png";
import certificate401 from "../../assets/certificate401.png";
import certificate102 from "../../assets/certificate102.png";
import certificateVisualizeData from "../../assets/certificateVisualizeData.png";

const resumeURL = "https://docs.google.com/document/d/1OSOmxwTUWjMi2UnEW5FbrT1sjR5b9W6oIp3RXEr4Xws/edit#heading=h.biu39wkykbpm";

const HomeBottomPage = () => {
  const [hoveredCertificate, setHoveredCertificate] = useState(null);

  const handleHoverCertificate = (certificate) => {
    setHoveredCertificate(certificate);
  };

  const handleLeaveCertificate = () => {
    setHoveredCertificate(null);
  };

  return (
    <div className="homeBottom">
      {/* Title Section */}
      <h1 style={{ fontSize: "3.5rem", marginBottom: "3.5rem" }}>
        <span style={{ textShadow: "0 0 5px black"}}>Some Things </span>
        <span style={{ color: "yellow", textShadow: "0 0 10px white", animation: "pulse 2s infinite",}}>ABOUT ME</span>
      </h1>

      {/* Introduction Section */}
      <div className="introduction">
        <div className="intro-text">
          <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)",}}>
            <p>
              I'm Mak Trnka, I have recently completed <span style={{ color: "red" }}>CODE FELLOWS</span> learning Software Development for the first time. My enthusiasm lies at the intersection of technology and creativity. Currently, I'm adept in JavaScript, CSS, React, and the MERN stack, with a newfound interest in mastering AWS and TypeScript. Beyond that, I aspire to delve into the realm of Data Science.
            </p>
            <br />
            <p>
              Outside the realm of technology, I'm an <span style={{ color: "Plum" }}>AVID TRAVELER</span>, having explored 25 countries to date. My interests span across the world data, history, (geo)politics, diverse cultures, and societal dynamics. Therefore, Traveling will always be one of my major talents and hobbies.
            </p>
            <br />
            <p>
              I've been described by many as <span style={{ color: "Pink" }}>OPEN-MINDED</span>. In addition to the other topics mentioned, my interest also spans across other topics such as Movies, Pop Culture, Personal Life, Basketball, Wildlife, Food, Breaking News, other Data, and such. I harbor aspirations of starting a podcast to discuss these eclectic topics or even start a YouTube channel.
            </p>
            <br />
            <p>
              I'm also a <span style={{ color: "Orange" }}>SERIAL CREATOR</span>. Through my extensive coding skills, I have the ability to design and craft a number of websites. Outside of tech, I possess a knack for ideation and enjoy crafting visually engaging presentations and data-driven reports in tools like Word, Excel, and PowerPoint. What also makes me a serial creator is the fact I have many Business ideas, App ideas, Legislative ideas, and creating content for several different topics (Positive effects come from having ADHD and being on the Spectrum as well as you can see).
            </p>
            <br />
            <p>
              So stick around, take a look, and feel free to reach out if you ever want to meet up or begin a new journey in life! For a comprehensive overview, feel free to peruse my <a href={resumeURL} target="_blank" rel="noreferrer" style={{ color: "#89dc88" }}>RESUME</a>. 
            </p>
            <br />
            <p>
               
            </p>
          </span>
        </div>

        <div className="intro-image" style={{ marginTop: '80px' }}>
          <Tilt>
            <img
              className="rounded w-50 h-50"
              src={avatar}
              alt="Extra large avatar"
            ></img>
          </Tilt>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
        <span style={{ textShadow: "0 0 5px black"}}>My </span>
        <span style={{ color: "yellow", textShadow: "0 0 10px white", animation: "pulse 2s infinite",}}>TIMELINE</span>
      </h2>
        
      <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="December 2024 - Present"
            iconStyle={{ background: 'blue', color: '#fff' }}
            icon={<Computer />}
            contentStyle={{ background: '#e0f7fa', color: '#00796b', textAlign: 'left' }}
            contentArrowStyle={{ borderRight: '7px solid  #f0f0f0' }}
            dateClassName="custom-date"
          >
            <h3 className="vertical-timeline-element-title" style={{ color: 'Blue' }}>Flatiron (Data Science)</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#00796b' }}>New York City, NY</h4>
            <p style={{ color: '#555' }}>
              Just got enrolled into an In-Person Data Science Bootcamp located in Manhattan, NYC starting December 9th. Therefore, haven't started yet.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2024 - July 2024"
            iconStyle={{ background: 'red', color: '#fff' }}
            icon={<FaGraduationCap />}
            contentStyle={{ background: '#e0f7fa', color: '#00796b', textAlign: 'left' }}
            contentArrowStyle={{ borderRight: '7px solid  #f0f0f0' }}
            dateClassName="custom-date"
          >
            <h3 className="vertical-timeline-element-title" style={{ color: 'Red' }}>Code Fellows (Web Development)</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#00796b' }}>Seattle, WA</h4>
            <p style={{ color: '#555' }}>
              Learned Software Development with a focus on JavaScript & other features in a Bootcamp named Codefellows located in Seattle, WA. Here are my current certificates:
              <ul>
                <li
                  onMouseEnter={() => handleHoverCertificate(certificate401)}
                  onMouseLeave={handleLeaveCertificate}
                  style={{ cursor: 'pointer', alignItems: 'center' }}
                >
                  <span style={{ color: "Red", fontWeight: "bold", marginRight: '10px' }}>- Certificate of Completion in Code 401:</span>Advanced Software Development
                  {hoveredCertificate === certificate401 && (
                    <img src={certificate401} alt="Certificate" className="certificate-image" />
                  )}
                </li>
                <li
                  onMouseEnter={() => handleHoverCertificate(certificate301)}
                  onMouseLeave={handleLeaveCertificate}
                  style={{ cursor: 'pointer', alignItems: 'center' }}
                >
                  <span style={{ color: "Red", fontWeight: "bold", marginRight: '10px' }}>- Certificate of Completion in Code 301:</span>Intermediate Software Development
                  {hoveredCertificate === certificate301 && (
                    <img src={certificate301} alt="Certificate" className="certificate-image" />
                  )}
                </li>
                <li
                  onMouseEnter={() => handleHoverCertificate(certificate201)}
                  onMouseLeave={handleLeaveCertificate}
                  style={{ cursor: 'pointer', alignItems: 'center' }}
                >
                  <span style={{ color: "Red", fontWeight: "bold", marginRight: '10px' }}>- Certificate of Completion in Code 201:</span>Foundations of Software Development
                  {hoveredCertificate === certificate201 && (
                    <img src={certificate201} alt="Certificate" className="certificate-image" />
                  )}
                </li>
                <li
                  onMouseEnter={() => handleHoverCertificate(certificate102)}
                  onMouseLeave={handleLeaveCertificate}
                  style={{ cursor: 'pointer', alignItems: 'center' }}
                >
                  <span style={{ color: "Red", fontWeight: "bold", marginRight: '10px' }}>- Certificate of Completion in Code 102:</span>Intro to Software Development
                  {hoveredCertificate === certificate102 && (
                    <img src={certificate102} alt="Certificate" className="certificate-image" />
                  )}
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2023 - Present"
            iconStyle={{ background: '#bfb313', color: '#fff' }}
            icon={<Computer />}
            contentStyle={{ background: '#e0f7fa', color: '#00796b', textAlign: 'left' }}
            contentArrowStyle={{ borderRight: '7px solid  #f0f0f0' }}
            dateClassName="custom-date"
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#bfb313' }}>Codecademy (Data Visualization)</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#00796b' }}>Remote</h4>
            <p style={{ color: '#555' }}>
              Been taking lessons on Visualizing Data. Here are some of my current certificates:
              <ul>
                <li
                  onMouseEnter={() => handleHoverCertificate(certificateVisualizeData)}
                  onMouseLeave={handleLeaveCertificate}
                  style={{ cursor: 'pointer', alignItems: 'center' }}
                >
                  <span style={{ color: "#bfb313", fontWeight: "bold", marginRight: '10px' }}>- Certificate of Completion in Visualize Data:</span>Matplotlib and Seaborn
                  {hoveredCertificate === certificateVisualizeData && (
                    <img src={certificateVisualizeData} alt="Certificate" className="certificate-image" />
                  )}
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2022 - June 2023"
            iconStyle={{ background: 'green', color: '#fff' }}
            icon={<FaBriefcase />}
            contentStyle={{ background: '#e0f7fa', color: '#00796b', textAlign: 'left' }}
            contentArrowStyle={{ borderRight: '30px solid  #e0f7fa' }}
            dateClassName="custom-date"
          >
            <h3 className="vertical-timeline-element-title" style={{ color: 'Green' }}>Assistant Teacher for Neurodiversity</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#00796b' }}>Seattle & Renton, WA</h4>
            <p style={{ color: '#004d40' }}>
              <ul>
                <li><span style={{ color: "BLACK", fontWeight: "bold" }}>Academy for Precision Learning (2022):</span> </li>
              </ul>
              <li><span style={{ fontWeight: "bold" }}>Role (Behavior Technician):</span> I aided neurodiverse students in behavioral development. Additionally, I utilized innovative technologies to personalize learning approaches.</li> 
              <ul>
                <li><span style={{ color: "BLACK", fontWeight: "bold" }}>HeyTutor (2023):</span> </li>
              </ul>
              <li><span style={{ fontWeight: "bold" }}>Role (Paraprofessional):</span> I provided dedicated support to learners with disabilities, demonstrating flexibility and empathy. Furthermore, I adapted quickly to diverse educational environments, ensuring inclusive learning experiences.</li>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2019 - March 2022"
            iconStyle={{ background: 'purple', color: '#fff' }}
            icon={<FaGraduationCap />}
            contentStyle={{ background: '#e0f7fa', color: '#00796b', textAlign: 'left' }}
            contentArrowStyle={{ borderRight: '7px solid  #e0f7fa' }}
            dateClassName="custom-date"
          >
            <h3 className="vertical-timeline-element-title" style={{ color: 'Purple' }}>University of Washington (Bachelors)</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#00796b' }}>Seattle, WA</h4>
            <p style={{ color: '#004d40' }}>
              <ul>
                <li><span style={{ color: "BLACK", fontWeight: "bold" }}>Bachelors Degree:</span> </li>
              </ul>
              <li><span style={{ fontWeight: "bold" }}>Political Science</span> (Major)</li>
              <li><span style={{ fontWeight: "bold" }}>International Studies</span> (Minor)</li>
              <ul>
                <li><span style={{ color: "BLACK", fontWeight: "bold" }}>Activities:</span> </li>
              </ul>
              <li><span style={{ fontWeight: "bold" }}>Model UN:</span> Served as ambassador to Jamaica & Burkina Faso</li>
              <li><span style={{ fontWeight: "bold" }}>ASUW Student Senate:</span> Served as Student Senator & launched a project to help neurodiverse students.</li>
              <li><span style={{ fontWeight: "bold" }}>West Coast Model EU:</span> Served as ambassador to Greece & Croatia.</li>
              <li><span style={{ fontWeight: "bold" }}>Unite UW:</span> Served as Facilitator for a social group to connect people of different cultures.</li>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2016 - March 2019"
            iconStyle={{ background: 'blue', color: '#fff' }}
            icon={<FaGraduationCap />}
            contentStyle={{ background: '#e0f7fa', color: '#00796b', textAlign: 'left' }}
            contentArrowStyle={{ borderRight: '30px solid  #e0f7fa' }}
            dateClassName="custom-date"
          >
            <h3 className="vertical-timeline-element-title" style={{ color: 'Blue' }}>Bellevue College (Associates)</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#00796b' }}>Bellevue, WA</h4>
            <p style={{ color: '#004d40' }}>
              <ul>
                <li><span style={{ color: "BLACK", fontWeight: "bold" }}>Associates Degree:</span> </li>
              </ul>
              <li><span style={{ fontWeight: "bold" }}>Sociology</span> (Major)</li>
              <ul>
                <li><span style={{ color: "BLACK", fontWeight: "bold" }}>Activities:</span> </li>
              </ul>
              <li><span style={{ fontWeight: "bold" }}>Habitat for Humanity:</span> Volunteered as a worker collecting and moving furniture for other customers.</li>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {hoveredCertificate && (
        <div className="certificate-image-popup" onMouseLeave={handleLeaveCertificate}>
          <img src={hoveredCertificate} alt="Certificate" />
        </div>
      )}
    </div>
  );
};

export default HomeBottomPage;
