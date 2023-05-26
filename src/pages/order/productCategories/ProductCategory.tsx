import React from 'react';
import styled from 'styled-components';

import SelectableItemContainer, {
  ISelectableItemContainerProps,
} from '../../../componets/SelectableItem';

interface IProductCategoryProps extends ISelectableItemContainerProps {
  name: string;
  image: { url: string; description?: string };
}

const Container = styled(SelectableItemContainer)`
  width: 21.5rem;
  min-height: 13rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  & > div:first-child {
    width: 66%;

    img {
      width: 100%;
      height: 100%;
      max-height: 8rem;

      object-fit: contain;
    }

    margin-bottom: 0.5rem;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1.75rem;
    color: #121212;

    text-align: center;
  }

  padding: 1rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 800px) {
    width: auto;
    max-width: 21.5rem;
    min-width: 200px;

    min-height: 10rem;
  }
`;

export default function ProductCategory({
  name,
  image,
  isSelected,
  ...props
}: IProductCategoryProps) {
  return (
    <Container isSelected={isSelected} {...props}>
      <div>
        <img src={image.url} alt={image.description || ''} />
      </div>
      <h1>{name}</h1>
    </Container>
  );
}
