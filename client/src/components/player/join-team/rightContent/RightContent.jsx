import React from 'react';
import GameComponent from './GameComponent';

function RightContent() {
    const today = new Date();

    // Calculate tomorrow's date
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Format tomorrow's date as YYYY-MM-DD (required format for input type="date")
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

    return (
        <div className="jointeam-right-content">
            <div className='create-activities'>
                <div className='jointeam-create-activity-container'>
                    <div className='pickSport'>
                        <h1>Sport Picked</h1>
                        <div className='joinSports'>
                            <div className='jointeam-activity-container'>

                                <GameComponent
                                    imgSrc='/images/cricket.avif'
                                    altText='running'
                                    gameName='Cricket'
                                />

                            </div>
                        </div>
                    </div>
                    <div className='pickSlot'>
                        <h1>Slot Picked</h1>
                        <input type='date' value={tomorrowFormatted} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightContent;
