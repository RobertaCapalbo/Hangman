import { useEffect } from "react"

export default function Letras({activeLetters, inactiveLetters, addGuessedLetters, winner, loser, guessedLetters, setGuessedLetters}) {

  const Keyboard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


  function addGuessedLetters(letter){
    
    if(guessedLetters.includes(letter) || loser || winner) return
   
    setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
   }
   
   useEffect(() => {const handler = ((e: KeyboardEvent) => {
   
     const key = e.key
     if (!key.match(/^[a-z]$/)) return;
   
     e.preventDefault()
     addGuessedLetters(key)
   
   }) 
   document.addEventListener('keypress', handler)
   return () => {document.removeEventListener('keypress', handler)
   }
   }, [guessedLetters])
   
    return (
    <div class="organizador-letras">
      <div className="container-letras">
        {Keyboard.map((letter)=> {const isActive = !activeLetters.includes(letter)
        const isInactive = !inactiveLetters.includes(letter)
       return(
        <button class="a" onClick={() => addGuessedLetters(letter)} isActive={isActive && isInactive}>{letter}</button>
       )
      }
        )}
      </div>
    </div>
    )
  }