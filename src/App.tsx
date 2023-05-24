import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './componets/header/Index';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
