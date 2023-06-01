import React, { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };



  return (
    <div className="container">
      <div className="card">
        <h1>Contador Manual</h1>
        <div>
          <h2 className>{contador}</h2>
          <div className="botones">
            <button className="botoncontadormenos" onClick={decrementarContador}>
              Decrementar
            </button>
            <button className="botoncontadorcero" onClick={reiniciarContador}>
              Reiniciar
            </button>
            <button className="botoncontadormas" onClick={incrementarContador}>
              Incrementar
            </button>
          </div>
        </div>
      </div>
      <h3>Mauricio Joaquin Martinez Chan</h3>
    </div>
  );
}

export default App;
