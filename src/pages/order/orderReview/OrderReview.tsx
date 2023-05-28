import React from 'react';
import styled from 'styled-components';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/CloseRounded';
import useReviewProductHandler from '../../../hooks/useReviewProductHandler';
import SelectedProductDetails from './SelectedProductDetails';

const ContentCover = styled.div`
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;

  background-color: #fff;
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

  border: 1px solid red;
  background-color: #fff;

  border-radius: 25px;
  z-index: 6;
  overflow: hidden;
  padding: 4vw 6vw;

  & > h1 {
    font-weight: bold;
    font-size: 2.25rem;
  }

  & > button {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  & > .scrollable-content {
    & > h1 {
      font-weight: 700;
      font-size: 2.25rem;
      color: #181818;

      margin-top: 5rem;
    }

    overflow: scroll;
    height: 55vh;

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
  const { cancel } = useReviewProductHandler();

  return (
    <>
      <ContentCover />
      <Container>
        <h1>Revise seu pedido</h1>

        <Fab
          onClick={cancel}
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
        </div>
      </Container>
    </>
  );
}
