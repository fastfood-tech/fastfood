import React from 'react';
import SectionContainer from '../../componets/SectionContainer';
import useOrderPayment from '../../hooks/useOrderPayment';
import useOrders from '../../hooks/api/useOrders';
import Loader from '../../componets/Loader';

export default function ClientData() {
  const { nextOrderCode, isLoading } = useOrders();
  const { handleClientName, clientName } = useOrderPayment();

  return (
    <div className="client-data-holder">
      <SectionContainer
        style={{ width: '80%' }}
        titleFontSize="1rem"
        title="Nome do cliente"
      >
        <input
          type="text"
          className="client"
          placeholder="Primeiro nome"
          onChange={handleClientName}
          value={clientName}
        />
      </SectionContainer>
      <SectionContainer
        style={{ marginLeft: '2rem', width: '15%', minWidth: '5rem' }}
        titleFontSize="1rem"
        title="Código"
      >
        {isLoading ? (
          <Loader width="3rem" height="3rem" />
        ) : (
          <input type="text" value={nextOrderCode || 'offline'} disabled />
        )}
      </SectionContainer>
    </div>
  );
}
