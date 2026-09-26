import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Always start at the top when the page is loaded/reloaded
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

window.scrollTo(0, 0)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)