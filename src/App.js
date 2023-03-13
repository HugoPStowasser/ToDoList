import Home from "./pages/home";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *{
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Home/>
    </>
  );
}

export default App;
