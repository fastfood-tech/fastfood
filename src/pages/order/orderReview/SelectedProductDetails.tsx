import React from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Fab } from '@mui/material';
import styled from 'styled-components';
import SectionContainer from '../../../componets/SectionContainer';
import Product from '../products/Product';
import useReviewProductHandler from '../../../hooks/useReviewProductHandler';
import { SelectedProduct } from '../../../types/types';
import getProductBanners from '../products/utils/getProductBanners';

const Container = styled(SectionContainer)`
  display: flex;
  align-items: center;

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

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;

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
`;
export default function SelectedProductDetails() {
  const { reviewingProduct, updateReviewingProduct } =
    useReviewProductHandler();

  const changeProductAmount = (amountToAdd: number) => {
    if (!reviewingProduct) return;

    const resultAmount = reviewingProduct.amount + amountToAdd;
    if (resultAmount < 1) return;

    reviewingProduct.amount = resultAmount;
    updateReviewingProduct({ ...reviewingProduct });
  };
  return (
    <Container>
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
              <RemoveRoundedIcon style={{ fontSize: '2rem', color: '#fff' }} />
            </Fab>
            {reviewingProduct?.amount}
            <Fab
              style={{
                backgroundColor: '#125C13',
              }}
              onClick={() => changeProductAmount(1)}
            >
              <AddRoundedIcon style={{ fontSize: '2rem', color: '#fff' }} />
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
    </Container>
  );
}
