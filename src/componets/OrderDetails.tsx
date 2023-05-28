import React from 'react';
import styled from 'styled-components';
import useSelectProductHandler from '../hooks/useSelectProductHandler';
import formatMonetaryValue from '../helpers/formatMonetaryValue';

const Container = styled.div`
  width: 100%;
  border: 1.5px solid rgb(186, 194, 205);
  border-radius: 5px;

  padding: 2vw;

  .product-holder {
    margin-top: 1rem;
    margin-bottom: 0.25rem;
  }
  .product-holder,
  .product-extra-item {
    display: flex;
    justify-content: space-between;
  }

  .product-extra-item {
    margin-left: 1rem;
    margin-bottom: 0.25rem;
  }

  .total-holder {
    border-top: 1.5px dashed rgb(156, 164, 175);

    margin-top: 2rem;
    padding: 1rem 0;

    h1 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    p {
      font-weight: bold;
      font-size: 1.75rem;
    }
  }
`;
export default function OrderDetails() {
  const { getSelectedProducts } = useSelectProductHandler();

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

  return (
    <Container>
      {selectedProducts.map(p => (
        <>
          <div className="product-holder">
            <p>
              {p.amount}x {p.name}
            </p>
            <p>{formatMonetaryValue(p.price)}</p>
          </div>

          {p.selectedExtras.map(extra => (
            <div className="product-extra-item">
              <p>{extra.name}</p>
              <p>{formatMonetaryValue(extra.price)}</p>
            </div>
          ))}
        </>
      ))}
      <div className="total-holder">
        <h1>Total do pedido:</h1>
        <p>{formatMonetaryValue(totalOrdersPrice)}</p>
      </div>
    </Container>
  );
}