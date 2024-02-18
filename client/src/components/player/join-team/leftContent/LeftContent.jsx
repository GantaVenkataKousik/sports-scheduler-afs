import React from "react";
import '../styles/create.css';
import TeamA from "./TeamA/TeamA";
import TeamB from "./TeamB/TeamB";

function LeftContent() {
    return (
        <div className="jointeam-left-content">
            <h1>Join any Team</h1>
            <div className="teams">
                <TeamA />
                <TeamB />
            </div>
        </div>
    )
}
export default LeftContent;