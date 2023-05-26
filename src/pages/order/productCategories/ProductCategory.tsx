import React from 'react';
import styled from 'styled-components';
import CardContainer from '../../../componets/CardContainer';

interface IProductCategoryProps extends React.HtmlHTMLAttributes<HTMLElement> {
  name: string;
  image: { url: string; description?: string };
}

const Container = styled(CardContainer)`
  width: auto;
  max-width: 18rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  & > div {
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

  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
`;

export default function ProductCategory({
  name,
  image,
  ...props
}: IProductCategoryProps) {
  return (
    <Container {...props}>
      <div>
        <img src={image.url} alt={image.description || ''} />
      </div>
      <h1>{name}</h1>
    </Container>
  );
}
