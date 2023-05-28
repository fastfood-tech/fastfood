import React from 'react';
import styled from 'styled-components';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/CloseRounded';
import useReviewProductHandler from '../../../hooks/useReviewProductHandler';
import SelectedProductDetails from './SelectedProductDetails';
import SectionContainer from '../../../componets/SectionContainer';
import ExtraItem from './ExtraItem';
import OrderAnnotations from './OrderAnnotations';
import FooterButtons from './FooterButtons';
import useSelectProductHandler from '../../../hooks/useSelectProductHandler';
import OrderDetails from '../../../componets/OrderDetails';

const ContentCover = styled.div`
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;

  background-color: #9f9f9f;
  opacity: 0.8;

  z-index: 5;

  transition: 0.5s;

  padding-top: 10rem;
`;

const Container = styled.div`
  width: 70vw;
  height: 75vh;

  position: fixed;
  top: calc(5vh + 5rem);
  left: 15vw;

  background-color: #fff;

  border-radius: 25px;
  z-index: 6;
  overflow: hidden;
  padding: 4vw 6vw;

  & > h1 {
    font-weight: bold;
    font-size: 1.75rem;
  }

  & > button {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  & > .scrollable-content {
    overflow: scroll;
    height: 60vh;

    & > h1 {
      font-weight: 700;
      font-size: 2.25rem;
      color: #181818;

      margin-top: 5rem;
    }

    &::-webkit-scrollbar {
      width: 0.5em;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }

  @media screen and (max-width: 1250px) {
    width: 90vw;
    left: 5vw;
  }

  @media screen and (max-width: 900px) {
    padding-top: 3rem;

    & > button {
      width: 2rem;
      height: 2rem;

      top: 0.5rem;
      right: 0.5rem;
    }
  }

  @media screen and (max-width: 800px) {
    & > h1 {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`;

export default function OrderReview() {
  const { finishReviewng, reviewingProduct } = useReviewProductHandler();
  const { getSelectedProducts } = useSelectProductHandler();

  const shouldShowOrderDetails = getSelectedProducts().length > 0;

  return (
    <>
      <ContentCover />
      <Container>
        <h1>Revise seu pedido</h1>

        <Fab
          onClick={finishReviewng}
          sx={{
            backgroundColor: '#fff',
            boxShadow: 'none',
            color: '#9f9f9f',
          }}
          aria-label="add"
        >
          <CloseIcon sx={{ fontSize: '2.5rem' }} />
        </Fab>

        <div className="scrollable-content">
          <SelectedProductDetails />
          <SectionContainer
            title="Adicionais"
            titleFontSize="1.25rem"
            subTitle="Selecione os ingredientes que você quer adicionar a mais no seu lanche"
            subtitleFontSize="1rem"
          >
            {reviewingProduct?.extras.map(e => (
              <ExtraItem key={`product-extra-item-${e.id}`} item={e} />
            ))}
          </SectionContainer>
          <OrderAnnotations style={{ marginBottom: '2rem' }} />
          {shouldShowOrderDetails && <OrderDetails />}
          <FooterButtons />
        </div>
      </Container>
    </>
  );
}
