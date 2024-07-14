import React from 'react';
import './Travel.css';

const SingleTravelCard = ({ spot }) => {
    if (!spot) {
        return null;
    }

    const { name, image, place, description, photoAlbumLink } = spot;

    return (
        <div className="single-travel-card">
            <img src={image} alt={name} />
            <div className="travel-card-content">
                <h2>{name}</h2>
                <p><strong>Places:</strong> {place}</p>
                <p><strong>Description:</strong> {description}</p>
                {photoAlbumLink && (
                    <a href={photoAlbumLink} target="_blank" rel="noopener noreferrer" className="album-link">
                        View Photo Album
                    </a>
                )}
            </div>
        </div>
    );
};

export default SingleTravelCard;

