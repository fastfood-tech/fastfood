import { useContext, useState } from 'react';
import { Product, SelectedProduct, SelectedProductsById } from '../types/types';
import { SelectedProductsContext } from '../contexts/SelectedProductsContext';

export interface IProductHandler {
  select: (product: Product) => void;
  isSelecting: boolean;
  getSelectedProducts: () => SelectedProduct[];
  isSelected: (product: Product) => boolean;
}

export default function useProductHandler(): IProductHandler {
  const [isSelecting, setIsSelecting] = useState(false);
  const { selectedProductsById, setSelectedProductsById } = useContext(
    SelectedProductsContext,
  );

  const isSelected = (product: Product) => {
    return selectedProductsById[product.id] !== undefined;
  };

  const select = (product: Product) => {
    setIsSelecting(true);

    if (isSelected(product)) delete selectedProductsById[product.id];
    else selectedProductsById[product.id] = product;

    setSelectedProductsById({ ...selectedProductsById });
    setIsSelecting(false);
  };

  const getSelectedProducts = () =>
    Object.values(selectedProductsById) as SelectedProduct[];

  return { select, isSelecting, getSelectedProducts, isSelected };
}
