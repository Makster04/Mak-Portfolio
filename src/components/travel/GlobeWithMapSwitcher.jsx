import React, { useState, useEffect } from 'react';
import GlobeComponent from './GlobeComponent';
import FlatArcheoMap from './FlatArcheoMap';

const GlobeWithMapSwitcher = ({ width = 800 }) => {
  const [viewMode, setViewMode] = useState('3D'); // '3D' or 'archeoMap'
  const [containerDimensions, setContainerDimensions] = useState({
    width: width,
    height: 550
  });
  
  useEffect(() => {
    // Update container dimensions if width changes with adjusted height for better visibility
    setContainerDimensions({
      width: width,
      height: viewMode === 'archeoMap' ? Math.min(500, width * 0.38) : 550
    });
  }, [width, viewMode]);
  
  return (
    <div style={{
      width: '100%',
      position: 'relative',
      backgroundColor: 'transparent'
    }}>
      {/* Mode Selector */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '15px',
        marginTop: '10px'
      }}>
        <div style={{
          display: 'flex',
          backgroundColor: 'rgba(16, 24, 48, 0.85)',
          padding: '5px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
        }}>
          <button
            onClick={() => setViewMode('3D')}
            style={{
              backgroundColor: viewMode === '3D' ? 'rgba(50, 100, 200, 0.8)' : 'transparent',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              marginRight: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: viewMode === '3D' ? 'bold' : 'normal',
              transition: 'background-color 0.3s'
            }}
          >
            3D Globe
          </button>
          <button
            onClick={() => setViewMode('archeoMap')}
            style={{
              backgroundColor: viewMode === 'archeoMap' ? 'rgba(139, 69, 19, 0.8)' : 'transparent',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: viewMode === 'archeoMap' ? 'bold' : 'normal',
              transition: 'background-color 0.3s'
            }}
          >
            Archeo Map
          </button>
        </div>
      </div>
      
      {/* Component Container */}
      <div style={{
        width: '100%',
        height: containerDimensions.height,
        backgroundColor: 'transparent',
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'background-color 0.5s'
      }}>
        {viewMode === '3D' ? (
          <GlobeComponent width={containerDimensions.width} />
        ) : (
          <FlatArcheoMap width={containerDimensions.width} />
        )}
      </div>
    </div>
  );
};

export default GlobeWithMapSwitcher;