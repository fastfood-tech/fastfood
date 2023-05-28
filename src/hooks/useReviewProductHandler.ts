import { useContext } from 'react';
import { Product, SelectedProduct } from '../types/types';

import { ReviewingProductsContext } from '../contexts/ReviewingProductsContext';

export interface IReviewProductHandler {
  updateReviewingProduct: (product: SelectedProduct) => void;
  cancel: () => void;
  reviewingProduct: SelectedProduct | null;
  startReviewing: (product: Product) => void;
}

export default function useReviewProductHandler(): IReviewProductHandler {
  const { setReviewingProduct, reviewingProduct } = useContext(
    ReviewingProductsContext,
  );

  const updateReviewingProduct = (product: SelectedProduct) => {
    setReviewingProduct(product);
  };

  const startReviewing = (product: Product) =>
    setReviewingProduct({
      ...product,
      selectedExtraIds: [],
      amount: 1,
      annotations: '',
    });

  const cancel = () => setReviewingProduct(null);
  return {
    updateReviewingProduct,
    cancel,
    reviewingProduct,
    startReviewing,
  };
}
