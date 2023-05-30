import { useEffect, useState } from 'react';
import { Category } from '../../types/types';
import { getCategoris } from '../../services/categoriesApi';

export default function useCategories() {
  const [categories, setCategoris] = useState([] as Category[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategoris()
      .then(result => {
        setIsLoading(false);
        setCategoris(result);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return { categories, isLoading };
}
