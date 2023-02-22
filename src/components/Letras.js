const Keyboard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


export default function App({activeLetters, inactiveLetters, addGuessedLetters, disabled=false}) {
    return (
    <div class="organizador-letras">
      <div className="container-letras">
        {Keyboard.map((letter)=> {const isActive = !activeLetters.includes(letter)
        const isInactive = !inactiveLetters.includes(letter)
       return(
        <button class="a" onClick={() => addGuessedLetters(letter)} isActive={isActive && isInactive} disabled={!(isActive && isInactive)||disabled}>{letter}</button>
       )
      }
        )}
      </div>
    </div>
    )
  }