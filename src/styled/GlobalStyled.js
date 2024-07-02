import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }



  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.75;
    font-size: 1rem;
    background-color: #171133;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items:center;
    width:100%;

  }

  #root {
    flex: 1;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: inherit;
    align-items:center;
  }

  h1 {
    font-size: 40px;
    font-weight: 800;
    line-height: 40px;
    color: #fff;
  }

  p {
    font-size: 20px;
    line-height: 25px;
    color: #fff;
  }
`;

export default GlobalStyle;
