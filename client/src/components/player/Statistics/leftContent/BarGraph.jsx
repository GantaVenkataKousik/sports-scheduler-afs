import React from 'react';
function Statistics() {
    return (
        <div className="simple-bar-chart">

            <div className="item" style={{ '--clr': '#963D97', '--val': 80 }}>
                <div className="label">Jan</div>
                <div className="value">80%</div>
            </div>

            <div className="item" style={{ '--clr': '#FCB72A', '--val': 50 }}>
                <div className="label">Feb</div>
                <div className="value">50%</div>
            </div>

            <div className="item" style={{ '--clr': '#F8821A', '--val': 100 }}>
                <div className="label">Mar</div>
                <div className="value">100%</div>
            </div>

            <div className="item" style={{ '--clr': '#FCB72A', '--val': 15 }}>
                <div className="label">Apr</div>
                <div className="value">15%</div>
            </div>

            <div className="item" style={{ '--clr': '#963D97', '--val': 1 }}>
                <div className="label">May</div>
                <div className="value">1%</div>
            </div>

            <div className="item" style={{ '--clr': '#069CDB', '--val': 90 }}>
                <div className="label">June</div>
                <div className="value">90%</div>
            </div>

            <div className="item" style={{ '--clr': '#963D97', '--val': 80 }}>
                <div className="label">July</div>
                <div className="value">80%</div>
            </div>

            <div className="item" style={{ '--clr': '#FCB72A', '--val': 50 }}>
                <div className="label">Aug</div>
                <div className="value">50%</div>
            </div>

            <div className="item" style={{ '--clr': '#F8821A', '--val': 100 }}>
                <div className="label">Sep</div>
                <div className="value">100%</div>
            </div>

            <div className="item" style={{ '--clr': '#E0393E', '--val': 15 }}>
                <div className="label">Oct</div>
                <div className="value">15%</div>
            </div>

            <div className="item" style={{ '--clr': '#963D97', '--val': 1 }}>
                <div className="label">Nov</div>
                <div className="value">1%</div>
            </div>

            <div className="item" style={{ '--clr': '#069CDB', '--val': 90 }}>
                <div className="label">Dec</div>
                <div className="value">90%</div>
            </div>
        </div>
    );
}

export default Statistics;
