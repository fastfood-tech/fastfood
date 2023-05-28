import React from 'react';
import styled from 'styled-components';
import { Calculate } from '@mui/icons-material';
import SelectableItemContainer, {
  ISelectableItemContainerProps,
} from '../../../componets/SelectableItem';
import {
  Image,
  Product as ProductType,
  SelectedProduct,
} from '../../../types/types';
import formatMonetaryValue from '../../../helpers/formatMonetaryValue';

interface IProductProps extends ISelectableItemContainerProps {
  product: ProductType | SelectedProduct;
  bannerImage: Image;
  isReview?: boolean;
}

type ContainerProps = Omit<IProductProps, 'product'>;
const Container = styled(({ bannerImage, ...props }: ContainerProps) => (
  <SelectableItemContainer {...props} />
))`
  width: fit-content;

  background-image: url(${({ bannerImage }) => bannerImage.url});
  background-size: cover;

  overflow: hidden;

  margin: 1rem;
`;

interface IContentProps extends React.HtmlHTMLAttributes<HTMLElement> {
  isReview?: boolean;
}

const Content = styled(({ isReview, ...props }: IContentProps) => (
  <div {...props} />
))`
  width: ${({ isReview }) => (isReview ? '10rem' : '15vw')};
  min-height: ${({ isReview }) => (isReview ? '4.5rem' : '10rem')};

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  color: #121212;

  background-color: #fff;

  position: relative;

  overflow: visible;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  margin-top: ${({ isReview }) =>
    isReview ? 'calc(1vw + 2rem)' : 'calc(2vw + 2.5rem)'};

  & {
    padding: 0.5rem;
    padding-top: 4rem;
  }

  & > div:first-child {
    width: 66%;
    height: 8rem;
    position: absolute;
    top: -4rem;
    left: ${({ isReview }) =>
      isReview ? 'calc(5rem - 33%)' : 'calc(7.5vw - 33%)'};

    img {
      width: 100%;
      height: 100%;
      max-height: 8rem;

      object-fit: contain;
    }
  }

  & .highlight {
    font-family: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: inherit;

    text-align: center;
    word-break: break-all;

    margin-bottom: 0.5rem;
  }

  p.highlight {
    font-size: 1.25rem;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 1800px) {
    width: ${({ isReview }) => (isReview ? '5vw' : '12vw')};

    & > div:first-child {
      left: ${({ isReview }) =>
        isReview ? 'calc(2.5vw - 33%)' : 'calc(6vw - 33%)'};
    }
  }

  @media screen and (max-width: 800px) {
    width: ${({ isReview }) => (isReview ? '25vw' : '35vw')};
    min-height: ${({ isReview }) => (isReview ? '6rem' : '10rem')};

    margin-top: 5rem;

    & {
      padding-top: 4rem;
    }

    & > div:first-child {
      left: ${({ isReview }) =>
        isReview ? 'calc(12.5vw - 33%)' : 'calc(17.5vw - 33%)'};
    }
  }

  @media screen and (max-width: 650px) {
    width: ${({ isReview }) => (isReview ? '30vw' : '40vw')};

    & > div:first-child {
      left: ${({ isReview }) =>
        isReview ? 'calc(15vw - 33%)' : 'calc(20vw - 33%)'};
    }
  }

  @media screen and (max-width: 520px) {
    width: ${({ isReview }) => (isReview ? '25vw' : '70vw')};
    & {
      padding-top: ${({ isReview }) => (isReview ? '2rem' : '4rem')};
      margin-top: ${({ isReview }) => (isReview ? '3rem' : '6rem')};
    }

    & > div:first-child {
      left: ${({ isReview }) =>
        isReview ? 'calc(12.5vw - 33%)' : 'calc(35vw - 33%)'};
    }

    min-height: ${({ isReview }) => (isReview ? '2rem' : '15rem')};
  }
`;

export default function Product({
  isReview,
  product,
  ...props
}: IProductProps) {
  const firstIngredient = product.ingredients.split(',')[0];

  return (
    <Container style={{}} {...props}>
      <Content isReview={isReview}>
        <div>
          <img src={product.image.url} alt={product.image.description || ''} />
        </div>

        <div style={{ display: isReview ? 'none' : 'block' }}>
          <h1 className="highlight">{product.name}</h1>
          <h2>{firstIngredient}</h2>
          <p className="highlight">{formatMonetaryValue(product.price)}</p>
        </div>
      </Content>
    </Container>
  );
}
