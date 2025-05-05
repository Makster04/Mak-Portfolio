import React from "react";
import './Timeline.css'; // Ensure you import the styles

const Timeline = ({ data }) => {
  return (
    <div className="timeline">
      {data.map((spot, index) => (
        <div className={`container ${index % 2 === 0 ? 'left' : 'right'}`} key={spot.id}>
          <div className="content">
            <img src={spot.imageurl} alt={spot.name} />
            <div className="text">
              <h2>{spot.name}</h2>
              <p><strong>Place:</strong> {spot.place}</p>
              <p><strong>Date:</strong> {spot.date}</p>
              <p>{spot.description}</p>
              <a href={spot.photoAlbumLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Photo Album</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;