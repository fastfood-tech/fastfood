import React from 'react';
import { Fab } from '@mui/material';
import styled from 'styled-components';
import useReviewProductHandler from '../../../hooks/useReviewProductHandler';
import useSelectProductHandler from '../../../hooks/useSelectProductHandler';
import { SelectedProduct } from '../../../types/types';

const Container = styled.div`
  display: flex;
  justify-content: end;

  margin-top: 2rem;
  button {
    width: 17rem;

    background-color: #fff;
    color: #125c13;

    border: 1px solid #125c13;
    border-radius: 15px;

    margin: 1rem;

    overflow: hidden;
  }

  button:last-child {
    background-color: #125c13;
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    button {
      width: 15rem;
    }
  }

  @media screen and (max-width: 700px) {
    button {
      width: 80%;

      font-size: 0.75rem;
      line-height: 0.75rem;
    }
  }
`;
export default function FooterButtons() {
  const { reviewingProduct, finishReviewng } = useReviewProductHandler();
  const { select } = useSelectProductHandler();

  const addToOrder = (selectedProduct: SelectedProduct | null) => {
    if (selectedProduct) select(selectedProduct);
    finishReviewng();
  };

  return (
    <Container>
      <Fab variant="extended" onClick={finishReviewng}>
        Continuar Adicionando
      </Fab>
      <Fab variant="extended" onClick={() => addToOrder(reviewingProduct)}>
        Adicionar ao Pedido
      </Fab>
    </Container>
  );
}
