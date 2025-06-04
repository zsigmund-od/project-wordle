import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function submitGuess(guess) {
    if (guesses.includes(guess)) {
      alert(`Already guessed '${guess}'!`);
      return;
    }
    setGuesses([...guesses, checkGuess(guess, answer)]);
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onSubmit={submitGuess} />
    </>
  );
}

export default Game;
