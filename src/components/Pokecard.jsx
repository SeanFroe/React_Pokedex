import React from "react";

const Pokecard = ({ id, name, type, base_experience }) => {
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name"> {name}</h3>
      <img
        className="Pokecard-img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <ul>
        <li>Type: {type}</li>
        <li>EXP: {base_experience}</li>
      </ul>
    </div>
  );
};

export default Pokecard;
