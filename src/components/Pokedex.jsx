import React, { useState, useEffect } from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemon, exp, isWinner, isTie }) => {
  //
  //
  //---------------------- TIMER EFFECTS ---------------------------------------------

  const [currentExp, setCurrentExp] = useState(0);
  const [showResults, setShowResults] = useState(false); // Controls win/tie message visability

  useEffect(() => {
    const delay = 600; // Start with a small delay for first card

    pokemon.forEach((p, cardIdx) => {
      setTimeout(() => {
        setCurrentExp((prevExp) => prevExp + p.base_experience);
      }, delay * (cardIdx + 1));
    });

    //Delay showing win/tie message until after card appears
    setTimeout(() => {
      setShowResults(true);
    }, delay * pokemon.length + 500); //Extra delay after last card
  }, [pokemon]);

  let winMessage = null;
  let tieMessage = null;
  //-------------------------------------------------------------------------------------
  //
  //------------------------ Win Conditions ---------------------------------------------
  if (isWinner) {
    winMessage = <p className="Pokedex-winner"> THIS HAND WINS!</p>;
  }
  if (isTie) {
    tieMessage = <p className="Pokedex-tie"> THIS IS A TIE!</p>;
  }
  //--------------------------------------------------------------------------------------

  return (
    <div className="Pokedex">
      <h1 className="Pokedex-header"> Pokedex </h1>
      <div className="Pokedex-cards">
        {pokemon.map((p, index) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            img={p.img}
            type={p.type}
            base_experience={p.base_experience}
            index={index} // index is for animation delay
          />
        ))}
      </div>

      <h4 className="Pokedex-exp-total">Total experience: {currentExp}</h4>
      {showResults && (
        <>
          {winMessage}
          {tieMessage}
        </>
      )}
    </div>
  );
};

export default Pokedex;
