import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    background-color: #121212;
    font-family: sans-serif;

    /* 다크모드 스크롤바 스타일 */
    scrollbar-width: thin;
    scrollbar-color: #555 #1e1e1e;
  }

  /* 크롬, 엣지, 사파리용 */
  html::-webkit-scrollbar,
  body::-webkit-scrollbar,
  #root::-webkit-scrollbar {
    width: 12px;
  }

  html::-webkit-scrollbar-track,
  body::-webkit-scrollbar-track,
  #root::-webkit-scrollbar-track {
    background: #1e1e1e;
  }

  html::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb,
  #root::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 6px;
    border: 3px solid #1e1e1e;
  }

  html::-webkit-scrollbar-thumb:hover,
  body::-webkit-scrollbar-thumb:hover,
  #root::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }
`;

export default GlobalStyle;
