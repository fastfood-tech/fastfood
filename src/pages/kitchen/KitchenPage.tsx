import React from 'react';
import styled from 'styled-components';

import SectionContainer from '../../componets/SectionContainer';

import useOrders from '../../hooks/api/useOrders';
import KitchenItem from './KitchenItem';
import Loader from '../../componets/Loader';

const Container = styled.div`
  display: flex;

  width: 90vw;
  margin: 0 auto;
  justify-content: space-around;
  align-items: self-start;

  padding-top: 6rem;
  padding-bottom: 3rem;

  & > div {
    width: 45%;
    min-height: 70vh;

    margin-top: 2rem;
  }

  & > div:first-child {
    border-right: 4px solid #6f6f6f;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;

    & > div {
      width: 100%;

      margin-top: 2rem;
    }

    & > .vertical-line {
      display: none;
    }
  }
`;
export default function KitchenPage() {
  const { orders, isLoading, orderApiHandler } = useOrders();
  const unDoneOrders = orders?.undone;
  const doneOrders = orders?.done;

  return (
    <Container>
      <SectionContainer style={{ padding: '1rem' }} title="Preparando:">
        {isLoading ? (
          <Loader width="4rem" height="4rem" />
        ) : (
          unDoneOrders?.map(o => (
            <KitchenItem
              item={{ ...o, orderNumber: o.orderCode }}
              key={`order-kitchen-item-${o.id}`}
              orderApiHandler={orderApiHandler}
            />
          ))
        )}
      </SectionContainer>
      <SectionContainer style={{ padding: '1rem' }} title="Pronto:">
        {isLoading ? (
          <Loader width="4rem" height="4rem" />
        ) : (
          doneOrders?.map(o => (
            <KitchenItem
              finished
              orderApiHandler={orderApiHandler}
              item={{ ...o, orderNumber: o.orderCode }}
              key={`order-kitchen-item-${o.id}`}
            />
          ))
        )}
      </SectionContainer>
    </Container>
  );
}
