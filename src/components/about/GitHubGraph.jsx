// GitHubGraph.jsx
import React from 'react';
import GitHubCalendar, { createCalendarTheme } from 'react-github-calendar';

// Gold squares on a faint translucent-white empty cell, so the graph sits on the page blue.
const goldTheme = createCalendarTheme('#ffd23f', 'rgba(255, 255, 255, 0.14)');

const GitHubGraph = () => {
  return (
    <div className="github-section">
      <h1 className="github-title">
        <span className="github-title-plain">My</span>{" "}
        <span className="github-title-accent">GITHUB</span>{" "}
        <span className="github-title-plain">Contribution Graph</span>
      </h1>
      <div className="github-graph">
        <GitHubCalendar
          style={{ marginBottom: "90px", color: "#fff3c4" }}
          username="Makster04"
          blockMargin={6}
          blockSize={15}
          fontSize={16}
          theme={goldTheme}
        />
      </div>
    </div>
  );
};

export default GitHubGraph;
