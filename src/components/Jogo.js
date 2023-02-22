import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';
import React, { useState } from 'react';

const bodyParts = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

export default function Jogo({word, guessedLetters, numberOfGuesses, reveal}) {
    return (
    <div className="container-imagens">
      <div>
      {bodyParts.slice(0, 1).map((imagem, index)=>(<img className="size" src={imagem} alt='imagem' key={index}></img>))}
      </div>
      <div className="organizador">
      <button className="choose-word">Escolher Palavra</button>
      <div className="container-palavras">
      {word.split('').map((letter,index) => (<span style={{borderBottom:'3px solid black', width: '50px'}} key={index}><span style={{visibility:guessedLetters.includes(letter) || reveal?'visible':'hidden'}}>{letter}</span></span>))}
      </div>
      </div>
      </div>
    );
  }