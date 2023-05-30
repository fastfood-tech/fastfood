import { Product } from '../types/types';
import api from './api';

type filters = { code?: number; categoryId?: number; name?: string };
export async function getProducts({
  name,
  categoryId,
  code,
}: filters): Promise<Product[]> {
  let query = '?';

  if (name) query += `name=${name}`;
  if (categoryId) query += `categoryId=${categoryId}`;
  if (code) query += `code=${code}`;

  if (query === '?') query = '';
  const response = await api.get(`/products${query}`);

  return response.data;
}

export async function getTopProducts(): Promise<Product[]> {
  const response = await api.get('/products/top');

  return response.data;
}
