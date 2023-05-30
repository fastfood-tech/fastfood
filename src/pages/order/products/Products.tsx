import React from 'react';
import useProducts from '../../../hooks/api/useProducts';
import QuickSelection from './QuickSelection';
import { Category } from '../../../types/types';
import ItemsHolder from '../../../componets/itemsHolder/ItemsHolder';
import getProductBanners from './utils/getProductBanners';
import Product from './Product';

import useReviewProductHandler from '../../../hooks/useReviewProductHandler';
import Loader from '../../../componets/Loader';
import useOrderHandler from '../../../hooks/useOrderHandler';

interface IProductsProps extends React.HtmlHTMLAttributes<HTMLElement> {
  searchedProduct: string;
  selectedProductCategory: Category;
}
export default function Products({
  searchedProduct,
  selectedProductCategory,
  ...props
}: IProductsProps) {
  const { products, isLoading } = useProducts({
    productNameOrCode: searchedProduct,
    categoryId: selectedProductCategory.id,
  });

  const { isSelected, remove } = useOrderHandler();
  const { startReviewing } = useReviewProductHandler();

  const shouldShowQuickSelection =
    !searchedProduct && !selectedProductCategory.name;

  if (isLoading) return <Loader height="80px" width="80px" />;

  if (shouldShowQuickSelection)
    return <QuickSelection {...props} products={products} />;

  return (
    <ItemsHolder itemsGap="2vw" wrapMode="wrap" {...props}>
      {products.map(p => (
        <Product
          key={`searched-product-${p.id}`}
          isSelected={isSelected(p)}
          onClick={() => (isSelected(p) ? remove(p) : startReviewing(p))}
          product={p}
          bannerImage={{ url: getProductBanners()[0].url }}
        />
      ))}
    </ItemsHolder>
  );
}
