import React, { createContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { SelectedProductsById } from '../types/types';

type OrderContextValue = {
  selectedProductsById: SelectedProductsById;
  setSelectedProductsById: (value: SelectedProductsById) => void;
  setClientName: (value: string) => void;
  clientName: string;
};

export const OrderContext = createContext<OrderContextValue>({
  selectedProductsById: [],
  setSelectedProductsById: () => undefined,
  setClientName: () => undefined,
  clientName: '',
});

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const {
    storedValue: selectedProductsById,
    setValue: setSelectedProductsById,
  } = useLocalStorage<SelectedProductsById>('selectedProducts', []);

  const { storedValue: clientName, setValue: setClientName } =
    useLocalStorage<string>('clientName', '');

  const contextValue = useMemo(() => {
    return {
      selectedProductsById,
      setSelectedProductsById,
      clientName,
      setClientName,
    };
  }, [
    selectedProductsById,
    setSelectedProductsById,
    setClientName,
    clientName,
  ]);

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
}
