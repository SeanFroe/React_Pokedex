import React from "react";

const pokecard = ({ name, img, type, EXP }) => {
  return (
    <div className="pokeCard">
      <h3 className="pokeCard-name"> {name}</h3>
      <img className="pokeCard-img" src={img} alt="" />
      <ul>
        <li>Type: {type}</li>
        <li>EXP: {EXP}</li>
      </ul>
    </div>
  );
};

export default pokecard;
