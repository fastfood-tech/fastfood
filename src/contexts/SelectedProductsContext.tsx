import React, { createContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { SelectedProduct } from '../types/types';

type SelectedProductsContextValue = {
  selectedProducts: SelectedProduct[];
  setSelectedProducts: (value: SelectedProduct[]) => void;
};

export const SelectedProductsContext =
  createContext<SelectedProductsContextValue>({
    selectedProducts: [],
    setSelectedProducts: () => undefined,
  });

export function SelectedProductsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { storedValue: selectedProducts, setValue: setSelectedProducts } =
    useLocalStorage<SelectedProduct[]>('selectedProducts', []);

  const contextValue = useMemo(() => {
    return { selectedProducts, setSelectedProducts };
  }, [selectedProducts, setSelectedProducts]);

  return (
    <SelectedProductsContext.Provider value={contextValue}>
      {children}
    </SelectedProductsContext.Provider>
  );
}
