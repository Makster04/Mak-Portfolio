import React, { useState, useEffect, useMemo, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';

// Import pinpoints and CSS
import pinpoints from './pinpoints';
import './pinpoints.css';

const GlobeComponent = ({ width }) => {
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState();
  const globeRef = useRef(null);
  
  // Enhanced configuration options
  const [theme, setTheme] = useState('night'); // 'night', 'day', 'blue', 'natural'
  const [rotationSpeed, setRotationSpeed] = useState(0.3);
  const [showAtmosphere, setShowAtmosphere] = useState(true);
  const [highlightColor, setHighlightColor] = useState('steelblue');
  const [pointSize, setPointSize] = useState(0.3);
  
  // Arc links data for connections between points
  const [arcsData, setArcsData] = useState([]);
  
  // Animation controls
  const [isRotating, setIsRotating] = useState(true);
  
  // UI controls visibility
  const [showControls, setShowControls] = useState(true);
  
  // Generate random arcs between pinpoints for visualization
  useEffect(() => {
    if (pinpoints && pinpoints.length > 5) {
      const links = [];
      // Create connections between random points
      for (let i = 0; i < 15; i++) {
        const source = pinpoints[Math.floor(Math.random() * pinpoints.length)];
        const target = pinpoints[Math.floor(Math.random() * pinpoints.length)];
        
        // Avoid self-connections
        if (source !== target) {
          links.push({
            startLat: source.lat,
            startLng: source.lng,
            endLat: target.lat,
            endLng: target.lng,
            color: d3.interpolateRainbow(Math.random()),
            animationDuration: 2000 + Math.random() * 3000
          });
        }
      }
      setArcsData(links);
    }
  }, []);

  // Load country data
  useEffect(() => {
    fetch('/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        // Add random data for visualization if needed
        const enhancedData = {
          ...data,
          features: data.features.map(feat => ({
            ...feat,
            properties: {
              ...feat.properties,
              // Add random data for visualization if real data is missing
              GDP_MD_EST: feat.properties.GDP_MD_EST || Math.random() * 2000000,
              POP_EST: feat.properties.POP_EST || Math.random() * 100000000
            }
          }))
        };
        setCountries(enhancedData);
      })
      .catch(error => {
        console.error("Failed to load country data:", error);
        // Initialize with empty features to avoid errors
        setCountries({ features: [] });
      });
  }, []);

  // Theme-based globe images
  const globeImageUrls = {
    night: '//unpkg.com/three-globe/example/img/earth-night.jpg',
    day: '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    blue: '//unpkg.com/three-globe/example/img/earth-water.png',
    natural: '//unpkg.com/three-globe/example/img/earth-topology.png'
  };

  // Dynamic color scale based on data
  const colorScale = useMemo(() => {
    const scale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);
    const getVal = feat => {
      if (!feat || !feat.properties) return 0;
      return feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
    };
    const maxVal = Math.max(...(countries.features.map(getVal) || [0]));
    scale.domain([0, maxVal || 1]);
    return { scale, getVal };
  }, [countries]);

  // Globe rotation animation
  useEffect(() => {
    let animationFrameId = null;
    
    const animate = () => {
      if (globeRef.current && isRotating) {
        const controls = globeRef.current.controls();
        if (controls) {
          controls.autoRotate = true;
          controls.autoRotateSpeed = rotationSpeed;
          controls.update();
        }
      } else if (globeRef.current) {
        const controls = globeRef.current.controls();
        if (controls) {
          controls.autoRotate = false;
          controls.update();
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [rotationSpeed, isRotating]);

  // Random rings animation for enhanced visuals
  const [ringsData, setRingsData] = useState([]);
  
  useEffect(() => {
    // Initial rings
    generateRings(5);
    
    // Generate new rings every 2 seconds
    const interval = setInterval(() => {
      generateRings(1);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const generateRings = (count) => {
    if (!pinpoints || pinpoints.length === 0) return;
    
    const newRings = [...Array(count)].map(() => {
      // Select random point for ring origin
      const point = pinpoints[Math.floor(Math.random() * pinpoints.length)];
      return {
        lat: point.lat,
        lng: point.lng,
        maxR: Math.random() * 5 + 1,
        propagationSpeed: Math.random() * 4 + 1,
        repeatPeriod: Math.random() * 2000 + 1000
      };
    });
    
    setRingsData(rings => [...rings.slice(-15), ...newRings]); // Keep max 20 rings
  };

  // Enhanced country hover label
  const getCountryLabel = ({ properties: d }) => {
    if (!d) return '';
    return `
      <div style="background: rgba(0,0,0,0.75); color: white; border-radius: 6px; padding: 10px; font-family: Arial; box-shadow: 0 2px 10px rgba(0,0,0,0.25);">
        <div style="font-size: 16px; font-weight: bold; margin-bottom: 5px;">
          ${d.ADMIN || 'Unknown'} ${d.ISO_A2 ? `(${d.ISO_A2})` : ''}
        </div>
        <div style="font-size: 13px;">
          Population: ${d.POP_EST ? d3.format(",.0f")(d.POP_EST) : 'N/A'}<br />
          GDP: ${d.GDP_MD_EST ? `$${d3.format(",.0f")(d.GDP_MD_EST)} M` : 'N/A'}
        </div>
      </div>
    `;
  };

  // Enhanced point hover label with better styling
  const getPointLabel = (d) => {
    if (!d) return '';
    return `
      <div style="
        background: rgba(0,0,0,0.85); 
        color: white; 
        border-radius: 6px; 
        padding: 10px; 
        font-family: Arial; 
        box-shadow: 0 2px 10px rgba(0,0,0,0.5);
        border: 1px solid ${d.color === 'white' ? '#e0e0e0' : 
                          d.color === 'pink' ? '#ff69b4' : 
                          d.color === 'red' ? '#ff4040' : 
                          d.color === 'purple' ? '#9e40ff' : '#4a4a4a'};
      ">
        <div style="
          font-size: 14px; 
          font-weight: bold; 
          margin-bottom: 5px;
          color: ${d.color === 'white' ? '#e0e0e0' : 
                 d.color === 'pink' ? '#ff69b4' : 
                 d.color === 'red' ? '#ff4040' : 
                 d.color === 'purple' ? '#9e40ff' : '#aaaaaa'};
        ">
          ${d.label || 'Location'}
        </div>
        <div style="font-size: 12px;">
          ${d.description || `Latitude: ${d.lat.toFixed(2)}, Longitude: ${d.lng.toFixed(2)}`}
        </div>
        <div style="font-size: 11px; margin-top: 5px; opacity: 0.8;">
          ${d.size === 2.0 ? 'Memory with photos' : 
            d.size === 1.0 ? 'Memory without photos' : 'Vague memory'}
          • Visited ${d.color === 'white' ? '1x' : 
                    d.color === 'pink' ? '2x' : 
                    d.color === 'red' ? '3x' : 
                    d.color === 'purple' ? '4x' : '5x+'}
        </div>
      </div>
    `;
  };

  // Dynamically set the height and width based on props or container
  const containerHeight = "550px";
  const containerWidth = "100%";

  return (
    <div style={{ 
      height: containerHeight, 
      width: containerWidth, 
      position: 'relative', 
      overflow: 'hidden', 
      background: 'transparent',
      borderRadius: '10px'
    }}>
      {/* Globe Container */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', left: '25px' }}>
        <Globe
          ref={globeRef}
          globeImageUrl={globeImageUrls[theme]}
          backgroundColor="rgba(0,0,0,0)"
          
          // Country polygons
          polygonsData={countries.features.filter(d => d && d.properties && d.properties.ISO_A2 !== 'AQ')}
          polygonCapColor={d => d === hoverD ? highlightColor : colorScale.scale(colorScale.getVal(d))}
          polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
          polygonStrokeColor={() => '#111'}
          polygonLabel={getCountryLabel}
          onPolygonHover={setHoverD}
          polygonsTransitionDuration={300}
          
          // Points (pinpoints)
          pointsData={pinpoints}
          pointAltitude={d => d && d.size ? d.size * 0.2 : pointSize * 0.2}
          pointColor={d => {
            if (!d || !d.color) return d3.interpolateRainbow(Math.random());
            
            // Use gradient colors that match our CSS
            if (d.color === 'white') return '#e0e0e0';
            if (d.color === 'pink') return '#ff69b4';
            if (d.color === 'red') return '#ff4040';
            if (d.color === 'purple') return '#9e40ff';
            if (d.color === 'black') return '#1a1a1a';
            
            return d.color; // Fallback
          }}
          pointLabel={getPointLabel}
          pointRadius={pointSize}
          pointResolution={30}
          pointsMerge={false}
          
          // Arcs (connections)
          arcsData={arcsData}
          arcColor={'color'}
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={d => d.animationDuration}
          arcStroke={0.5}
          
          // Rings (pulse effects)
          ringsData={ringsData}
          ringColor={() => t => `rgba(255,100,50,${1-t})`}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          
          // Atmosphere
          atmosphereColor="skyblue"
          atmosphereAltitude={showAtmosphere ? 0.15 : 0}
          
          // Globe orientation and interactivity
          enablePointerInteraction={true}
          width={width > 768 ? width * 0.6 : width * 0.8}
          height={500}
        />
      </div>
      
      {/* Controls Panel */}
      {showControls && (
        <div style={{ 
          position: 'absolute', 
          top: '50px', 
          left: '0', 
          zIndex: 10,
          backgroundColor: 'rgba(16, 24, 48, 0.85)',
          color: 'white',
          borderRadius: '0 10px 10px 0',
          padding: '10px',
          width: '150px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold', textAlign: 'center' }}>Globe Controls</h3>
          
          {/* Theme Selector */}
          <div style={{ marginBottom: '6px' }}>
            <label style={{ display: 'block', marginBottom: '3px', fontSize: '11px' }}>Theme:</label>
            <select 
              value={theme} 
              onChange={(e) => setTheme(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '4px', 
                backgroundColor: 'rgba(0,0,0,0.4)', 
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '4px',
                fontSize: '11px'
              }}
            >
              <option value="night">Night</option>
              <option value="day">Day</option>
              <option value="blue">Blue</option>
              <option value="natural">Natural</option>
            </select>
          </div>
          
          {/* Rotation Controls */}
          <div style={{ marginBottom: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
              <label style={{ fontSize: '11px' }}>Rotation Speed:</label>
              <span style={{ fontSize: '10px', opacity: 0.8 }}>{rotationSpeed.toFixed(1)}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.1" 
              value={rotationSpeed}
              onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
              style={{ width: '100%', height: '5px' }}
            />
          </div>
          
          {/* Toggle Rotation */}
          <div style={{ marginBottom: '6px' }}>
            <button
              onClick={() => setIsRotating(!isRotating)}
              style={{ 
                width: '100%', 
                padding: '4px', 
                backgroundColor: isRotating ? 'rgba(50,200,100,0.6)' : 'rgba(200,50,50,0.6)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '11px'
              }}
            >
              {isRotating ? 'Pause Rotation' : 'Start Rotation'}
            </button>
          </div>
          
          {/* Point Size */}
          <div style={{ marginBottom: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
              <label style={{ fontSize: '11px' }}>Point Size:</label>
              <span style={{ fontSize: '10px', opacity: 0.8 }}>{pointSize.toFixed(1)}</span>
            </div>
            <input 
              type="range" 
              min="0.1" 
              max="1.5" 
              step="0.1" 
              value={pointSize}
              onChange={(e) => setPointSize(parseFloat(e.target.value))}
              style={{ width: '100%', height: '5px' }}
            />
          </div>
          
          {/* Atmosphere Toggle */}
          <div style={{ marginBottom: '6px' }}>
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '11px', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={showAtmosphere} 
                onChange={() => setShowAtmosphere(!showAtmosphere)}
                style={{ marginRight: '4px', transform: 'scale(0.7)' }}
              />
              Show Atmosphere
            </label>
          </div>
          
          {/* Generate New Connections */}
          <div style={{ marginBottom: '6px' }}>
            <button
              onClick={() => {
                if (!pinpoints || pinpoints.length <= 1) return;
                // Generate random connections between points
                const links = [];
                for (let i = 0; i < 10; i++) {
                  const source = pinpoints[Math.floor(Math.random() * pinpoints.length)];
                  const target = pinpoints[Math.floor(Math.random() * pinpoints.length)];
                  
                  if (source !== target) {
                    links.push({
                      startLat: source.lat,
                      startLng: source.lng,
                      endLat: target.lat,
                      endLng: target.lng,
                      color: d3.interpolateRainbow(Math.random()),
                      animationDuration: 2000 + Math.random() * 3000
                    });
                  }
                }
                setArcsData(links);
              }}
              style={{ 
                width: '100%', 
                padding: '4px', 
                backgroundColor: 'rgba(100,100,200,0.6)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '11px'
              }}
            >
              New Connections
            </button>
          </div>
        </div>
      )}
      
      {/* Globe Navigation Help */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: 'white',
        padding: '6px 10px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        fontSize: '12px',
        zIndex: 10,
        textAlign: 'center',
        width: 'auto',
        whiteSpace: 'nowrap'
      }}>
        <div>
          Controls: Drag to rotate • Scroll to zoom • Click to select
        </div>
      </div>
    </div>
  );
};

export default GlobeComponent;