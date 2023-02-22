import Jogo from "./Jogo";
import Letras from "./Letras";
import React, { useEffect, useState } from 'react';


export default function App() {

const words = ['roberta', 'cachorro', 'maquiagem', 'disney', 'harry potter', 'futebol', 'river plate', 'filmes', 'doces', 'viajar', 'viagem', 'dubai', 'estados unidos', 'paris', 'shopping', 'princesas', 'amor', 'praia', 'videogames', 'livros', 'nostalgia', 'natal', 'irmandade', 'amigos'];

const [wordGuess, setWordGuess] = useState("")
const [guessedLetters, setGuessedLetters] = useState([])
const incorrectGuesses = guessedLetters.filter((letter) => !wordGuess.includes(letter))

const loser = incorrectGuesses.length >= 6
const winner = wordGuess.split('').every((letter) => guessedLetters.includes(letter))


  return (
    <div>
      <Jogo wordGuess={wordGuess} guessedLetters={guessedLetters} numberOfGuesses={incorrectGuesses.length} reveal={loser} setWordGuess={setWordGuess} words={words}/>
      <Letras activeLetters={guessedLetters.filter(letter => wordGuess.includes(letter))}
      inactiveLetters={incorrectGuesses}
      winner={winner}
      loser={loser}
      guessedLetters={guessedLetters}
      setGuessedLetters={setGuessedLetters}
      />
    </div>
  );
}