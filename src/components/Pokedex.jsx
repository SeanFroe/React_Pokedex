import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-header"> Pokedex </h1>
      <div>
        {pokemon.map((i) => (
          <Pokecard
            key={i.id}
            id={i.id}
            name={i.name}
            img={i.img}
            type={i.type}
            base_experience={i.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
