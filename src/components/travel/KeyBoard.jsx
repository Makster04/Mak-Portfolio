import React from 'react';
import './KeyBoard.css'; // Ensure you have a corresponding CSS file for styling

const KeyBoard = () => {
  return (
    <div className="key-board">
      <h3>Pinpoint Key</h3>
      <div className="key-section">
        <h4>Total Places:</h4>
        <ul>
          <li><strong>Countries Visited:</strong> <span>25</span></li>
        </ul>
      </div>
      <div className="key-section">
        <h4>Pinpoint Color:</h4>
        <ul>
          <li><span className="color-box white"></span> <strong>WHITE:</strong> <span>Visited 1x</span></li>
          <li><span className="color-box pink"></span> <strong>PINK:</strong> <span>Visited 2x</span></li>
          <li><span className="color-box red"></span> <strong>RED:</strong> <span>Visited 3x</span></li>
          <li><span className="color-box purple"></span> <strong>PURPLE:</strong> <span>Visited 4x</span></li>
          <li><span className="color-box black"></span> <strong>BLACK:</strong> <span>Visited 5x+</span></li>
        </ul>
      </div>
      <div className="key-section">
        <h4>Pinpoint Size:</h4>
        <ul>
          <li><strong>2.0:</strong> <span>Remember the Experience (Have Photos)</span></li>
          <li><strong>1.0:</strong> <span>Remember the Experience (No Photos)</span></li>
          <li><strong>0.5:</strong> <span>Don't Remember the Experience</span></li>
        </ul>
      </div>
      
    </div>
  );
};

export default KeyBoard;

