import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componets/header/Header';
import GlobalStyle from './styles/GlobalStyles';
import OrderPage from './pages/order/OrderPage';
import { SelectedProductsProvider } from './contexts/SelectedProductsContext';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <SelectedProductsProvider>
                <OrderPage />
              </SelectedProductsProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
