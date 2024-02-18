import React from "react";
import ScheduledActivity from "./ScheduledActivity.jsx";

function Scheduled() {
    const activities = [
        {
            day: 13, dayOfWeek: 'mon', activityName: 'Kabaddi', activity: 'one', participants: [
                { src: '/images/persons/gnani.jpg' },
                { src: '/images/persons/dinesh.jpg' },
                { src: '/images/persons/gvk1.jpeg' }
            ]
        },
        {
            day: 15, dayOfWeek: 'wed', activityName: 'Cricket', activity: 'two', participants: [
                { src: '/images/persons/gnani.jpg' },
                { src: '/images/persons/gvk1.jpeg' }
            ]
        },
        {
            day: 17, dayOfWeek: 'fri', activityName: 'Tennis',
            activity: 'three', participants: [
                { src: '/images/persons/gvk1.jpeg' }
            ]
        },
        {
            day: 18, dayOfWeek: 'sat', activityName: 'BasketBall', activity: 'four', participants: [
                { src: '/images/persons/gvk1.jpeg' },
                { src: '/images/persons/gnani.jpg' },
                { src: '/images/persons/mahesh.jpg' },
                { src: '/images/persons/dinesh.jpg' }
            ]
        }
    ];

    return (
        <div className="calendar">
            {activities.map((activity, index) => (
                <ScheduledActivity key={index} {...activity} />
            ))}
        </div>
    );
}

export default Scheduled;