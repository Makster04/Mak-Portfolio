import React, { useState, useEffect } from 'react';
import './Travel.css';

const SingleTravelCard = ({ spot }) => {
    if (!spot) {
        return <div>No spot data available</div>;
    }

    const { name, images, place, date, description, photoAlbumLink } = spot;

    const [currentImage, setCurrentImage] = useState(images && images.length > 0 ? images[0] : 'path/to/default-image.jpg');

    useEffect(() => {
        if (images && images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImage(prev => {
                    const currentIndex = images.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % images.length;
                    return images[nextIndex];
                });
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [images]);

    return (
        <div className="card">
            <div className="content">
                <h2 className="title">{name}</h2>
                <p className="copy"><strong>Date:</strong> {date}</p>
                <p className="copy"><strong>Places:</strong> {place}</p>
                <p className="copy"><strong>Description:</strong> {description}</p>
                {photoAlbumLink && (
                    <a href={photoAlbumLink} target="_blank" rel="noopener noreferrer" className="btn">
                        View Photo Album
                    </a>
                )}
            </div>
        </div>
    );
};

export default SingleTravelCard;
