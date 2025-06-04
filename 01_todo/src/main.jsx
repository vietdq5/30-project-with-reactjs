import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode help developer write better quality code by highlight potential problems during development.
  // It does not affect the production build.
  // Not supported or deprecated React APIs and components
  // Unsafe state updates
  // Potentially unnecessary re-renders  
  <StrictMode>
    <App />
  </StrictMode>,
)
