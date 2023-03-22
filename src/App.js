import Home from "./pages/Home";

import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import View from "./pages/View";
import { ListProvider } from "./context/List.context";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *{
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <ListProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/list/:id" element={<View />}/>
        </Routes>
      </BrowserRouter>
    </ListProvider>
  );
};

export default App;
