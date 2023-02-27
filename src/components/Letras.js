
export default function Letras({alfabeto, activeLetters, inactiveLetters, addGuessedLetters, winner, loser, guessedLetters, setGuessedLetters}) {


  function addGuessedLetters(letter){
    
    if(guessedLetters.includes(letter) || loser || winner) return
   
    setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
   }
   

    return (
    <div class="organizador-letras">
      <div className="container-letras">
        {alfabeto.map((letter)=> {const isActive = !activeLetters.includes(letter)
        const isInactive = !inactiveLetters.includes(letter)
       return(
        <button class="a"  disabled={guessedLetters.includes(letter)} onClick={() => addGuessedLetters(letter)} isActive={isActive && isInactive} data-test="letter" style={{backgroundColor: guessedLetters.includes(letter) ? '#9FAAB5' : '#E1ECF4'}}>{letter}</button>
       )
      }
        )}
      </div>
    </div>
    )
  }