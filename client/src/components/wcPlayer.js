import React from 'react';
import wcPlayerCard from './WCPlayerCard';

const wcPlayer = (props) => {
    return (
        <div className='player-info'>
            {props.WCPlayerInfo.map(players => {
                return (
                    <wcPlayerCard key={players.id}
                        name={players.name}
                        id={players.id}
                        country={players.country}
                        searches={players.searches}   
                    />
                );
            })}
        </div>
    )
}


export default WCPlayer;
