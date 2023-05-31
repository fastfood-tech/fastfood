import { useEffect, useState } from 'react';
import { OrdersByStatus } from '../../types/types';
import {
  createOrder,
  deliverOrder,
  finishOrder,
  getOrders,
} from '../../services/ordersApi';

import showSuccessMessage from '../../helpers/successMessage';
import useOrderHandler from '../useOrderHandler';

export type OrderApiHandler = {
  finish: (id: number) => Promise<void>;
  deliver: (id: number) => Promise<void>;
  isFinishing: boolean;
  isdelivering: boolean;
  create: () => Promise<void>;
};

export type OrdersApiHandler = {
  orders: OrdersByStatus;
  nextOrderCode: number;
  isLoading: boolean;
  clientName: string;
  orderApiHandler: OrderApiHandler;
};

export default function useOrders(): OrdersApiHandler {
  const [orders, setOrders] = useState({} as OrdersByStatus);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinishing, setIsfinishing] = useState(false);
  const [isdelivering, setIsdelivering] = useState(false);
  const { clientName, getSelectedProducts, remove, setClientName } =
    useOrderHandler();

  const updateOrders = () => {
    getOrders()
      .then(result => {
        setIsLoading(false);
        setOrders(result);
      })
      .catch(() => setIsLoading(false));
  };

  useEffect(() => {
    updateOrders();
  }, []);

  const finish = async (orderId: number) => {
    setIsfinishing(true);
    const promise = finishOrder(orderId);
    promise.then(updateOrders).finally(() => setIsfinishing(false));
    return promise;
  };

  const deliver = async (orderId: number) => {
    setIsdelivering(true);
    const promise = deliverOrder(orderId);
    promise.then(updateOrders).finally(() => setIsdelivering(false));

    return promise;
  };

  const create = async () => {
    const promise = createOrder(clientName, getSelectedProducts());
    promise.then(() => {
      showSuccessMessage();
      getSelectedProducts().forEach(p => remove(p));
      setClientName('');
    });
    return promise;
  };

  return {
    orders,
    nextOrderCode: orders.total + 1,
    isLoading,
    clientName,
    orderApiHandler: {
      finish,
      deliver,
      isFinishing,
      isdelivering,
      create,
    },
  };
}
