import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import React, { useState } from 'react';


export default function App() {

  const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const [wordGuess, setWordGuess] = useState("")
const [guessedLetters, setGuessedLetters] = useState(alfabeto);
const incorrectGuesses = guessedLetters.filter((letter) => !wordGuess.includes(letter))
const [isGameStarted, setIsGameStarted] = useState(false)


const loser = incorrectGuesses.length >= 6
const winner = wordGuess.split('').every((letter) => guessedLetters.includes(letter))


  return (
    <div>
      <Jogo isGameStarted={isGameStarted}
      setIsGameStarted={setIsGameStarted} wordGuess={wordGuess} guessedLetters={guessedLetters} numberOfGuesses={incorrectGuesses.length} reveal={loser} setWordGuess={setWordGuess} words={palavras} setGuessedLetters={setGuessedLetters} loser={loser} winner={winner}/>
      <Letras alfabeto={alfabeto}
      activeLetters={guessedLetters.filter(letter => wordGuess.includes(letter))}
      inactiveLetters={incorrectGuesses}
      winner={winner}
      loser={loser}
      guessedLetters={guessedLetters}
      setGuessedLetters={setGuessedLetters}
      numberOfGuesses={incorrectGuesses.length}
      />
    </div>
  );
}