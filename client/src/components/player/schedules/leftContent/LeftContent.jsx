import React from "react";
import '../styles/create.css';
import Scheduled from "./Scheduled";

function LeftContent() {
    return (
        <div className="schedule-create-left-content create">
            <div className="joined">

                <h1 className="teamsjoined">Tems You Joined</h1>
                <div className="schedule-join-left-bottom">
                    <Scheduled /></div>
            </div>


        </div>
    )
}
export default LeftContent;