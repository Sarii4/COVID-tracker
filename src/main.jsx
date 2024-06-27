import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './home.jsx'
import './index.css'
import  GlobalStyle  from './styled/GlobalStyled.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GlobalStyle/>
    <App />
    <Home/>
  </React.StrictMode>,
)
