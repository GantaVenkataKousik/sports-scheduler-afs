import React from 'react';
import GameComponent from './GameComponent';

function RightContent() {
    return (
        <div className="statistics-create-right-content">
            <div className='create-activities'>
                <div className='join-create-activity-container'>
                    <div className='pickSport'>
                        <h1>Sports you Participated</h1>
                        <div className='joinSports'>
                            <div className='statistics-join-activity-container'>
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightContent;
