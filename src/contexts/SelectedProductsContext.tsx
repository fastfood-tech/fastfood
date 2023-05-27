import React, { createContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { SelectedProductsById } from '../types/types';

type SelectedProductsContextValue = {
  selectedProductsById: SelectedProductsById;
  setSelectedProductsById: (value: SelectedProductsById) => void;
};

export const SelectedProductsContext =
  createContext<SelectedProductsContextValue>({
    selectedProductsById: [],
    setSelectedProductsById: () => undefined,
  });

export function SelectedProductsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    storedValue: selectedProductsById,
    setValue: setSelectedProductsById,
  } = useLocalStorage<SelectedProductsById>('selectedProducts', []);

  const contextValue = useMemo(() => {
    return { selectedProductsById, setSelectedProductsById };
  }, [selectedProductsById, setSelectedProductsById]);

  return (
    <SelectedProductsContext.Provider value={contextValue}>
      {children}
    </SelectedProductsContext.Provider>
  );
}
