import { Category } from '../types/types';
import api from './api';

export async function getCategoris(): Promise<Category[]> {
  const response = await api.get('/categories');

  return response.data;
}
