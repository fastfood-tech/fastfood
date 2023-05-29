import React from 'react';
import SectionContainer from '../../componets/SectionContainer';
import useOrderPayment from '../../hooks/useOrderPayment';

export default function ClientData() {
  const { handleClientName, clientName, orderCode } = useOrderPayment();
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
        <input type="text" value={orderCode} disabled />
      </SectionContainer>
    </div>
  );
}
