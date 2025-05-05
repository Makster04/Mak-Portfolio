// GitHubGraph.jsx
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubGraph = () => {
  return (
    <div className="github-section">
      <h1
        style={{
          marginTop: "5rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
          fontSize: "3rem",
        }}
      >
        <span style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>My <span style={{ color: "#32CD30", animation: "pulse 2s infinite" }}>GITHUB</span> Contribution Graph</span> 
      </h1>
      <br />
      <div className="github-graph">
        <GitHubCalendar
          style={{ marginBottom: "90px" }}
          username="Makster04"
          blockMargin={6}
          blockSize={15}
          fontSize={16}
          color={"#32CD30"}
        />
      </div>
    </div>
  );
};

export default GitHubGraph;
