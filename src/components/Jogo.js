import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';

export default function App() {
    const palavra = 'roberta'
    return (
    <div className="container-imagens">
      <div>
        <img className="size none" src={forca0} alt='imagem'></img>
        <img className="size none" src={forca1} alt='imagem'></img>
        <img className="size none" src={forca2} alt='imagem'></img>
        <img className="size none" src={forca3} alt='imagem'></img>
        <img className="size none" src={forca4} alt='imagem'></img>
        <img className="size none" src={forca5} alt='imagem'></img>
        <img className="size" src={forca6} alt='imagem'></img>
      </div>
      <div className="organizador">
      <button className="choose-word">Escolher Palavra</button>
      <div className="container-palavras">
      {palavra}
      </div>
      </div>
      </div>
    );
  }