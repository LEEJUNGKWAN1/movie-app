// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    background-color: #121212;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
