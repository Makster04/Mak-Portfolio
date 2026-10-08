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
    <p className="skills-intro">
      A list of the software languages, libraries, and tools I’ve gained knowledge and experience in.
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
    { icon: <SiExpress />, color: "#ffffff", label: "Express.js" },
    { icon: <SiMongodb />, color: "#4DB33D", label: "MongoDB" },
  ];
  

  const renderCards = (skills) =>
    skills.map((item, index) => (
      <Card
        className="skill-card"
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
        }}
      >
        <span className="skill-icon">
          {React.cloneElement(item.icon, {
            style: { width: "52px", height: "52px", color: item.color, display: "block" }
          })}
        </span>
        <div className="skill-label">{item.label}</div>
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
      <h1 className="skills-title">
        <span className="skills-title-plain">My</span>{" "}
        <span className="skills-title-accent">TECH SKILLS</span>
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
          <h2 className="skills-heading">Data Science</h2>
          <Card.Group itemsPerRow={width > 768 ? 2 : 1} style={{ justifyContent: 'center' }}>
            {renderCards(dataScienceSkills)}
          </Card.Group>
        </div>

        {/* Data Science Column */}
        <div style={{ textAlign: 'center' }}>
          <h2 className="skills-heading">Software Engineering</h2>
          <Card.Group itemsPerRow={width > 768 ? 2 : 1} style={{ justifyContent: 'center' }}>
            {renderCards(softwareEngineeringSkills)}
          </Card.Group>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
