import React from 'react';
import styled from 'styled-components';
import { Extra } from '../../../types/types';
import useReviewProductHandler from '../../../hooks/useReviewProductHandler';
import formatMonetaryValue from '../../../helpers/formatMonetaryValue';

interface IExtraItemsProps extends React.HtmlHTMLAttributes<HTMLEmbedElement> {
  item: Extra;
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  * {
    flex-shrink: 0;
  }

  .details-holder {
    width: 60%;
  }

  h1 {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.8rem;
  }

  p.price-holder {
    font-weight: 700;
    font-size: 1rem;
    color: #9f9f9f;
  }

  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;
    border: 2px solid #125c13;

    outline: none;

    padding: 2px;
    background-clip: content-box;

    cursor: pointer;

    &:checked {
      background-color: #125c13;
    }
  }

  .image-holder {
    width: 7rem;
    padding: 0.5rem;
    background-color: #fff;

    -webkit-box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);
    -moz-box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);
    box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);

    border-radius: 20px;

    img {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  }

  @media screen and (max-width: 1000px) {
    .details-holder {
      width: 40%;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .details-holder {
      width: 100%;
    }

    p,
    h1 {
      text-align: center;
    }

    p {
      margin-bottom: 1.5rem;
    }

    .image-holder {
      margin-bottom: 1rem;
    }
  }
`;

export default function ExtraItem({ item, ...props }: IExtraItemsProps) {
  const { isExtraSelected, selectExtra } = useReviewProductHandler();

  return (
    <Container {...props}>
      <div className="image-holder">
        <img src={item.image.url} alt={item.image.description || ''} />
      </div>
      <div className="details-holder">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
      <p className="price-holder">{formatMonetaryValue(item.price)}</p>
      <input
        checked={isExtraSelected(item)}
        onChange={() => selectExtra(item)}
        type="checkbox"
      />
    </Container>
  );
}
