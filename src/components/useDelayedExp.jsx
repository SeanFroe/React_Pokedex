import { useState, useEffect } from "react";

const useDelayedExp = (pokemon) => {
  const [currentExp, setCurrentExp] = useState(0);
  const [showResults, setShowResults] = useState(false); // Controls win/tie message visability

  useEffect(() => {
    const delay = 600; // Start with a small delay for first card

    // Delay for Exp to Increment and add up
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

  return { currentExp, showResults };
};

export default useDelayedExp;
