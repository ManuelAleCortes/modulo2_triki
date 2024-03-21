import logo from './logo.svg';
import './App.css';
import AppLocal from './LocalApp';
import { useState } from "react";
function App() {
  const texto = "reset"
  const texto1 = "Proximo simbolo  "
  const texto2 = "X"
  const texto3 = "ganador?"
  const [cuadros, setCuadros] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  const [totalClics, setTotalClics] = useState(0);
  const [simbolo1, setSimbolo] = useState("X");

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
  if (cuadros[index] === "-") {
    const newCuadros = [...cuadros];
    newCuadros[index] = (totalClics % 2 === 0) ? "X" : "O";
    setCuadros(newCuadros);
    setTotalClics(totalClics + 1);
    if (totalClics % 2 != 0){
      setSimbolo("X")
    }else{
      setSimbolo("O")
    }
    console.log({totalClics})
  }
  setTotalClics(totalClics + 1);
  
};
const calculateWinner = (squares) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
  
};
  const winner = calculateWinner(cuadros);
  let status;
  if (winner) {
    status = 'Ganador: ' + winner;
  } else if (cuadros.every((square) => square !== null)) {
    status = 'Empate';
  } else {
    status = "..."
  }

  return (
    <div className='ventana'>
      <div>
        <div className='ventana-superior'>
          <button className='ventana-superior-izquierda' onClick={() => window.location.reload()}>
              <span>{texto}</span>
          </button>
          <div className='ventana-superior-derecha'>
          <span>{texto1}{simbolo1}</span>
          </div>
        </div>
        <AppLocal cuadros={cuadros} handleClick={handleClick}/>
        <div className='ventana-inferior'>
        <span>{status}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
