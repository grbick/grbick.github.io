import React from "react";
import "./characterWrapper.scss";


const CharacterWrapper = ({selectedCharacter, loading, responseFail}) => {

  if (loading) {
    return (
      <div className="cardWrapper">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (responseFail)
    return (
      <div className="cardWrapper">
        <h3>No character found...</h3>
      </div>
    );
  return (
    <div className="characterWrapper">
      <h2>{selectedCharacter?.name}</h2>
      <img src={selectedCharacter?.image} alt="" />
      <h4 className={selectedCharacter?.status === 'Alive' ? 'alive': selectedCharacter?.status === 'Dead' ? 'dead': 'unknown'}>{selectedCharacter?.status}</h4>
      <p><b>Gender: </b>{selectedCharacter?.gender}</p>
      <p><b>Origin: </b>{selectedCharacter?.origin.name}</p>
      <p><b>Species: </b>{selectedCharacter?.species}</p>
    </div>
  );
};

export default CharacterWrapper;
