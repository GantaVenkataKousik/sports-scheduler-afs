import React from 'react';

function GameComponent({ imgSrc, altText, gameName, cnt }) {
    return (
        <div className={`image-container img-${cnt}`}>
            <img src={imgSrc} alt={altText} />
            <div className="overlay">
                <h3>{gameName}</h3>
            </div>
        </div>
    );
}

export default GameComponent;