import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Saludo from './assets/components/Saludo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Saludo />
  </StrictMode>,
)
