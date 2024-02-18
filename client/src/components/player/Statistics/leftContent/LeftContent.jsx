import React from "react";
import BarGraph from "./BarGraph";

function LeftContent() {
    return (
        <div className="create-left-content create">
            <h1>Your Analytics</h1>
            <div className="join-left-bottom">
                <div className="graphs">
                    <div className="barGraph">
                        <h1>For the past Year</h1>
                        <BarGraph />
                    </div>
                    <div className="pieGraph">
                        <h1>SuccessRate</h1>
                        <div class="pie">
                            <div class="html failure">19%</div>
                            <div class="css success">81%</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default LeftContent;