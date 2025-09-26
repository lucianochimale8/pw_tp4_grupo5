// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Saludo from './assets/components/Saludo.jsx'
import Colores from './assets/components/Colores.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Saludo nombre="Cerati" /> 
    <Colores/>
  </StrictMode>,
)