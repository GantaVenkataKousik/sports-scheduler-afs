import React from "react";
import '../styles/create.css';
import Scheduled from "./Scheduled";

function LeftContent() {
    return (
        <div className="create-left-content create">
            <h1>Pick a team to Join
            </h1>
            <div className="join-left-bottom">            <Scheduled /></div>

        </div>
    )
}
export default LeftContent;