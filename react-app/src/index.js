import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  code {
    font-family: 'Poppins', sans-serif;
  }
`;

// Crear el contenedor raíz
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);

