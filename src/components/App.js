import Jogo from "./Jogo";
import Letras from "./Letras";
import React, { useEffect, useState } from 'react';

const words = ['roberta', 'cachorro', 'maquiagem', 'disney', 'harry potter', 'futebol', 'river plate', 'filmes', 'doces', 'viajar', 'viagem', 'dubai', 'estados unidos', 'paris', 'shopping', 'princesas', 'amor', 'praia', 'videogames', 'livros', 'nostalgia', 'natal', 'irmandade', 'amigos']


export default function App() {

const [wordGuess, setWordGuess] = useState(() => {return words[Math.floor(Math.random()*words.length)]})
const [guessedLetters, setGuessedLetters] = useState([])
const incorrectGuesses = guessedLetters.filter((letter) => !wordGuess.includes(letter))

function addGuessedLetters(letter){
 if(guessedLetters.includes(letter)) return

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

  return (
    <div>
      <Jogo word={wordGuess} guessedLetters={guessedLetters} numberOfGuesses={incorrectGuesses.length}/>
      <Letras />
    </div>
  );
}