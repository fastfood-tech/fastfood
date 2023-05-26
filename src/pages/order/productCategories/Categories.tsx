import React from 'react';
import ItemsHolder, {
  IItemsHolderProps,
} from '../../../componets/itemsHolder/ItemsHolder';
import useCategories from '../../../hooks/useCategories';
import { ICategoryHandler } from '../../../hooks/useCategoryHandler';
import ProductCategory from './ProductCategory';

interface ICategoriesProps extends IItemsHolderProps {
  categoryHandler: ICategoryHandler;
}

export default function Categories({
  categoryHandler,
  ...props
}: ICategoriesProps) {
  const { categories } = useCategories();

  return (
    <ItemsHolder itemsGap="5vw" {...props}>
      {categories.map(c => (
        <ProductCategory
          key={c.id}
          isSelected={categoryHandler.isSelected(c)}
          onClick={() => categoryHandler.select(c)}
          name={c.name}
          image={{ url: c.image.url }}
        />
      ))}
    </ItemsHolder>
  );
}
