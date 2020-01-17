import React from "react";

const WCPlayerCard = ({ name, id, country, searches }) => {
  return (
    <div className="usercard">
      <h2 className="player-name"><strong>Name: </strong> {name}</h2>
      <h2 className="player-id"><strong>ID: </strong>  {id}</h2>
      <h3 className="country"><strong>Country: </strong>  {country}</h3>
      <h3 className="searches"><strong>Searches: </strong>  {searches}</h3>
    </div>
  );
};

export default WCPlayerCard;
