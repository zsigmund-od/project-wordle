import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  const guessIndices = range(NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {guessIndices.map((guessIndex) => (
        <Guess key={guessIndex} word={guesses.at(guessIndex)} />
      ))}
    </div>
  );
}

export default GuessResults;
