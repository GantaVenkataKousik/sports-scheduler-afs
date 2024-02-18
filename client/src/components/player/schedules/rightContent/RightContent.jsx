import React from 'react';
import ScheduledActivity from './ScheduledActivity';

function RightContent() {
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
        <div className="schedule-join-create-right-content">
            <h1 className='heading'>
                Teams you created
            </h1>
            <div className="schedule-calendar">
                {activities.map((activity, index) => (
                    <ScheduledActivity key={index} {...activity} />
                ))}
            </div>
        </div>
    );
}

export default RightContent;
