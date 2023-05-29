import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componets/header/Header';
import GlobalStyle from './styles/GlobalStyles';
import OrderPage from './pages/order/OrderPage';
import { SelectedProductsProvider } from './contexts/SelectedProductsContext';
import { ReviewingProductsProvider } from './contexts/ReviewingProductsContext';
import PaymentPage from './pages/payment/PaymentPage';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <SelectedProductsProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ReviewingProductsProvider>
                  <OrderPage />
                </ReviewingProductsProvider>
              }
            />
            <Route path="/pagamento" element={<PaymentPage />} />
          </Routes>
        </SelectedProductsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
