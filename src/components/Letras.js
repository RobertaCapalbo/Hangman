
export default function Letras({activeLetters, inactiveLetters, addGuessedLetters, winner, loser, guessedLetters, setGuessedLetters}) {

  const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


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
        <button class="a" onClick={() => addGuessedLetters(letter)} isActive={isActive && isInactive} data-test="letter" style={{backgroundColor: guessedLetters.includes(letter) ? '#9FAAB5' : '#E1ECF4'}}>{letter}</button>
       )
      }
        )}
      </div>
    </div>
    )
  }