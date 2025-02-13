import React from "react";

const POKE_API =
  "https://raw.githubusercontent.com/" +
  "PokeAPI/sprites/master/sprites/pokemon/";

// Induvidual Pokemon Card
const Pokecard = ({ id, name, type, base_experience, index }) => {
  const imgSrc = `${POKE_API}${id}.png`;

  return (
    <div
      className="Pokecard"
      style={{
        animation: "fadeIn 0.5s ease-in-out forwards",
        animationDelay: `${0.5 * index}s`, // Delay each card’s animation
        opacity: 0, // Start invisible for animation
      }}
    >
      <h3 className="Pokecard-title"> {name}</h3>
      <img className="Pokecard-img" src={imgSrc} alt={name} />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {base_experience}</div>
    </div>
  );
};

export default Pokecard;
