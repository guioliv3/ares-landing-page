import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/HomePage'
import './styles/main.css'
import './styles/refinements.css'
import '@fontsource/archivo/latin-400.css'
import '@fontsource/archivo/latin-500.css'
import '@fontsource/archivo/latin-600.css'
import '@fontsource/archivo/latin-700.css'
import '@fontsource/michroma/latin-400.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
