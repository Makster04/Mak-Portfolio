import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import { 
  BsGithub, 
  BsChevronDown, 
  BsChevronUp, 
  BsPeople, 
  BsLightbulb,
  BsBarChart, 
  BsArrowUpRight
} from "react-icons/bs";
import { 
  FaLaptopCode, 
  FaChartLine, 
  FaChartBar
} from "react-icons/fa";
import "./Project2.css";

const SingleProjectCard2 = ({ projectDetails }) => {
  const [expanded, setExpanded] = useState(false);
 
  const {
    title,
    subtitle,
    about,
    businessProblem,
    objective,
    stakeholders,
    modelsUsed,
    evaluationMetrics,
    recommendations,
    languages,
    nextSteps,
    image,
    projectLink,
    category,
    color = "#3b82f6" // Default blue color
  } = projectDetails;
  
  // Helper to render category icon
  const getCategoryIcon = () => {
    switch(category?.toLowerCase()) {
      case 'economics':
        return <FaChartLine size={18} />;
      case 'sports analytics':
        return <FaChartBar size={18} />;
      default:
        return <BsBarChart size={18} />;
    }
  };
  
  return (
    <Card className={`project-card ${expanded ? 'expanded' : ''}`} style={{'--card-accent-color': color}}>
      <div className="card-header">
        <div className="category-badge">
          {getCategoryIcon()} 
          <span>{category || "Data Science"}</span>
        </div>
        
        <h2 className="card-title">{title}</h2>
        {subtitle && <h3 className="card-subtitle">{subtitle}</h3>}
      </div>
      
      <Card.Content className="card-content">
        <p className="card-description">{about}</p>
        
        {/* Metrics display */}
        <div className="metrics-container">
          {evaluationMetrics.map((metric, idx) => (
            <div key={idx} className="metric-pill">
              <span className="metric-label">{metric.label}</span>
              <span className="metric-value">{metric.value}</span>
            </div>
          ))}
        </div>
        
        {/* Expandable content */}
        {expanded && (
          <div className={`expandable-content ${expanded ? 'visible' : ''}`}>
            <div className="info-grid">
              {/* Business context section */}
              <div className="info-section">
                <div className="section-header">
                  <BsLightbulb className="section-icon" />
                  <span>Business Context</span>
                </div>
                <div className="section-content">
                  <p><strong>Problem:</strong> {businessProblem}</p>
                  <p><strong>Objective:</strong> {objective}</p>
                </div>
              </div>
              
              {/* Stakeholders section */}
              <div className="info-section">
                <div className="section-header">
                  <BsPeople className="section-icon" />
                  <span>Stakeholders</span>
                </div>
                <div className="section-content">
                  <p>{stakeholders}</p>
                </div>
              </div>
              
              {/* Technical section */}
              <div className="info-section">
                <div className="section-header">
                  <FaLaptopCode className="section-icon" />
                  <span>Technical Approach</span>
                </div>
                <div className="section-content">
                  <p><strong>Models:</strong> {modelsUsed}</p>
                  <p><strong>Tech Stack:</strong> {languages}</p>
                </div>
              </div>
              
              {/* Results section */}
              <div className="info-section">
                <div className="section-header">
                  <BsBarChart className="section-icon" />
                  <span>Outcomes & Next Steps</span>
                </div>
                <div className="section-content">
                  <p><strong>Recommendations:</strong> {recommendations}</p>
                  <p><strong>Future Work:</strong> {nextSteps}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card.Content>
      
      <Card.Content extra className="card-footer">
  <button 
    className="toggle-details-button"
    onClick={() => setExpanded(!expanded)}
    aria-label={expanded ? "Show less details" : "Show more details"}
  >
    {expanded ? "Show Less" : "Show Details"}
    {expanded ? <BsChevronUp /> : <BsChevronDown />}
  </button>

  <a 
    href={projectLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="github-button"
    aria-label="View project on GitHub"
  >
    <BsGithub /> 
    <span>View Code</span>
    <BsArrowUpRight />
  </a>

  {projectDetails.presentationLink && (
    <a 
      href={projectDetails.presentationLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="presentation-button"
      aria-label="View project presentation"
    >
      <BsBarChart /> 
      <span>View Presentation</span>
      <BsArrowUpRight />
    </a>
  )}
</Card.Content>

    </Card>
  );
};

export default SingleProjectCard2;