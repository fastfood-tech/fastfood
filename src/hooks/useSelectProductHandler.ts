import { useContext } from 'react';
import { Product, SelectedProduct } from '../types/types';
import { SelectedProductsContext } from '../contexts/SelectedProductsContext';

export interface ISelectProductHandler {
  select: (product: Product) => void;
  getSelectedProducts: () => SelectedProduct[];
  isSelected: (product: Product) => boolean;
}

export default function useSelectProductHandler(): ISelectProductHandler {
  const { selectedProductsById, setSelectedProductsById } = useContext(
    SelectedProductsContext,
  );

  const isSelected = (product: Product) => {
    return selectedProductsById[product.id] !== undefined;
  };

  const select = (product: Product) => {
    if (isSelected(product)) delete selectedProductsById[product.id];
    else selectedProductsById[product.id] = product;

    setSelectedProductsById({ ...selectedProductsById });
  };

  const getSelectedProducts = () =>
    Object.values(selectedProductsById) as SelectedProduct[];

  return {
    select,
    getSelectedProducts,
    isSelected,
  };
}
