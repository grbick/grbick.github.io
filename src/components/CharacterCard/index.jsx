import React from "react";
import "./characterCard.scss";

const CharacterCard = ({ character }) => {
  return (
    <div className="characterCard">
      <img src={character.image} alt="" />
      <div className={character.status === 'Alive' ? 'characterStatus alive': character.status === 'Dead' ? 'characterStatus dead': 'characterStatus'}>
          <p>{character.status}</p>
        </div>
      <p className="characterName"><b>{character.name}</b></p>
      <p>Last known location:<br />{character.location.name}</p>
    </div>
  );
};

export default CharacterCard;
