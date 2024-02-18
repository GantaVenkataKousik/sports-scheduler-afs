import React from "react";
import '../styles/create.css';
import Scheduled from "./Scheduled";

function LeftContent() {
    return (
        <div className="create-left-content create">

            <div className="create-new-team">

                <h1>Create New Team</h1>


                <form>
                    <section className="section">
                        <div className="inputbox">
                            <label htmlFor="">Select a Sport :  </label>
                            <select id="sports" name="sports">
                                <option value="football">Football</option>
                                <option value="basketball">Basketball</option>
                                <option value="soccer">Soccer</option>
                            </select>

                        </div>

                        <div className="inputbox">
                            <label htmlFor="">Enter Team Name : </label>

                            <input type="teamname" required="" />

                        </div>
                        <button>Create Team</button>
                    </section>
                </form>



            </div>

            <div className="created-teams">

                <h1>Teams Created by you</h1>
                <div className="create-left-bottom">            <Scheduled />
                </div>
            </div>

        </div>
    )
}
export default LeftContent;