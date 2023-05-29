import { ChangeEvent, useState } from 'react';
import useSelectProductHandler from './useSelectProductHandler';

export interface IOrderPayment {
  getTotalOrderPrice: () => number;
  handleClientName: (e: ChangeEvent<HTMLInputElement>) => void;
  clientName: string;
  orderCode: number;
}

export default function useOrderPayment(): IOrderPayment {
  const [clientName, setClientName] = useState('');
  const MockOrderCode = 200;

  const { getSelectedProducts } = useSelectProductHandler();

  const getTotalOrderPrice = () => {
    const selectedProducts = getSelectedProducts();

    const totalOrdersPrice = selectedProducts.reduce(
      (accumulator, currentProduct) => {
        const productstotal = currentProduct.amount * currentProduct.price;
        const extrasTotal = currentProduct.selectedExtras.reduce(
          (extrasAccumulator, currentExtra) =>
            extrasAccumulator + currentExtra.price,
          0,
        );

        return accumulator + productstotal + extrasTotal;
      },
      0,
    );

    return totalOrdersPrice;
  };

  const handleClientName = (e: ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value.trim());
  };

  return {
    getTotalOrderPrice,
    handleClientName,
    clientName,
    orderCode: MockOrderCode,
  };
}
