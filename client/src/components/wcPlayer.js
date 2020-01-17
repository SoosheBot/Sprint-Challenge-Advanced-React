import React from 'react';
import WCPlayerCard from './WCPlayerCard';

const WCPlayer = (props) => {
    return (
        <div className='player-info'>
            {props.WCPlayerInfo.map(players => {
                return (
                    <WCPlayerCard key={players.id}
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
