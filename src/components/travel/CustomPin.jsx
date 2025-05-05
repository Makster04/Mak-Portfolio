import React from 'react';

// Custom component for creating the pin HTML structure
const CustomPin = ({ datum }) => {
  // Get size class based on pin data
  const sizeClass = datum.size === 0.5 ? 'size-0-5' : 
                    datum.size === 1.0 ? 'size-1-0' : 
                    datum.size === 2.0 ? 'size-2-0' : 'size-1-0';
  
  // Get color class based on pin data
  const colorClass = datum.color && ['white', 'pink', 'red', 'purple', 'black'].includes(datum.color) 
                     ? datum.color 
                     : 'red'; // Default to red like the image
  
  return (
    <div className="point-wrapper">
      <div className={`map-pin ${colorClass} ${sizeClass}`}>
        {/* Add the pin hole element to match the image */}
        <div className="pin-hole"></div>
        
        {/* Add shadow under pin */}
        <div className="pin-shadow"></div>
        
        {/* Optional tooltip */}
        {datum.label && (
          <div className="pin-tooltip">
            {datum.label}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomPin;