function ScheduledActivity({ day, dayOfWeek, activityName, activity, participants }) {
    return (
        <div className={`create-day-and-activity activity-${activity}`}>
            <div className="day">
                <h1>{day}</h1>
                <p>{dayOfWeek}</p>
            </div>
            <div className="activity create-activity">
                <h2>{activityName}</h2>
                <div className="participants">
                    {participants.map((participant, index) => (
                        <img key={index} src={participant.src} style={{ '--i': index + 1 }} alt="" />
                    ))}
                </div>
            </div>
            <button className="deletebtn btn"><i className="fa-solid fa-trash"></i></button>
            <button className="deletebtn btn"><i className="fa-solid fa-share-from-square"></i></button>
        </div>
    );
}

export default ScheduledActivity;