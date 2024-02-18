import React from 'react';
import GameComponent from './GameComponent';

function RightContent() {
    return (
        <div className="join-create-right-content">
            <div className='create-activities'>
                <div className='join-create-activity-container'>
                    <div className='searchTeam'>
                        <h1>Search for a Team</h1>
                        <input type='text' placeholder='Enter Team name' ></input>
                    </div>
                    <div className='pickSport'>
                        <h1>Pick Sport</h1>
                        <div className='joinSports'>
                            <div className='join-activity-container'>
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
                    <div className='pickSlot'>
                        <h1>Pick a Slot</h1>
                        <input type='date' ></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightContent;
