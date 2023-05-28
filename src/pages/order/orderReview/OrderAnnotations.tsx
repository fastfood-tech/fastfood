import React from 'react';
import styled from 'styled-components';
import SectionContainer, {
  ISectionContainerProps,
} from '../../../componets/SectionContainer';
import useReviewProductHandler from '../../../hooks/useReviewProductHandler';

const Container = styled(SectionContainer)`
  h1 {
    margin-left: 1.5rem;
  }
  textarea {
    width: 100%;
    resize: none;
    min-height: 7rem;

    font-family: Roboto, sans-serif;
    font-size: 1rem;

    text-align: start;

    background-color: rgb(236, 244, 255);

    border: none;
    border-radius: 9px;

    padding: 1rem;

    margin-top: 1rem;

    &::placeholder {
      color: rgb(156, 164, 175);
      font-weight: 400;
    }
  }
`;

export default function OrderAnnotations(props: ISectionContainerProps) {
  const { reviewingProduct, updateAnnotations } = useReviewProductHandler();
  return (
    <Container {...props} title="Observações" titleFontSize="1rem">
      <textarea
        value={reviewingProduct?.annotations || ''}
        onChange={e => updateAnnotations(e.target.value)}
        placeholder="Adicione uma observação ao pedido"
      />{' '}
    </Container>
  );
}
