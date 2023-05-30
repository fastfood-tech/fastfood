import React from 'react';
import { Fab } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import askForConfirmation from '../../helpers/askForConfirmation';
import useOrderHandler from '../../hooks/useOrderHandler';

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

    text-transform: capitalize;
    z-index: 5;

    &:disabled {
      color: #ababab;
      background-color: #fff;
      border: 1px solid #ababab;
    }
  }

  button:last-child {
    background-color: #125c13;
    color: #fff;

    &:disabled {
      background-color: #ababab;
    }
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
export default function FooterButtons({ disable }: { disable: boolean }) {
  const { getSelectedProducts, remove } = useOrderHandler();
  const nav = useNavigate();

  const cancel = () =>
    askForConfirmation('Remover todos os itens selecionados?').then(r => {
      if (r.isConfirmed) getSelectedProducts().forEach(p => remove(p));
    });

  return (
    <Container>
      <Fab onClick={cancel} disabled={disable} variant="extended">
        Cancelar
      </Fab>
      <Fab
        disabled={disable}
        onClick={() => nav('pagamento')}
        variant="extended"
      >
        finalizar Pedido
      </Fab>
    </Container>
  );
}
