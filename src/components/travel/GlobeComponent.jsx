import React, { useState, useEffect, useMemo, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';
import pinpoints from './pinpoints'; // Import the pinpoints data

const GlobeComponent = () => {
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState();
  const globeRef = useRef(null);
  const rotationSpeed = 0.3; // Adjust the speed of rotation here

  useEffect(() => {
    // Load data
    fetch('/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);

  // GDP per capita (avoiding countries with small pop)
  const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

  const maxVal = useMemo(() => Math.max(...countries.features.map(getVal)), [countries]);
  colorScale.domain([0, maxVal]);

  useEffect(() => {
    let animationFrameId = null;
    const animate = () => {
      if (globeRef.current) {
        globeRef.current.controls().autoRotate = true; // Enable auto-rotation
        globeRef.current.controls().autoRotateSpeed = rotationSpeed;
        globeRef.current.controls().update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [rotationSpeed]);

  return (
    <div style={{ height: '100vh' }}>
      {/* Globe Container */}
      <div style={{ flex: 1, position: 'relative', display: 'flex'}}>
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="rgba(0,0,0,0)" // Set background to transparent
          lineHoverPrecision={0}
          polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
          polygonCapColor={d => (d === hoverD ? 'steelblue' : colorScale(getVal(d)))}
          polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
          polygonStrokeColor={() => '#111'}
          polygonLabel={({ properties: d }) => `
            <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
          `}
          onPolygonHover={setHoverD}
          polygonsTransitionDuration={300}
          pointsData={pinpoints}
          pointAltitude={d => d.size * 0.2} // Adjust altitude based on size
          pointColor={d => d.color} // Use color property from pinpoints
          pointLabel={d => d.label} // Use label property from pinpoints
          pointRadius={0.3} // Increase the size of the pinpoints
          pointResolution={30} // Increase roundness of the pinpoints
          pointGlowColor="black" // Example of glow color
        />
      </div>
    </div>
  );
};

export default GlobeComponent;
