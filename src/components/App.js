import Jogo from "./Jogo";
import Letras from "./Letras";
import React, { useEffect, useState } from 'react';

const words = ['roberta', 'cachorro', 'maquiagem', 'disney', 'harry potter', 'futebol', 'river plate', 'filmes', 'doces', 'viajar', 'viagem', 'dubai', 'estados unidos', 'paris', 'shopping', 'princesas', 'amor', 'praia', 'videogames', 'livros', 'nostalgia', 'natal', 'irmandade', 'amigos']


export default function App() {

const [wordGuess, setWordGuess] = useState(() => {return words[Math.floor(Math.random()*words.length)]})
const [guessedLetters, setGuessedLetters] = useState([])
const incorrectGuesses = guessedLetters.filter((letter) => !wordGuess.includes(letter))

function addGuessedLetters(letter){
 if(guessedLetters.includes(letter) || loser || winner) return

 setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
}

useEffect(() => {const handler = ((e: KeyboardEvent) => {

  const key = e.key
  if (!key.match(/^[a-z]$/)) return

  e.preventDefault()
  addGuessedLetters(key)

}) 
document.addEventListener('keypress', handler)
return () => {document.removeEventListener('keypress', handler)
}
}, [guessedLetters])

const loser = incorrectGuesses.length >= 6
const winner = wordGuess.split('').every((letter) => guessedLetters.includes(letter))

  return (
    <div>
      <Jogo word={wordGuess} guessedLetters={guessedLetters} numberOfGuesses={incorrectGuesses.length} reveal={loser}/>
      <Letras activeLetters={guessedLetters.filter(letter => wordGuess.includes(letter))}
      inactiveLetters={incorrectGuesses}
      addGuessedLetters={addGuessedLetters}
      disabled={loser || winner}
      />
    </div>
  );
}