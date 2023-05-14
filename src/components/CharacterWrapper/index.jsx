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
      <p>{selectedCharacter?.name}</p>
      <img src={selectedCharacter?.image} alt="" />
      <p>{selectedCharacter?.location.name}</p>
    </div>
  );
};

export default CharacterWrapper;
