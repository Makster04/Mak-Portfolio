import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import {
  SiJavascript,
  SiPython,
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiSqlite,
  SiTableau,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiTensorflow
  
} from "react-icons/si";

const TechStack = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const introText = (
    <p style={{ textAlign: "center", marginBottom: "3rem" }}>
      <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}>
        A list of the software languages, libraries, and tools I’ve gained knowledge and experience in.{" "}
      </span>
    </p>
  );

  const dataScienceSkills = [
    { icon: <SiPython />, color: "#306998", label: "Python" },
    { icon: <SiSqlite />, color: "#00758f", label: "SQL" },
    { icon: <SiTableau />, color: "#e97627", label: "Tableau" },
    { icon: <SiNumpy />, color: "#4f98f5", label: "NumPy" },
    { icon: <SiScikitlearn />, color: "#f7931e", label: "Scikit-learn" },
    { icon: <SiJupyter />, color: "#f37626", label: "Jupyter Notebook" },
    { icon: <SiTensorflow />, color: "#f37626", label: "TensorFlow" }
  ];
  
  const softwareEngineeringSkills = [
    { icon: <SiJavascript />, color: "#f7df1e", label: "JavaScript" },
    { icon: <SiTypescript />, color: "#007ACC", label: "TypeScript" },
    { icon: <SiHtml5 />, color: "#e34c26", label: "HTML5" },
    { icon: <SiCss3 />, color: "#264de4", label: "CSS3" },
    { icon: <SiReact />, color: "#61DBFB", label: "React" },
    { icon: <SiNodedotjs />, color: "#3c873a", label: "Node.js" },
    { icon: <SiExpress />, color: "#000000", label: "Express.js" },
    { icon: <SiMongodb />, color: "#4DB33D", label: "MongoDB" },
  ];
  

  const renderCards = (skills) =>
    skills.map((item, index) => (
      <Card
        raised
        className="item"
        key={index}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '140px',
          height: '140px',
          margin: '10px',
          padding: '1rem',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 10, 0.4)', // transparent dark background
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        {React.cloneElement(item.icon, {
          style: { width: "60px", height: "60px", color: item.color, marginBottom: "0.5rem" }
        })}
        <div style={{ color: 'white', fontSize: '1rem', fontWeight: '300' }}>
          {item.label}
        </div>
      </Card>
    ));
  
  
  return (
    <div
      className="techstack"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
      }}
    >
      <h1>
        <span
          style={{
            color: "#32CD30",
            marginTop: "3rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
            fontSize: "3rem",
          }}
        >
          <span style={{ textShadow: "0 0 10px black", color: "white" }}>My</span>{" "}
          <span style={{ textShadow: "0 0 10px black", animation: "pulse 2s infinite" }}>TECH SKILLS</span>
        </span>
      </h1>

      {introText}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          flexWrap: 'wrap',
          gap: '4rem',
        }}
      >
        {/* Software Engineering Column */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Data Science</h2>
          <Card.Group itemsPerRow={width > 768 ? 2 : 1} style={{ justifyContent: 'center' }}>
            {renderCards(dataScienceSkills)}
          </Card.Group>
        </div>

        {/* Data Science Column */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Software Engineering</h2>
          <Card.Group itemsPerRow={width > 768 ? 2 : 1} style={{ justifyContent: 'center' }}>
            {renderCards(softwareEngineeringSkills)}
          </Card.Group>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
