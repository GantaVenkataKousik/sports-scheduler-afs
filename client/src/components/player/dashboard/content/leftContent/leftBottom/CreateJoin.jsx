import React from "react";

function CreateJoin() {
    return (
        <div className="personal-bests">
            <h1>Create & Join</h1>
            <div className="mobile-personal-bests-res">
                <div className="personal-bests-container">
                    <div className="best-item box-one">
                        <p className="cj">Create a team</p>
                        <button className="btn">Create</button>
                    </div>
                    <div className="best-item box-one two">
                        <p className="cj">Join a team</p>
                        <button className="btn">Join</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateJoin;