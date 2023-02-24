import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import React, { useEffect, useState } from 'react';
import forca0 from '../assets/forca0.png';


export default function App() {

const [wordGuess, setWordGuess] = useState("")
const [guessedLetters, setGuessedLetters] = useState([])
const incorrectGuesses = guessedLetters.filter((letter) => !wordGuess.includes(letter))
const [imagem, setImagem] = useState (forca0)

const loser = incorrectGuesses.length >= 6
const winner = wordGuess.split('').every((letter) => guessedLetters.includes(letter))


  return (
    <div>
      <Jogo wordGuess={wordGuess} guessedLetters={guessedLetters} numberOfGuesses={incorrectGuesses.length} reveal={loser} setWordGuess={setWordGuess} words={palavras} imagem={imagem} setImagem={setImagem}/>
      <Letras activeLetters={guessedLetters.filter(letter => wordGuess.includes(letter))}
      inactiveLetters={incorrectGuesses}
      winner={winner}
      imagem={imagem} 
      setImagem={setImagem}
      loser={loser}
      guessedLetters={guessedLetters}
      setGuessedLetters={setGuessedLetters}
      numberOfGuesses={incorrectGuesses.length}
      />
    </div>
  );
}