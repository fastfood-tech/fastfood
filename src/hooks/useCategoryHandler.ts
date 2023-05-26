import { useState } from 'react';
import { Category } from '../types/types';

export default function useCategoryHandler() {
  const [selected, setSelected] = useState<Category>({} as Category);

  const isSelected = (category: Category) => {
    return selected.name === category.name;
  };

  const select = (category: Category) =>
    !isSelected(category) ? setSelected(category) : setSelected({} as Category);

  return { select, selected, isSelected };
}
