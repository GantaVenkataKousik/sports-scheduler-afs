import React from 'react';

function GameComponent({ imgSrc, altText, gameName }) {
    return (
        <div className={`image-container`}>
            <img src={imgSrc} alt={altText} />
            <div className="overlay">
                <h3>{gameName}</h3>
            </div>
        </div>
    );
}

export default GameComponent; 