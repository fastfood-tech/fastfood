import React from 'react';
import styled from 'styled-components';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import SectionContainer from '../../componets/SectionContainer';
import Product from './products/Product';
import useReviewProductHandler from '../../hooks/useReviewProductHandler';
import { SelectedProduct } from '../../types/types';
import getProductBanners from './products/utils/getProductBanners';

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

  .product-details {
    display: flex;
    align-items: center;
  }

  .product-data {
    width: 85%;
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
    margin: 0 auto;
  }

  .product-data-details {
    width: 60%;
    margin-top: 0;
  }
  .amount-holder {
    margin-top: 1rem;
    border: 2px solid #125c13;
    border-radius: 50px;
    width: fit-content;
    min-width: 7rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    align-items: center;

    & > button {
      width: 2.5rem;
      height: 2.5rem;

      &:first-child {
        margin-right: 0.5rem;
      }

      &:last-child {
        margin-left: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 1250px) {
    width: 90vw;
    left: 5vw;
  }

  @media screen and (max-width: 700px) {
    .product-details {
      flex-direction: column;
      align-items: center;
    }
    .product-data {
      width: 90%;
      flex-direction: column;
      align-items: center;

      margin: 0;

      p {
        margin-top: 1.5rem;
        text-align: center;
      }
    }

    .product-data-details {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
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
  const { cancel, reviewingProduct, updateReviewingProduct } =
    useReviewProductHandler();

  const changeProductAmount = (amountToAdd: number) => {
    if (!reviewingProduct) return;

    const resultAmount = reviewingProduct.amount + amountToAdd;
    if (resultAmount < 1) return;

    reviewingProduct.amount = resultAmount;
    updateReviewingProduct({ ...reviewingProduct });
  };

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
          <SectionContainer className="product-details">
            <Product
              shaddowOnHover={false}
              isReview
              style={{ flexShrink: 0 }}
              key={`searched-product-${reviewingProduct?.id}`}
              isSelected={false}
              product={reviewingProduct as SelectedProduct}
              bannerImage={{ url: getProductBanners()[0].url }}
            />
            <div className="product-data">
              <SectionContainer
                className="product-data-details"
                title={reviewingProduct?.name}
                titleFontSize="1.5rem"
                subTitle={reviewingProduct?.ingredients}
                subtitleFontSize="1rem"
              >
                <div className="amount-holder">
                  <Fab
                    style={{ backgroundColor: '#125C13' }}
                    onClick={() => changeProductAmount(-1)}
                  >
                    <RemoveRoundedIcon
                      style={{ fontSize: '2rem', color: '#fff' }}
                    />
                  </Fab>
                  {reviewingProduct?.amount}
                  <Fab
                    style={{
                      backgroundColor: '#125C13',
                    }}
                    onClick={() => changeProductAmount(1)}
                  >
                    <AddRoundedIcon
                      style={{ fontSize: '2rem', color: '#fff' }}
                    />
                  </Fab>
                </div>
              </SectionContainer>
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '2rem',
                  textAlign: 'center',
                }}
              >
                {reviewingProduct?.price}
              </p>
            </div>
          </SectionContainer>
        </div>
      </Container>
    </>
  );
}
