import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiMysql,
  SiGit,
} from "react-icons/si";

const TechStack = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const introText = (
    <p style={{ textAlign: "center", marginBottom: "3rem" }}>
      <span style={{ color: "white", textShadow: "0 4px 8px rgba(0, 0, 0, 10)" }}>
        A list of the software languages I have gained my knowledge and talent in. {" "}
  
      </span>
    </p>
  );

  return (
    <div className="techstack" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>

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
          <span style={{ textShadow: "0 0 10px black", animation: "pulse 2s infinite" }}>SOFTWARE SKILLS</span>
        </span>
      </h1>

      {introText}

      <div className="techstack-row" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Card.Group itemsPerRow={width > 768 ? 4 : 2} style={{ justifyContent: 'center' }}>
          {[
            { icon: <SiJavascript />, color: "#FFC300" },
            { icon: <SiCss3 />, color: "#1572B6" },
            { icon: <SiHtml5 />, color: "#E34F26" },
            { icon: <SiMongodb />, color: "#4DB33D" },
            { icon: <SiExpress />, color: "#000000" },
            { icon: <SiReact />, color: "#61DBFB" },
            { icon: <SiNodedotjs />, color: "#68A063" },
            { icon: <SiTypescript />, color: "#007ACC" },
            { icon: <SiMysql />, color: "#00758f" },
            { icon: <SiGit />, color: "#F05032" },
          ].map((item, index) => (
            <Card
              raised
              className="item"
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '160px',
                height: '160px',
                margin: '10px',
              }}
            >
              {React.cloneElement(item.icon, { style: { width: "70px", height: "70px", color: item.color } })}
            </Card>
          ))}
        </Card.Group>
      </div>
    </div>
  );
};

export default TechStack;
