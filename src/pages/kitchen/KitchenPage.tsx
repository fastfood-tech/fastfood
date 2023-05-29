import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../../componets/SectionContainer';
import KitchenItem from './KitchenItem';
import useSelectProductHandler from '../../hooks/useSelectProductHandler';

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
  return (
    <Container>
      <SectionContainer style={{ padding: '1rem' }} title="Preparando:" />

      <SectionContainer style={{ padding: '1rem' }} title="Pronto:" />
    </Container>
  );
}
