import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinBanner from "../WinBanner/WinBanner";
import LoseBanner from "../LoseBanner/LoseBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("active"); // | 'win' | 'lose'

  function submitGuess(guess) {
    if (guesses.includes(guess)) {
      alert(`Already guessed '${guess}'!`);
      return;
    }

    const guessStatus = checkGuess(guess, answer);
    const nextGuesses = [...guesses, guessStatus];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameState("win");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState("lose");
    }
  }

  return (
    <>
      {gameState === "win" && <WinBanner numGuesses={guesses.length} />}
      {gameState === "lose" && <LoseBanner answer={answer} />}
      <GuessResults guesses={guesses} />
      <GuessInput onSubmit={submitGuess} disabled={gameState !== "active"} />
    </>
  );
}

export default Game;
