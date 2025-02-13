import React from "react";

import Pokegame from "./components/Pokegame";
import Pokedex from "./components/Pokedex";
import pokemon from "./data/pokemon";
import "../scss/App.scss";
import "../scss/Pokecard.scss";
import "../scss/Pokedex.scss";

function App() {
  return (
    <>
      <div className="App">
        <Pokegame pokemon={pokemon} />
      </div>
    </>
  );
}

export default App;
