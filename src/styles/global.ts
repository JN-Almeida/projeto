"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 700;
    ::-webkit-scrollbar {
      height: 7px;
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: #DFE9EB;
      /* margin-top: 5px;
      margin-bottom: 5px; */
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #bdbdbd;
    }
  }
  html,
  body {
    background-color: ${({ theme }) => theme.colors.background}; 
    margin: 0;
  }
  ul, 
  ol {  
    padding: 0;
    list-style-type: none;
    margin: 0;
  }

  input{        
    all: unset;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  button {
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
  }
  a {
    text-decoration: none;
  }
  
  ul {
    margin: 0;
    padding: 0
  }

  li, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0
  }
  
`;

export default GlobalStyle;
