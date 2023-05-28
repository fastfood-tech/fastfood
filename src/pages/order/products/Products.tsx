import React from 'react';
import useProducts from '../../../hooks/useProducts';
import QuickSelection from './QuickSelection';
import { Category } from '../../../types/types';
import ItemsHolder from '../../../componets/itemsHolder/ItemsHolder';
import getProductBanners from './utils/getProductBanners';
import Product from './Product';

import useSelectProductHandler from '../../../hooks/useSelectProductHandler';
import useReviewProductHandler from '../../../hooks/useReviewProductHandler';

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
  const { isSelected } = useSelectProductHandler();
  const { startReviewing } = useReviewProductHandler();

  const shouldShowQuickSelection =
    !searchedProduct && !selectedProductCategory.name;

  if (shouldShowQuickSelection)
    return <QuickSelection {...props} products={products} />;

  return (
    <ItemsHolder itemsGap="2vw" wrapMode="wrap" {...props}>
      {products.map(p => (
        <Product
          key={`searched-product-${p.id}`}
          isSelected={isSelected(p)}
          onClick={() => startReviewing(p)}
          product={p}
          bannerImage={{ url: getProductBanners()[0].url }}
        />
      ))}
    </ItemsHolder>
  );
}
