import React, { useState } from 'react';
import { Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SectionContainer from '../../componets/SectionContainer';
import formatMonetaryValue, {
  formatMonetaryCents,
} from '../../helpers/formatMonetaryValue';
import handleMonetaryEventData from './helpers/handleMonetaryEventData';
import useOrderPayment from '../../hooks/useOrderPayment';
import useOrders from '../../hooks/api/useOrders';
import Loader from '../../componets/Loader';

const Container = styled.div`
  display: flex;
  justify-content: end;

  margin-top: 2rem;

  & > div:last-child {
    background-color: red;
  }
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

export default function PaymentHandler() {
  const [paidCentsValue, setPaidCentsValue] = useState(0);
  const { getTotalOrderPrice } = useOrderPayment();
  const { orderApiHandler, clientName } = useOrders();
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const nav = useNavigate();

  const remainingMoney = paidCentsValue / 100 - getTotalOrderPrice();

  function handleInputClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    const inputElement = e.target as HTMLInputElement;

    const contentLength = formatMonetaryCents(paidCentsValue).length;

    inputElement.selectionStart = contentLength;
    inputElement.selectionEnd = contentLength;
  }

  const createOrder = () => {
    setIsCreatingOrder(true);
    orderApiHandler
      .create()
      .then(() => nav('/'))
      .finally(() => setIsCreatingOrder(false));
  };

  return (
    <>
      <div className="money-holder">
        <SectionContainer
          style={{ width: '45%' }}
          titleFontSize="1rem"
          title="Valor entregue"
        >
          <input
            type="text"
            className="client"
            value={formatMonetaryCents(paidCentsValue)}
            onChange={e => setPaidCentsValue(handleMonetaryEventData(e))}
            placeholder="R$ 0,00"
            onClick={handleInputClick}
          />
        </SectionContainer>
        <SectionContainer
          style={{ width: '45%', minWidth: '5rem' }}
          titleFontSize="1rem"
          title="Troco"
        >
          <input
            value={`${remainingMoney < 0 ? '-' : ''} ${formatMonetaryValue(
              Number(remainingMoney),
            )}`}
            disabled
            type="text"
            className="code"
            placeholder="R$ 0,00"
          />
        </SectionContainer>
      </div>{' '}
      <Container>
        <Fab
          disabled={isCreatingOrder}
          onClick={() => nav('/')}
          variant="extended"
        >
          Cancelar
        </Fab>
        <Fab
          disabled={
            remainingMoney < 0 ||
            isCreatingOrder ||
            clientName.trim().length === 0
          }
          variant="extended"
          onClick={createOrder}
        >
          {isCreatingOrder ? (
            <Loader width="3rem" height="3rem" />
          ) : (
            'finalizar Pedido'
          )}
        </Fab>
      </Container>
    </>
  );
}
