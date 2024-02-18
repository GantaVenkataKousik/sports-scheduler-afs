import React from 'react';

function Player({ url, name }) {
    return (
        <div className="player">
            <img src={url} alt={name} /> {/* Added alt attribute for accessibility */}
            <p className='username'>{name}</p>
        </div>
    );
}

export default Player;
