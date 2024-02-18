function ScheduledActivity({ teamName, day, dayOfWeek, activityName, activity, participants }) {
    return (
        <div className={`join-day-and-activity activity-${activity}`}>
            <div className="join-create-activity">
                <h1>{teamName}</h1>
                <h2>{activityName}</h2>
                <div className="join-participants">
                    {participants.map((participant, index) => (
                        <img key={index} src={participant.src} alt="" />
                    ))}
                </div>
            </div>
            <div className="day-joinBtn">
                <div className="join-day">
                    <h1>{day}</h1>
                    <p>{dayOfWeek}</p>
                </div>

                <div className="join-icon">
                    <i className="fa-solid fa-plus"></i>

                </div>
            </div>

        </div>
    );
}

export default ScheduledActivity;