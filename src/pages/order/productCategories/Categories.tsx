import React from 'react';
import ItemsHolder, {
  IItemsHolderProps,
} from '../../../componets/itemsHolder/ItemsHolder';
import useCategories from '../../../hooks/api/useCategories';
import { ICategoryHandler } from '../../../hooks/useCategoryHandler';
import ProductCategory from './ProductCategory';
import Loader from '../../../componets/Loader';

interface ICategoriesProps extends IItemsHolderProps {
  categoryHandler: ICategoryHandler;
}

export default function Categories({
  categoryHandler,
  ...props
}: ICategoriesProps) {
  const { categories, isLoading } = useCategories();

  if (isLoading) return <Loader height="80px" width="80px" />;

  return (
    <ItemsHolder itemsGap="2vw" {...props}>
      {categories.map(c => (
        <ProductCategory
          key={`product-category-${c.id}`}
          isSelected={categoryHandler.isSelected(c)}
          onClick={() => categoryHandler.select(c)}
          name={c.name}
          image={{ url: c.image }}
        />
      ))}
    </ItemsHolder>
  );
}
