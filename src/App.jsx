import pokemon from "./data/pokemon";
import Pokedex from "./components/Pokedex";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Pokedex pokemon={pokemon} />
      </div>
    </>
  );
}

export default App;
