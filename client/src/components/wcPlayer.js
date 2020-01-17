import React from 'react';
import wcPlayerCard from './wcPlayerCard';

const wcPlayer = (props) => {
    return (
        <div className='player-info'>
            {props.wcPlayerInfo.map(players => {
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


export default wcPlayer;
