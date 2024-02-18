import React from "react";
import ScheduledActivity from "./ScheduledActivity.jsx";

function Scheduled() {
    const activities = [
        {
            teamName: "Scavengers",
            day: 13, dayOfWeek: 'Mon', activityName: 'Kabaddi', activity: 'one', participants: [
                { src: '/images/persons/gnani.jpg' },
                { src: '/images/persons/dinesh.jpg' },
                { src: '/images/persons/gvk1.jpeg' }
            ]
        },
        {
            teamName: "Knight Riders",
            day: 15, dayOfWeek: 'Wed', activityName: 'Cricket', activity: 'two', participants: [
                { src: '/images/persons/gnani.jpg' },
                { src: '/images/persons/gvk1.jpeg' }
            ]
        },
        {
            teamName: "Ranji Champs",
            day: 17, dayOfWeek: 'Fri', activityName: 'Tennis',
            activity: 'three', participants: [
                { src: '/images/persons/gvk1.jpeg' }
            ]
        },
        {
            teamName: "Achievers",
            day: 18, dayOfWeek: 'Sat', activityName: 'BasketBall', activity: 'four', participants: [
                { src: '/images/persons/gvk1.jpeg' },
                { src: '/images/persons/gnani.jpg' },
                { src: '/images/persons/mahesh.jpg' },
                { src: '/images/persons/dinesh.jpg' },
                { src: '/images/persons/gvk1.jpeg' },
                { src: '/images/persons/gnani.jpg' },
                { src: '/images/persons/mahesh.jpg' }
            ]
        },

    ];

    return (
        <div className="join-calendar">
            {activities.map((activity, index) => (
                <ScheduledActivity key={index} {...activity} />
            ))}
        </div>
    );
}

export default Scheduled;