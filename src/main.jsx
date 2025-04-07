import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' ;
import './index.css'; // ou le nom de ton fichier CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
