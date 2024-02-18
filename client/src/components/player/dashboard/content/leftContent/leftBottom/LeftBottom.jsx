import React from 'react';
import Scheduled from './Scheduled';
import CreateJoin from './CreateJoin';

export default function LeftBottom() {
    return (
        <div className="left-bottom">
            <div className="weekly-schedule">
                <h1>Scheduled Sports</h1>
                <Scheduled />
            </div>

            <CreateJoin />

        </div>
    )
}
