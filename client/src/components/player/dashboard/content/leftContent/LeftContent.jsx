import React from "react";
import LeftBottom from "./leftBottom/LeftBottom";
import Games from "./Games/Games";

function LeftContent() {
    return (
        <div className="create">
            <div className="left-content">
                <Games />
                <LeftBottom />
            </div>
        </div>  
    )
}
export default LeftContent;