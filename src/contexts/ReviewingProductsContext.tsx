import React, { createContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { SelectedProduct } from '../types/types';

type ReviewingProductsContextValue = {
  reviewingProduct: SelectedProduct | null;
  setReviewingProduct: (value: SelectedProduct | null) => void;
};

export const ReviewingProductsContext =
  createContext<ReviewingProductsContextValue>({
    reviewingProduct: null,
    setReviewingProduct: () => undefined,
  });

export function ReviewingProductsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { storedValue: reviewingProduct, setValue: setReviewingProduct } =
    useLocalStorage<SelectedProduct | null>('ReviewingProduct', null);

  const contextValue = useMemo(() => {
    return { reviewingProduct, setReviewingProduct };
  }, [reviewingProduct, setReviewingProduct]);

  return (
    <ReviewingProductsContext.Provider value={contextValue}>
      {children}
    </ReviewingProductsContext.Provider>
  );
}
