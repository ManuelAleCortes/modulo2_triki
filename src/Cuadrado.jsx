import './App.css';

function Cuadrado({ value, onSquareClick }) {
    return (
      <button className="cuadrado" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  export default Cuadrado;