
import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Saludo from './assets/components/Saludo.jsx'
import Colores from './assets/components/Colores.jsx'
import Juego from './assets/components/Juego.jsx'

function App() {
    
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Saludo nombre="Cerati" />
      <Juego/> 
      <Colores/>
    </div>
  );
}

export default App;