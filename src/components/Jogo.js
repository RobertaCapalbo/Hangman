import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';
import React, { useEffect, useState } from 'react';

export default function Jogo({wordGuess, guessedLetters, numberOfGuesses, reveal, setWordGuess, words, setGuessedLetters, loser, winner}) {

  const bodyParts = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

  function chooseWord(){
    const newWord = words[Math.floor(Math.random()*words.length)];
    setWordGuess(newWord);
    setGuessedLetters([])
  }

    return (
    <div className="container-imagens">
      <div>
      {bodyParts.slice(numberOfGuesses, numberOfGuesses + 1).map((imagem, index) => {
      return <img className="size" src={imagem} alt='imagem' key={index} data-test="game-image"/>
      })}
      </div>
      <div className="organizador">
      <button className="choose-word" data-test="choose-word" onClick={chooseWord}>Escolher Palavra</button>
      <div className="container-palavras">
          {wordGuess.split('').map((letter, index) => (
            <span
              key={index}>
              <span style={{
                width: '50px',
                color: loser ? 'red' : winner ? 'green' : 'black',
              }}>
                {guessedLetters.includes(letter) || reveal ? letter : <span style={{color: 'black'}}>{"_"}</span>}
              </span>
            </span>))}
        </div>
      </div>
      </div>
    );
  }