import React from "react";
import { Link } from 'react-router-dom';

function ScheduledActivity({ day, dayOfWeek, activityName, activity, participants }) {
    return (
        <div className={`day-and-activity activity-${activity}`}>
            <div className="day">
                <h1>{day}</h1>
                <p>{dayOfWeek}</p>
            </div>
            <div className="activity">
                <h2>{activityName}</h2>
                <div className="participants">
                    {participants.map((participant, index) => (
                        <img key={index} src={participant.src} style={{ '--i': index + 1 }} alt="" />
                    ))}
                </div>
            </div>
            <Link to="/player/join" className="btn">Join</Link>
        </div>
    );
}

export default ScheduledActivity;