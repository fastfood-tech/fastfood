import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import askForConfirmation from '../../helpers/askForConfirmation';
import useOrderHandler from '../../hooks/useOrderHandler';
import { FloatingButton } from '../../componets/FloatingButton';

const Container = styled.div`
  display: flex;
  justify-content: end;

  margin-top: 2rem;
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
      <FloatingButton
        confirmation
        onClick={cancel}
        disabled={disable}
        variant="extended"
      >
        Cancelar
      </FloatingButton>
      <FloatingButton
        disabled={disable}
        onClick={() => nav('pagamento')}
        variant="extended"
      >
        finalizar Pedido
      </FloatingButton>
    </Container>
  );
}
