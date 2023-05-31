import React from 'react';
import styled from 'styled-components';
import WalletIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import SectionContainer from '../../componets/SectionContainer';
import OrderDetails from '../../componets/OrderDetails';
import ClientData from './Clientdata';
import PaymenSection from './PaymentSection';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  padding-top: calc(2vw + 5rem);

  padding-bottom: 5rem;

  & > div:first-child {
    display: flex;
    align-items: center;

    & > h1 {
      font-weight: bold;
      font-size: 1.5rem;
      margin-left: 1rem;
    }

    svg {
      color: #125c13;
    }
  }

  .client-data-holder,
  .money-holder {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .money-holder {
    width: 40%;
  }

  input {
    width: 100%;
    resize: none;
    height: 2.5rem;

    font-family: Roboto, sans-serif;
    font-size: 1rem;

    text-align: start;

    background-color: rgb(244, 244, 244);

    border: none;
    border-radius: 9px;

    padding: 1rem;

    margin-top: 1rem;

    &::placeholder {
      color: rgb(156, 164, 175);
      font-weight: 400;
    }
  }

  @media screen and (max-width: 900px) {
    .money-holder {
      width: 50%;
    }
  }

  @media screen and (max-width: 720px) {
    .money-holder {
      width: 70%;
    }
  }
  @media screen and (max-width: 500px) {
    .client-data-holder {
      flex-direction: column;
      align-items: self-start;

      & > div:last-child {
        margin-left: 0 !important;
        margin-top: 1rem;
      }
    }
    .money-holder {
      width: 90vw;
      flex-direction: column;
      align-items: self-start;

      & > div:last-child {
        margin-top: 1rem;
      }
    }
  }
`;
export default function PaymentPage() {
  return (
    <Container>
      <div>
        <WalletIcon />
        <h1>Pagamento</h1>
      </div>
      <SectionContainer
        style={{ marginTop: '2rem' }}
        titleFontSize="1rem"
        title="Resumo da compra"
      >
        <OrderDetails style={{ marginTop: '1rem' }} />
      </SectionContainer>
      <ClientData />
      <PaymenSection />
    </Container>
  );
}
