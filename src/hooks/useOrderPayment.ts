import { ChangeEvent } from 'react';
import useOrderHandler from './useOrderHandler';
import useReviewProductHandler from './useReviewProductHandler';

export interface IOrderPayment {
  getTotalOrderPrice: () => number;
  clientName: string;
  handleClientName: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function useOrderPayment(): IOrderPayment {
  const { reviewingProduct } = useReviewProductHandler();
  const { setClientName, clientName, getSelectedProducts } = useOrderHandler();

  const handleClientName = (e: ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value.trim());
  };

  const getTotalOrderPrice = () => {
    const selectedProducts = getSelectedProducts();

    const ordersToCalculate = reviewingProduct
      ? [...selectedProducts, reviewingProduct]
      : selectedProducts;

    const totalOrdersPrice = ordersToCalculate.reduce(
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

  return {
    getTotalOrderPrice,
    clientName,
    handleClientName,
  };
}
