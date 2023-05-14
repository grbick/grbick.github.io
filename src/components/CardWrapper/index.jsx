import React, { useContext } from "react";
import "./cardWrapper.scss";
import { homeContext } from "../../context";
import CharacterCard from "../CharacterCard";
import {Link} from "react-router-dom";

const CardWrapper = () => {
  const { characters, firstTenResults, responseFail, loading } =
    useContext(homeContext);
  const firstHalf = characters?.filter((e, i) => i < 10);
  const secondHalf = characters?.filter((e, i) => i >= 10);
  const results = firstTenResults ? firstHalf : secondHalf;
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
        <h3>No Results! Try Again!</h3>
      </div>
    );

  return (
    <div className="cardWrapper">
      {results?.map((character) => (
        <Link key={character.id} to={`/character/${character.id}`}>
        <CharacterCard  character={character} />
        </Link>
      ))}
    </div>
  );
};

export default CardWrapper;
