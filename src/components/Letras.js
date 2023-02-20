const Keyboard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


export default function App() {
    return (
    <div class="organizador-letras">
      <div className="container-letras">
        {Keyboard.map((letter)=>(<button class="a">{letter}</button> ))}
      </div>
    </div>
    )
  }