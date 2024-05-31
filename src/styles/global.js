import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, textarea, a {
    font-family: "Roboto Slab", serif;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  } 

  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
