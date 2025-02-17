import React from "react";
import Pokedex from "./Pokedex";

const Pokegame = ({ pokemon }) => {
  let hand1 = [];
  let hand2 = [...pokemon];

  // ensure each hand gets 4 cards
  while (hand1.length < 4) {
    const randIdx = Math.floor(Math.random() * hand2.length);
    const randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }

  //Remaining 4 Pokemon go to hand2 (ensuring always 4)
  hand2 = hand2.slice(0, 4);
  const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div className="Pokegame">
      <div className="Pokegame-hand">
        <Pokedex
          pokemon={hand1}
          exp={exp1}
          isWinner={exp1 > exp2}
          isTie={exp1 === exp2}
        />
      </div>
      <div className="Pokegame-hand">
        <Pokedex
          pokemon={hand2}
          exp={exp2}
          isWinner={exp2 > exp1}
          isTie={exp1 === exp2}
        />
      </div>
      {/* Winning card animation
      {exp1 > exp2 && (
        <img
          className="Winning-card fly-in-hand1"
          src="winning_card_image.png"
          alt="Winning Card"
        />
      )}
      {exp2 > exp1 && (
        <img
          className="Winning-card fly-in-hand2"
          src="winning_card_image.png"
          alt="Winning Card"
        />
      )} */}
    </div>
  );
};

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
};

export default Pokegame;
