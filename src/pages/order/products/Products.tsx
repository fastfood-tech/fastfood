import React from 'react';
import useProducts from '../../../hooks/useProducts';
import QuickSelection from './QuickSelection';
import { Category } from '../../../types/types';

interface IProductsProps extends React.HtmlHTMLAttributes<HTMLElement> {
  searchedProduct: string;
  selectedProductCategory: Category;
}
export default function Products({
  searchedProduct,
  selectedProductCategory,
  ...props
}: IProductsProps) {
  const { products } = useProducts();

  return <QuickSelection {...props} products={products} />;
}
