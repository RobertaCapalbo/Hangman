import { useEffect } from "react"
import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';

export default function Letras({activeLetters, inactiveLetters, addGuessedLetters, winner, loser, guessedLetters, setGuessedLetters, numberOfGuesses, imagem, setImagem}) {

  const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


  function addGuessedLetters(letter){
    
    if(guessedLetters.includes(letter) || loser || winner) return
   
    setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
   }
   
  
  //  useEffect(() => {const handler = ((e: KeyboardEvent) => {
  //    e.preventDefault()
  //    const key = e.key
  //    if (!key.match(/^[a-z]$/)) return;
   
    
  //    addGuessedLetters(key)
   
  //  }) 
  //  document.addEventListener('keypress', handler)
  //  return () => {document.removeEventListener('keypress', handler)
  //  }
  //  }, [guessedLetters])
   
    return (
    <div class="organizador-letras">
      <div className="container-letras">
        {alfabeto.map((letter)=> {const isActive = !activeLetters.includes(letter)
        const isInactive = !inactiveLetters.includes(letter)
       return(
        <button class="a" onClick={() => addGuessedLetters(letter)} isActive={isActive && isInactive} data-test="letter">{letter}</button>
       )
      }
        )}
      </div>
    </div>
    )
  }