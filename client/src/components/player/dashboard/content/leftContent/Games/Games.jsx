import React from 'react'
import GameComponent from './GameComp'

function Games() {
    return (
        <div className='activities'>
            <h1>Available Sports</h1>
            <div className='activity-container'>
                <GameComponent
                    imgSrc='/images/t.webp'
                    altText='Tennis'
                    gameName='Tennis'
                    cnt='one'
                />
                <GameComponent
                    imgSrc='/images/vb.webp'
                    altText='hiking'
                    gameName='VolleyBall'
                    cnt='two'
                />
                <GameComponent
                    imgSrc='/images/cricket.avif'
                    altText='running'
                    gameName='Cricket'
                    cnt='three'
                />                
                <GameComponent
                    imgSrc='/images/bb.jpg'
                    altText='cycling'
                    gameName='BasketBall'
                    cnt='four'
                />
                <GameComponent
                    imgSrc='/images/k2.jpg'
                    altText='yoga'
                    gameName='Kabaddi'
                    cnt='five'
                />
                <GameComponent
                    imgSrc='/images/fb.jpg'
                    altText='swimming'
                    gameName='FootBall'
                    cnt='six'
                />
            </div>
        </div>
    )
}

export default Games
