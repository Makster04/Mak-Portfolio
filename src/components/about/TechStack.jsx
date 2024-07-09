// Import Statements

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

// Component Definition

const TechStack = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="techstack">

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
         <span style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}> Tech Skills </span>
        </span>
      </h1>

      <div className="techstack-row">
        <Card.Group itemsPerRow={width > 768 ? 5 : 2}>

          <Card raised className="item">
            {" "}
            <SiJavascript
              style={{ width: "100%", height: "auto", color: "#FFC300" }}
            />{" "}
          </Card>

          <Card raised className="item">
            {" "}
            <SiCss3
              style={{ width: "100%", height: "auto", color: "#1572B6" }}
            />{" "}
          </Card>
               
          <Card raised className="item">
            {" "}
            <SiHtml5
              style={{ width: "100%", height: "auto", color: "#E34F26" }}
            />{" "}
          </Card>        
       
          <Card raised className="item">
            {" "}
            <SiMongodb
              style={{ width: "100%", height: "auto", color: "#4DB33D"}}
            />{" "}
          </Card>
          
          <Card raised className="item">
            {" "}
            <SiExpress
              style={{ width: "100%", height: "auto", color: "#000000" }}
            />{" "}
          </Card>
          
          <Card raised className="item">
            {" "}
            <SiReact
              style={{ width: "100%", height: "auto", color: "#61DBFB" }}
            />{" "}
          </Card>
          
          <Card raised className="item">
            {" "}
            <SiNodedotjs
            style={{ width: "100%", height: "auto", color: "#68A063" }}
            />{" "}
          </Card>
          
          <Card raised className="item">
            {" "}
            <SiTypescript
              style={{ width: "100%", height: "auto", color: "#007ACC" }}
            />{" "}
          </Card>
          
          <Card raised className="item">
            {" "}
            <SiMysql
              style={{ width: "100%", height: "auto", color: "#00758f" }}
            />{" "}
          </Card>
          
          <Card raised className="item">
            {" "}
            <SiGit
              style={{ width: "100%", height: "auto", color: "#F05032" }}
            />{" "}
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

// Export Component

export default TechStack;
