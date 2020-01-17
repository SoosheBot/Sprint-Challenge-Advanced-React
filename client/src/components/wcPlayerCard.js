import React from 'react';

const wcPlayerCard = ({name,id,country,searches}) => {
    return (
        <div className="usercard">
            <h2 className='player-name'>Name: {name}</h2>
            <h2 className="player-id">ID: {id}</h2>
    <h3 className='country'>Country Represented: {country}</h3>
<h3 className='searches'>Searches for this player: {searches}</h3>
        </div>

      );
};

export default wcPlayerCard;