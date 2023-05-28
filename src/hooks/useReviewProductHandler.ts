import { useContext, useState } from 'react';
import { Extra, Product, SelectedProduct } from '../types/types';

import { ReviewingProductsContext } from '../contexts/ReviewingProductsContext';

export interface IReviewProductHandler {
  updateReviewingProduct: (product: SelectedProduct) => void;
  finishReviewng: () => void;
  reviewingProduct: SelectedProduct | null;
  startReviewing: (product: Product) => void;
  isExtraSelected: (extra: Extra) => boolean;
  selectExtra: (extra: Extra) => void;
  updateAnnotations: (annotations: string) => void;
}

export default function useReviewProductHandler(): IReviewProductHandler {
  const { setReviewingProduct, reviewingProduct } = useContext(
    ReviewingProductsContext,
  );

  const updateReviewingProduct = (product: SelectedProduct) => {
    setReviewingProduct(product);
  };

  const isExtraSelected = (extra: Extra) =>
    !!reviewingProduct?.selectedExtras.some(e => e.id === extra.id);

  const selectExtra = (extra: Extra) => {
    if (!reviewingProduct) return;

    let resultSelectedExtras: Extra[];

    if (isExtraSelected(extra))
      resultSelectedExtras = reviewingProduct?.selectedExtras.filter(
        e => e.id !== extra.id,
      );
    else resultSelectedExtras = [...reviewingProduct.selectedExtras, extra];

    setReviewingProduct({
      ...reviewingProduct,
      selectedExtras: [...resultSelectedExtras],
    });
  };

  const startReviewing = (product: Product) =>
    setReviewingProduct({
      ...product,
      selectedExtras: [],
      amount: 1,
      annotations: '',
    });

  const updateAnnotations = (annotations: string) => {
    if (!reviewingProduct) return;
    setReviewingProduct({ ...reviewingProduct, annotations });
  };

  const finishReviewng = () => setReviewingProduct(null);
  return {
    updateReviewingProduct,
    finishReviewng,
    reviewingProduct,
    startReviewing,
    isExtraSelected,
    selectExtra,
    updateAnnotations,
  };
}
