import { useContext, useState } from 'react';
import { Extra, Product, SelectedProduct } from '../types/types';

import { ReviewingProductsContext } from '../contexts/ReviewingProductsContext';

export interface IReviewProductHandler {
  updateReviewingProduct: (product: SelectedProduct) => void;
  cancel: () => void;
  reviewingProduct: SelectedProduct | null;
  startReviewing: (product: Product) => void;
  isExtraSelected: (extra: Extra) => boolean;
  selectExtra: (extra: Extra) => void;
}

export default function useReviewProductHandler(): IReviewProductHandler {
  const { setReviewingProduct, reviewingProduct } = useContext(
    ReviewingProductsContext,
  );

  const updateReviewingProduct = (product: SelectedProduct) => {
    setReviewingProduct(product);
  };

  const isExtraSelected = (extra: Extra) =>
    !!reviewingProduct?.selectedExtraIds.includes(extra.id);

  const selectExtra = (extra: Extra) => {
    if (!reviewingProduct) return;

    let resultSelectedExtraIds: number[];

    if (isExtraSelected(extra))
      resultSelectedExtraIds = reviewingProduct?.selectedExtraIds.filter(
        extraId => extraId !== extra.id,
      );
    else
      resultSelectedExtraIds = [...reviewingProduct.selectedExtraIds, extra.id];

    setReviewingProduct({
      ...reviewingProduct,
      selectedExtraIds: [...resultSelectedExtraIds],
    });
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
    isExtraSelected,
    selectExtra,
  };
}
