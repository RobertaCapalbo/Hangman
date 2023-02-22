import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';
import React, { useEffect, useState } from 'react';

export default function Jogo({wordGuess, guessedLetters, numberOfGuesses, reveal, setWordGuess, words}) {

  const bodyParts = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

  const [hangman, setHangman] = useState([forca0])

  function chooseWord(){
    const newWord = words[Math.floor(Math.random()*words.length)];
    setWordGuess(newWord);
  }

    useEffect(() => {
      if (numberOfGuesses > 0){
        const hangmanParts = bodyParts.slice(numberOfGuesses - 1, numberOfGuesses)
        setHangman(hangmanParts)
       }   
    }, [numberOfGuesses])

    return (
    <div className="container-imagens">
      <div>
      {hangman.map((imagem, index) => {
      return <img className="size" src={imagem} alt='imagem' key={index}/>
      })}
      </div>
      <div className="organizador">
      <button className="choose-word" onClick={chooseWord}>Escolher Palavra</button>
      <div className="container-palavras">
      {wordGuess.split('').map((letter,index) => (<span style={{borderBottom:'3px solid black', width: '50px'}} key={index}><span style={{visibility:guessedLetters.includes(letter) || reveal?'visible':'hidden', color: !guessedLetters.includes(letter) && reveal ? 'red' : 'green'}}>{letter}</span></span>))}
      </div>
      </div>
      </div>
    );
  }