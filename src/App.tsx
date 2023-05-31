import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './componets/header/Header';
import GlobalStyle from './styles/GlobalStyles';
import OrderPage from './pages/order/OrderPage';
import { OrderProvider } from './contexts/orderContext';
import { ReviewingProductsProvider } from './contexts/ReviewingProductsContext';
import PaymentPage from './pages/payment/PaymentPage';
import KitchenPage from './pages/kitchen/KitchenPage';
import { PrinterProvider } from './contexts/printerContext';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <PrinterProvider>
          <OrderProvider>
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
              <Route path="/cozinha" element={<KitchenPage />} />
            </Routes>
          </OrderProvider>
        </PrinterProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
