
import React from 'react'
import Player from '../Player';



function TeamA() {
    const teammates = [
        {
            teamName: "Achievers", participants: [
                { src: '/images/persons/gvk1.jpeg', userName: 'GVK' },
                { src: '/images/persons/gnani.jpg', userName: 'Gnani' },
                { src: '/images/persons/mahesh.jpg', userName: 'Mahesh' },
                { src: '/images/persons/dinesh.jpg', userName: 'Dinesh' },
                { src: '/images/persons/gvk1.jpeg', userName: 'GVK' },
                { src: '/images/persons/gnani.jpg', userName: 'Gnani' },
                { src: '/images/persons/mahesh.jpg', userName: 'Mahesh' },
                { src: '/images/persons/gvk2.jpg', userName: 'VenkataKousik' },

            ]
        },

    ];

    return (
        <section className="teamA">
            <div className="tA">
                {teammates.map((team, index) => (
                    <div key={index}>
                        <h2>{team.teamName}</h2>
                        <div className="players">
                            {team.participants.map((participant, idx) => (
                                <Player key={idx} url={participant.src} name={participant.userName} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <button className='btn'>
                Join
            </button>
            <div classNames="slotes-leftA">

            </div>
        </section>
    );
}

export default TeamA;
