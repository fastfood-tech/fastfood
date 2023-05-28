import { useContext } from 'react';
import { Product, SelectedProduct } from '../types/types';
import { SelectedProductsContext } from '../contexts/SelectedProductsContext';

export interface ISelectProductHandler {
  select: (product: SelectedProduct) => void;
  remove: (product: Product) => void;
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

  const remove = (product: Product) => {
    delete selectedProductsById[product.id];
    setSelectedProductsById({ ...selectedProductsById });
  };

  const select = (product: SelectedProduct) => {
    selectedProductsById[product.id] = product;
    setSelectedProductsById({ ...selectedProductsById });
  };

  const getSelectedProducts = () =>
    Object.values(selectedProductsById) as SelectedProduct[];

  return {
    select,
    remove,
    getSelectedProducts,
    isSelected,
  };
}
