import React from "react";
import { Link } from 'react-router-dom';

function CreateJoin() {
    return (
        <div className="personal-bests">
            <h1>Create & Join</h1>
            <div className="mobile-personal-bests-res">
                <div className="personal-bests-container">
                    <div className="best-item box-one">
                        <p className="cj">Create a team</p>
                        <Link to="/player/create" className="btn">Create</Link>
                    </div>
                    <div className="best-item box-one two">
                        <p className="cj">Join a team</p>
                        <Link to="/player/join" className="btn">Join</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateJoin;