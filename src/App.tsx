import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componets/header/Index';
import GlobalStyle from './styles/GlobalStyles';
import OrderPage from './pages/order/Index';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
