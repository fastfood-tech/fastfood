import React from 'react';
import useProducts from '../../../hooks/useProducts';
import QuickSelection from './QuickSelection';
import { Category } from '../../../types/types';
import ItemsHolder from '../../../componets/itemsHolder/ItemsHolder';
import getProductBanners from './utils/getProductBanners';
import Product from './Product';
import useProductHandler from '../../../hooks/useProductHandler';

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
  const { select, isSelected } = useProductHandler();

  const shouldShowQuickSelection =
    !searchedProduct && !selectedProductCategory.name;

  if (shouldShowQuickSelection)
    return <QuickSelection {...props} products={products} />;

  return (
    <ItemsHolder wrapMode="wrap" {...props}>
      {products.map(p => (
        <Product
          key={`searched-product-${p.id}`}
          isSelected={isSelected(p)}
          onClick={() => select(p)}
          product={p}
          bannerImage={{ url: getProductBanners()[0].url }}
        />
      ))}
    </ItemsHolder>
  );
}
