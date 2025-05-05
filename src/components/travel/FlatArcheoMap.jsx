import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

// Import pinpoints data
import pinpoints from './pinpoints';

const FlatArcheoMap = ({ width = 800 }) => {
  const [countries, setCountries] = useState({ features: [] });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [mapDimensions, setMapDimensions] = useState({ width: width, height: 550 });
  const [pointSize, setPointSize] = useState(0.3);
  const [loadingMap, setLoadingMap] = useState(true);
  
  // Load country data
  useEffect(() => {
    setLoadingMap(true);
    fetch('/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        const enhancedData = {
          ...data,
          features: data.features.map(feat => ({
            ...feat,
            properties: {
              ...feat.properties,
              GDP_MD_EST: feat.properties.GDP_MD_EST || Math.random() * 2000000,
              POP_EST: feat.properties.POP_EST || Math.random() * 100000000
            }
          }))
        };
        setCountries(enhancedData);
        setLoadingMap(false);
      })
      .catch(error => {
        console.error("Failed to load country data:", error);
        setCountries({ features: [] });
        setLoadingMap(false);
      });
  }, []);

  useEffect(() => {
    // Update map dimensions with a better aspect ratio for world maps
    setMapDimensions({
      width: width,
      height: Math.min(550, width * 0.5) // Better aspect ratio for world maps
    });
  }, [width]);
  
  // Render the map
  useEffect(() => {
    if (loadingMap || countries.features.length === 0) return;
    
    const renderMap = () => {
      // Clear previous SVG
      d3.select("#archeo-map-container").select("svg").remove();
      
      // Create SVG with responsive sizing
      const svg = d3.select("#archeo-map-container")
        .append("svg")
        .attr("viewBox", `0 0 ${mapDimensions.width} ${mapDimensions.height}`)
        .attr("width", "100%")
        .attr("height", "100%")
        .style("background-color", "rgba(245, 240, 220, 1)");
      
      // Define map projection - Equirectangular for flat maps with adjusted scale
      const projection = d3.geoEquirectangular()
        .scale(mapDimensions.width * 0.14) // Reduced scale to show the whole map
        .center([0, 10]) // Centered at prime meridian for better balance
        .translate([mapDimensions.width / 2, mapDimensions.height / 2]);
      
      // Create a path generator
      const path = d3.geoPath()
        .projection(projection);
      
      // Add border decoration
      svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", mapDimensions.width)
        .attr("height", mapDimensions.height)
        .attr("fill", "none")
        .attr("stroke", "#8B4513")
        .attr("stroke-width", 1)
        .attr("rx", 10)
        .attr("ry", 10);
      
      // Add vintage paper texture
      svg.append("rect")
        .attr("x", 4)
        .attr("y", 4)
        .attr("width", mapDimensions.width - 8)
        .attr("height", mapDimensions.height - 8)
        .attr("fill", "rgba(245, 240, 220, 1)")
        .attr("rx", 8)
        .attr("ry", 8);
      
      // Add decorative elements - compass rose
      const compassSize = Math.min(mapDimensions.width, mapDimensions.height) * 0.15;
      const compassGroup = svg.append("g")
        .attr("transform", `translate(${mapDimensions.width - compassSize - 20}, ${mapDimensions.height - compassSize - 20})`);
      
      // Compass circle
      compassGroup.append("circle")
        .attr("cx", compassSize/2)
        .attr("cy", compassSize/2)
        .attr("r", compassSize/2)
        .attr("fill", "rgba(245, 240, 220, 0.8)")
        .attr("stroke", "#8B4513")
        .attr("stroke-width", 1);
      
      // Compass points
      const compassPoints = [
        { dir: "N", x: compassSize/2, y: 5, textX: 0, textY: -5 },
        { dir: "E", x: compassSize - 5, y: compassSize/2, textX: 5, textY: 0 },
        { dir: "S", x: compassSize/2, y: compassSize - 5, textX: 0, textY: 10 },
        { dir: "W", x: 5, y: compassSize/2, textX: -5, textY: 0 }
      ];
      
      // Draw compass lines
      compassGroup.append("line")
        .attr("x1", compassSize/2)
        .attr("y1", 5)
        .attr("x2", compassSize/2)
        .attr("y2", compassSize - 5)
        .attr("stroke", "#8B4513")
        .attr("stroke-width", 1);
      
      compassGroup.append("line")
        .attr("x1", 5)
        .attr("y1", compassSize/2)
        .attr("x2", compassSize - 5)
        .attr("y2", compassSize/2)
        .attr("stroke", "#8B4513")
        .attr("stroke-width", 1);
      
      // Add compass point labels
      compassPoints.forEach(point => {
        compassGroup.append("text")
          .attr("x", point.x + point.textX)
          .attr("y", point.y + point.textY)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("font-family", "'Times New Roman', serif")
          .attr("font-size", compassSize/6)
          .attr("fill", "#8B4513")
          .attr("font-weight", "bold")
          .text(point.dir);
      });
      
      // Add countries
      svg.append("g")
        .selectAll("path")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", d => d === selectedCountry ? "#CD853F" : "#D2B48C")
        .attr("stroke", "#8B4513")
        .attr("stroke-width", 0.5)
        .on("mouseover", function(event, d) {
          d3.select(this).attr("fill", "#CD853F");
          setSelectedCountry(d);
          
          // Show tooltip
          const [x, y] = d3.pointer(event);
          showCountryTooltip(d, x, y);
        })
        .on("mouseout", function() {
          if (this.__data__ !== selectedCountry) {
            d3.select(this).attr("fill", "#D2B48C");
          }
          hideTooltip();
        })
        .on("click", function(event, d) {
          setSelectedCountry(d === selectedCountry ? null : d);
        });
      
      // Add connections between points (arcs)
      if (pinpoints && pinpoints.length > 5) {
        // Select random points to connect
        const connections = [];
        for (let i = 0; i < 15; i++) {
          const source = pinpoints[Math.floor(Math.random() * pinpoints.length)];
          const target = pinpoints[Math.floor(Math.random() * pinpoints.length)];
          
          if (source !== target) {
            connections.push({
              source: source,
              target: target
            });
          }
        }
        
        // Draw connections as curved lines
        svg.append("g")
          .selectAll("path")
          .data(connections)
          .enter()
          .append("path")
          .attr("d", d => {
            const sourcePos = projection([d.source.lng, d.source.lat]);
            const targetPos = projection([d.target.lng, d.target.lat]);
            
            if (!sourcePos || !targetPos) return "";
            
            const midX = (sourcePos[0] + targetPos[0]) / 2;
            const midY = (sourcePos[1] + targetPos[1]) / 2 - 20; // Curve upward
            
            return `M ${sourcePos[0]} ${sourcePos[1]} Q ${midX} ${midY} ${targetPos[0]} ${targetPos[1]}`;
          })
          .attr("fill", "none")
          .attr("stroke", "#8B4513")
          .attr("stroke-width", 0.8)
          .attr("stroke-dasharray", "4,4")
          .attr("opacity", 0.6);
      }
      
      // Add pinpoints
      svg.append("g")
        .selectAll("circle")
        .data(pinpoints)
        .enter()
        .append("circle")
        .attr("cx", d => {
          const pos = projection([d.lng, d.lat]);
          return pos ? pos[0] : 0;
        })
        .attr("cy", d => {
          const pos = projection([d.lng, d.lat]);
          return pos ? pos[1] : 0;
        })
        .attr("r", d => {
          const baseSize = (d.size || 1) * pointSize * 5;
          return baseSize + 2; // Make points more visible
        })
        .attr("fill", d => {
          // Sepia-toned colors for the archeological map
          if (d.color === 'white') return '#B87333'; // Copper
          if (d.color === 'pink') return '#CD853F';  // Peru
          if (d.color === 'red') return '#8B0000';   // Dark Red
          if (d.color === 'purple') return '#800020'; // Burgundy
          if (d.color === 'black') return '#654321'; // Dark Brown
          return '#8B4513'; // Fallback to SaddleBrown
        })
        .attr("stroke", "#8B4513")
        .attr("stroke-width", 1)
        .attr("opacity", 0.9)
        .on("mouseover", function(event, d) {
          d3.select(this)
            .attr("r", (d.size || 1) * pointSize * 5 + 4)
            .attr("stroke-width", 2);
          
          setSelectedPoint(d);
          
          // Show tooltip
          const [x, y] = d3.pointer(event);
          showPointTooltip(d, x, y);
        })
        .on("mouseout", function(event, d) {
          d3.select(this)
            .attr("r", (d.size || 1) * pointSize * 5 + 2)
            .attr("stroke-width", 1);
          
          hideTooltip();
        })
        .on("click", function(event, d) {
          setSelectedPoint(d === selectedPoint ? null : d);
        });
      
      // Add grid lines for longitude/latitude (graticules)
      const graticule = d3.geoGraticule()
        .step([30, 30]); // Draw lines every 30 degrees
      
      svg.append("path")
        .datum(graticule)
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "#8B4513")
        .attr("stroke-width", 0.3)
        .attr("stroke-dasharray", "2,2")
        .attr("opacity", 0.4);
      
      // Add map title - old style font
      svg.append("text")
        .attr("x", mapDimensions.width / 2)
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .attr("font-family", "'Times New Roman', serif")
        .attr("font-size", "24px")
        .attr("font-weight", "bold")
        .attr("fill", "#8B4513")
        .attr("font-variant", "small-caps")
        .text("Map of Worldly Travels");
      
      // Add map border decorations
      for (let i = 0; i < 4; i++) {
        const x = i % 2 === 0 ? mapDimensions.width / 2 : (i === 1 ? mapDimensions.width - 20 : 20);
        const y = i < 2 ? 20 : mapDimensions.height - 20;
        
        svg.append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 5)
          .attr("fill", "#8B4513")
          .attr("stroke", "#654321")
          .attr("stroke-width", 1);
      }
    };
    
    renderMap();
    
    // Clean up on component unmount
    return () => {
      d3.select("#archeo-map-container").select("svg").remove();
    };
  }, [countries, mapDimensions, pointSize, selectedCountry, selectedPoint, loadingMap]);
  
  // Tooltip functions with fixed positioning
  const showCountryTooltip = (country, x, y) => {
    if (!country || !country.properties) return;
    
    const tooltip = d3.select(".archeo-tooltip");
    const container = document.getElementById("archeo-map-container");
    const svgElement = container.querySelector("svg");
    
    // Get the scaling factor for responsive SVG
    const svgRect = svgElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    // Calculate the adjusted coordinates based on the actual rendered size
    const scaleX = svgRect.width / mapDimensions.width;
    const scaleY = svgRect.height / mapDimensions.height;
    
    // Calculate position relative to the container
    const adjustedX = (x * scaleX) + containerRect.left;
    const adjustedY = (y * scaleY) + containerRect.top;
    
    tooltip.style("display", "block")
      .style("left", `${adjustedX + 10}px`)
      .style("top", `${adjustedY + 10}px`)
      .html(`
        <div style="
          background: rgba(255, 232, 214, 0.9); 
          color: #8B0000; 
          border-radius: 8px; 
          padding: 12px; 
          font-family: 'Times New Roman', serif; 
          box-shadow: 0 4px 15px rgba(139,0,0,0.6);
          border: 3px solid #8B0000;
          max-width: 220px;
          transform: scale(1.1);
        ">
          <div style="
            font-size: 20px; 
            font-weight: bold; 
            margin-bottom: 8px;
            color: #8B0000;
            text-decoration: underline;
            font-variant: small-caps;
            letter-spacing: 1px;
          ">
            ${country.properties.ADMIN || 'Terra Incognita'} ${country.properties.ISO_A2 ? `(${country.properties.ISO_A2})` : ''}
          </div>
          <div style="font-size: 14px; font-style: italic; color: #8B0000;">
            Population: ${country.properties.POP_EST ? d3.format(",.0f")(country.properties.POP_EST) : 'Unknown'}<br />
            Economy: ${country.properties.GDP_MD_EST ? `${d3.format(",.0f")(country.properties.GDP_MD_EST)} units` : 'Unmeasured'}
          </div>
        </div>
      `);
  };
  
  const showPointTooltip = (point, x, y) => {
    if (!point) return;
    
    const tooltip = d3.select(".archeo-tooltip");
    const container = document.getElementById("archeo-map-container");
    const svgElement = container.querySelector("svg");
    
    // Get the scaling factor for responsive SVG
    const svgRect = svgElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    // Calculate the adjusted coordinates based on the actual rendered size
    const scaleX = svgRect.width / mapDimensions.width;
    const scaleY = svgRect.height / mapDimensions.height;
    
    // Calculate position relative to the container
    const adjustedX = (x * scaleX) + containerRect.left;
    const adjustedY = (y * scaleY) + containerRect.top;
    
    tooltip.style("display", "block")
      .style("left", `${adjustedX + 10}px`)
      .style("top", `${adjustedY + 10}px`)
      .html(`
        <div style="
          background: rgba(245, 222, 179, 0.9); 
          color: #654321; 
          border-radius: 6px; 
          padding: 10px; 
          font-family: 'Times New Roman', serif; 
          box-shadow: 0 2px 10px rgba(139,69,19,0.5);
          border: 1px solid #8B4513;
          max-width: 200px;
          z-index: 9999;
        ">
          <div style="
            font-size: 15px; 
            font-weight: bold; 
            margin-bottom: 5px;
            color: #8B4513;
            text-decoration: underline;
            font-variant: small-caps;
          ">
            ${point.label || 'Unknown Land'}
          </div>
          <div style="font-size: 12px; font-style: italic;">
            ${point.description || `${point.lat.toFixed(1)}° ${point.lat >= 0 ? 'N' : 'S'}, ${point.lng.toFixed(1)}° ${point.lng >= 0 ? 'E' : 'W'}`}
          </div>
          <div style="font-size: 11px; margin-top: 8px; opacity: 0.9; font-family: cursive;">
            ${point.size === 2.0 ? 'Notable settlement with pictorial record' : 
              point.size === 1.0 ? 'Settlement with written accounts' : 'Rumored location'}
            • Times Visited: ${point.color === 'white' ? 'Once' : 
                         point.color === 'pink' ? 'Twice' : 
                         point.color === 'red' ? 'Multiple' : 
                         point.color === 'purple' ? 'Royal expedition' : 'Trade route'}
          </div>
        </div>
      `);
  };
  
  const hideTooltip = () => {
    d3.select(".archeo-tooltip").style("display", "none");
  };
  
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div id="archeo-map-container" style={{
        width: '100%', // Changed from fixed width to 100%
        height: mapDimensions.height,
        position: 'relative',
        overflow: 'hidden' // Added to prevent any overflow issues
      }}>
        {loadingMap && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: "'Times New Roman', serif",
            color: '#8B4513',
            fontSize: '18px'
          }}>
            Loading Ancient Map...
          </div>
        )}
      </div>
      
      {/* Controls */}
      <div style={{
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}>
        <label style={{
          fontFamily: "'Times New Roman', serif",
          color: '#8B4513',
          marginRight: '10px',
          fontSize: '14px'
        }}>
          Point Size:
        </label>
        <input
          type="range"
          min="0.1"
          max="1.0"
          step="0.1"
          value={pointSize}
          onChange={(e) => setPointSize(parseFloat(e.target.value))}
          style={{
            width: '100px'
          }}
        />
        <span style={{
          marginLeft: '5px',
          fontFamily: "'Times New Roman', serif",
          color: '#8B4513',
          fontSize: '14px'
        }}>
          {pointSize.toFixed(1)}
        </span>
      </div>
      
      {/* Footer */}
      <div style={{
        marginTop: '10px',
        backgroundColor: 'rgba(245, 222, 179, 0.8)',
        color: '#654321',
        padding: '6px 10px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(139,69,19,0.4)',
        fontSize: '13px',
        fontFamily: '"Times New Roman", serif',
        textAlign: 'center',
        width: 'auto',
        fontStyle: 'italic',
        border: '1px solid #8B4513'
      }}>
        Navigate your Map: Drag to explore • Scroll for distance • Click to identify
      </div>
      
      {/* Tooltip */}
      <div className="archeo-tooltip" style={{
        position: 'fixed', // Changed from absolute to fixed for better positioning
        display: 'none',
        pointerEvents: 'none',
        zIndex: 9999, // Increased z-index to ensure it's on top
        maxWidth: '250px' // Ensure tooltip doesn't get too wide
      }}></div>
    </div>
  );
};

export default FlatArcheoMap;