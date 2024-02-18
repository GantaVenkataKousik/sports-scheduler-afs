import React from 'react';

function RightContent() {
    return (
        <div className="right-content">
            <div className="user-info">
                <div className="icon-container">
                    <i className="fa fa-bell nav-icon"></i>
                    <i className="fa fa-message nav-icon"></i>
                </div>
                <h4 className="user-name">Ganta Venkata Kousik</h4>
                <img src="/images/persons/gvk1.jpeg" alt="user" />
            </div>


            <div className="friends-activity" style={{ marginTop: '2rem' }}>
                <h1>Recent Updates</h1>
                <div className="card-container">
                    <div className="card">
                        <div className="card-user-info">
                            <img src="/images/persons/gnani.jpg" alt="" />
                            <h2>Gnani</h2>
                        </div>
                        <img className="card-img" src="/images/recent-match.jpg" alt="" />
                        <p>PopUp on hover!Detailed Info</p>
                    </div>
                    <div className="mobile-personal-bests-res">
                        <div className="personal-bests-container">
                            <div className="best-item box-one">
                                <p>Upgrade to latest Version</p>
                                <button className="btn">Upgrade</button>
                            </div>
                            <div className="best-item box-one two">
                                <p>Download the mobile app</p>
                                <button className="btn">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightContent;
