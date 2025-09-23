import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  const [numeroUsuario, setNumeroUsuario] = useState("");
  const [intentos, setIntentos] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [mostrarInicio, setMostrarInicio] = useState(true);
  
useEffect(() => {
    generarNumeroAleatorio();
  }, []);

  const generarNumeroAleatorio = () => {
    const numero = Math.floor(Math.random() * 100) + 1;
    setNumeroAleatorio(numero);
  };

  const reiniciarJuego = () => {
    setMostrarInicio(true);
  };

  if (mostrarInicio) {
    return (
      <div className="App">
        <div className="container">
          <div className="texto-inicio">Al iniciar</div>
          <h1>Adivina el número</h1>
          <p>Ingresa un número entre 1 y 100</p>
          <p>Cantidad de intentos: 0</p>
          <input
            type="number"
            value={numeroUsuario}
            onChange={(e) => setNumeroUsuario(e.target.value)}
            placeholder="Ingresa tu número"
            className="input-numero"
          />
          <div className="botones">
            <button onClick={verificarNumero} className="btn-verificar">
              Verificar
            </button>
            <button onClick={rendirse} className="btn-rendirse">
              Me rindo
            </button>
          </div>
          <button onClick={iniciarJuego} className="btn-iniciar">
            Iniciar Juego
          </button>
        </div>
      </div>
    );
  } 

  return (
    <div className='App'>
      <div className='container'>
        <div className='texto-inicio'>Al iniciar</div>
        <h1>Adivina el número</h1>
        <p>Ingresa un número entre 1 y 100</p>
        <p>Cantidad de intentos: {intentos}</p>
        <input type="number"
        value={numeroUsuario}
        onChange={(e) =>
          setNumeroUsuario(e.target.value)}
          placeholder='Ingresa tu número'
          className='input-numero'
          disabled={juegoTerminado}
          />
          <div className='botones'>
            <button
            onClick={}
            className='btn-verificar'
            disabled={juegoTerminado}>
              Verificar
            </button>
            <button
            onClick={}
            className='btn-rendirse'
            disabled={juegoTerminado}>
              Rendirse
            </button>
          </div>
          
          {juegoTerminado && (
            <button
            onClick={}
            className='btn-reinciar'>
              Jugar de nuevo
            </button>
          )}
      </div>
  </div>    

  );
}

export default App;
