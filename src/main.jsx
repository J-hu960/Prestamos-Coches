import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CotizadorProvider from './context/CotizadorProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CotizadorProvider>
    <App />
  </CotizadorProvider>,
)
