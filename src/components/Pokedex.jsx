import Pokecard from "./Pokecard";
import useDelayedExp from "./useDelayedExp";

const Pokedex = ({ pokemon, exp, isWinner, isTie }) => {
  //
  //---------------------- TIMER EFFECTS ---------------------------------------------
  const { currentExp, showResults } = useDelayedExp(pokemon);

  //------------------------ Win Conditions ---------------------------------------------

  let winMessage = null;
  let tieMessage = null;

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

      {showResults && (
        <>
          {winMessage}
          {tieMessage}
        </>
      )}
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
    </div>
  );
};

export default Pokedex;
