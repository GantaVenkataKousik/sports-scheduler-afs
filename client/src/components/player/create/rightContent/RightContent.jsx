import React from 'react';
import GameComponent from './GameComponent';

function RightContent() {
    return (
        <div className="create-right-content">
            <div className='create-activities'>
                <h1>Available Sports</h1>
                <div className='create-activity-container'>
                    <GameComponent
                        imgSrc='/images/t.webp'
                        altText='Tennis'
                        gameName='Tennis'
                    />
                    <GameComponent
                        imgSrc='/images/vb.webp'
                        altText='hiking'
                        gameName='VolleyBall'
                    />
                    <GameComponent
                        imgSrc='/images/cricket.avif'
                        altText='running'
                        gameName='Cricket'
                    />
                    <GameComponent
                        imgSrc='/images/bb.jpg'
                        altText='cycling'
                        gameName='BasketBall'
                    />
                    <GameComponent
                        imgSrc='/images/k2.jpg'
                        altText='yoga'
                        gameName='Kabaddi'
                    />
                    <GameComponent
                        imgSrc='/images/fb.jpg'
                        altText='swimming'
                        gameName='FootBall'
                    />
                </div>
            </div>
        </div>
    );
}

export default RightContent;
