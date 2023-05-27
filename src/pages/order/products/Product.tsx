import React from 'react';
import styled from 'styled-components';
import SelectableItemContainer, {
  ISelectableItemContainerProps,
} from '../../../componets/SelectableItem';
import { Image, Product as ProductType } from '../../../types/types';

interface IProductProps extends ISelectableItemContainerProps {
  product: ProductType;
  bannerImage: Image;
}

type ContainerProps = Omit<IProductProps, 'product'>;
const Container = styled(({ bannerImage, ...props }: ContainerProps) => (
  <SelectableItemContainer {...props} />
))`
  width: fit-content;

  padding-top: 6.5rem;
  background-image: url(${({ bannerImage }) => bannerImage.url});
  background-size: cover;

  overflow: hidden;

  margin: 1rem;
`;

const Content = styled.div`
  width: 19rem;
  min-height: 15rem;

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

  & {
    padding-top: 5rem;
  }

  & > div:first-child {
    width: 66%;
    height: 8rem;
    position: absolute;
    top: -4rem;
    left: calc(9.5rem - 33%);

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
    font-size: 1.75rem;
    color: inherit;

    text-align: center;
    word-break: break-all;

    margin-bottom: 0.5rem;
  }

  p.highlight {
    font-size: 1.5rem;
    margin-top: 3rem;
  }

  @media screen and (max-width: 480px) {
    width: 60vw;

    min-height: 15rem;

    & > div:first-child {
      width: 66%;
      height: 8rem;
      position: absolute;
      top: -4rem;
      left: calc(30vw - 33%);
    }
  }
`;

export default function Product({ product, ...props }: IProductProps) {
  const firstIngredient = product.ingredients.split(',')[0];

  return (
    <Container {...props}>
      <Content>
        <div>
          <img src={product.image.url} alt={product.image.description || ''} />
        </div>
        <h1 className="highlight">{product.name}</h1>
        <h2>{firstIngredient}</h2>
        <p className="highlight">{product.price}</p>
      </Content>
    </Container>
  );
}
