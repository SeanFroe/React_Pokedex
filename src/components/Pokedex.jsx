import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemon, exp, isWinner, isTie }) => {
  let winMessage = null;
  let tieMessage = null;

  if (isWinner) {
    winMessage = <p className="Pokedex-winner"> THIS HAND WINS!</p>;
  }
  if (isTie) {
    tieMessage = <p className="Pokedex-tie"> THIS IS A TIE!</p>;
  }
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-header"> Pokedex </h1>
      <div>
        {pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            img={p.img}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>

      <h4 className="Pokedex-exp-total">Total experience: {exp}</h4>
      {winMessage}
      {tieMessage}
    </div>
  );
};

export default Pokedex;
