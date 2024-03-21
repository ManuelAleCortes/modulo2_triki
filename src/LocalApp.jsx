import Cuadrado from './Cuadrado';
// no utilidad, hook

function LocalApp({cuadros , handleClick}) {
    
  return (
    <div className="tablero">
      <div className="fila">
        {cuadros.slice(0, 3).map((value, index) => (
          <Cuadrado key={index} value={value} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
      <div className="fila">
        {cuadros.slice(3, 6).map((value, index) => (
          <Cuadrado key={index + 3} value={value} onSquareClick={() => handleClick(index + 3)} />
        ))}
      </div>
      <div className="fila">
        {cuadros.slice(6, 9).map((value, index) => (
          <Cuadrado key={index + 6} value={value} onSquareClick={() => handleClick(index + 6)} />
        ))}
      </div>
    </div>
  );
}
  
  
  export default LocalApp;
  