import { Order, SelectedProduct } from '../types/types';
import api from './api';

type result = {
  undone?: Order[];
  done?: Order[];
  total: number;
};

export async function getOrders(): Promise<result> {
  const response = await api.get('/orders');

  const orders = response.data as Order[];
  const mappedOrders = orders.map((o, i) => {
    return { ...o, orderCode: i + 1 };
  });

  const result = {
    undone: mappedOrders.filter(o => !o.isDone),
    done: mappedOrders.filter(o => o.isDone),
    total: orders?.length || 0,
  };

  return result;
}

export async function finishOrder(orderId: number) {
  await api.post(`/orders/${orderId}/finish`);
}

export async function deliverOrder(orderId: number) {
  await api.post(`/orders/${orderId}/deliver`);
}

export async function createOrder(
  clientName: string,
  orderData: SelectedProduct[],
) {
  const order = orderData.map(o => {
    return {
      productId: o.id,
      amount: o.amount,
      annotations: o.annotations,
      selectedExtras: o.selectedExtras.map(e => e.id),
    };
  });

  await api.post(`/orders`, { clientName, order });
}
