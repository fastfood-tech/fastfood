import { useContext } from 'react';
import { Product, SelectedProduct } from '../types/types';
import { OrderContext } from '../contexts/orderContext';

export interface ISelectProductHandler {
  select: (product: SelectedProduct) => void;
  remove: (product: Product) => void;
  getSelectedProducts: () => SelectedProduct[];
  isSelected: (product: Product) => boolean;
  clientName: string;
  setClientName: (name: string) => void;
}

export default function useOrderHandler(): ISelectProductHandler {
  const {
    selectedProductsById,
    setSelectedProductsById,
    clientName,
    setClientName,
  } = useContext(OrderContext);

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
    clientName,
    setClientName,
  };
}
