import { useEffect, useState } from 'react';
import { getProducts, getTopProducts } from '../../services/productsApi';
import { Product, getProductFilters } from '../../types/types';

type params = { productNameOrCode: string; categoryId: number };
export default function useProducts({ productNameOrCode, categoryId }: params) {
  const [products, setCategoris] = useState([] as Product[]);
  const [isLoading, setIsLoading] = useState(false);

  const filters: getProductFilters = {};
  if (categoryId) filters.categoryId = categoryId;

  const isProductCode =
    productNameOrCode && !Number.isNaN(Number(productNameOrCode));
  if (isProductCode) filters.code = Number(productNameOrCode);

  const isProductName =
    productNameOrCode && Number.isNaN(Number(productNameOrCode));
  if (isProductName) filters.name = productNameOrCode;

  const sholdGetTopProducs = !productNameOrCode && !categoryId;

  const getProductsHandler = sholdGetTopProducs
    ? () => getTopProducts()
    : () => getProducts(filters);

  useEffect(() => {
    setIsLoading(true);
    getProductsHandler()
      .then(result => {
        setIsLoading(false);
        setCategoris(result);
      })
      .catch(() => setIsLoading(false));
  }, [productNameOrCode, categoryId]);

  return { products, isLoading };
}
