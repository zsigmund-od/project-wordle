import React from "react";

function Guess({ word }) {
  const letters = word ? word.split("") : ["", "", "", "", ""];
  return (
    <p className="guess">
      {letters.map((letter, i) => (
        <span key={i} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
