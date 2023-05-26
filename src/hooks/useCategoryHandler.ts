import { useState } from 'react';
import { Category } from '../types/types';

export interface ICategoryHandler {
  select: (category: Category) => void;
  selected: Category;
  isSelected: (category: Category) => boolean;
}

export default function useCategoryHandler(): ICategoryHandler {
  const [selected, setSelected] = useState<Category>({} as Category);

  const isSelected = (category: Category) => {
    return selected.name === category.name;
  };

  const select = (category: Category) =>
    !isSelected(category) ? setSelected(category) : setSelected({} as Category);

  return { select, selected, isSelected };
}
