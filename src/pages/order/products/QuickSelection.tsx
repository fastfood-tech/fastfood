import React from 'react';
import ItemsHolder from '../../../componets/itemsHolder/ItemsHolder';
import { Product as ProductType } from '../../../types/types';
import splitProductsIntoLines from './utils/splitProductsIntoLines';
import Product from './Product';
import getProductBanners from './utils/getProductBanners';
import useSelectProductHandler from '../../../hooks/useSelectProductHandler';
import useReviewProductHandler from '../../../hooks/useReviewProductHandler';

interface QuickSelectionProps extends React.HtmlHTMLAttributes<HTMLElement> {
  products: ProductType[];
}

export default function QuickSelection({
  products,
  ...props
}: QuickSelectionProps) {
  const productBanners = getProductBanners();
  const productsByLine = splitProductsIntoLines(
    products,
    productBanners.length,
  );
  const { isSelected } = useSelectProductHandler();
  const { startReviewing } = useReviewProductHandler();

  return (
    <div {...props}>
      {productBanners.map((banner, i) => (
        <ItemsHolder key={`quick-selection-line-${banner.id}`}>
          {productsByLine[i].map(p => (
            <Product
              key={`quick-selection-line-${banner.id}-product-${p.id}`}
              isSelected={isSelected(p)}
              onClick={() => startReviewing(p)}
              product={p}
              bannerImage={{ url: banner.url }}
            />
          ))}
        </ItemsHolder>
      ))}
    </div>
  );
}
