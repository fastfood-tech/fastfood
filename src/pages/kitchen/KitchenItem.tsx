import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/CloseRounded';
import DoneIcon from '@mui/icons-material/DoneRounded';

import KitchenItemDetails from './KitchenItemDetails';
import { KitchenItem as KitchenItemType } from '../../types/types';
import { OrderApiHandler } from '../../hooks/api/useOrders';
import Loader from '../../componets/Loader';
import askForConfirmation from '../../helpers/askForConfirmation';

interface IKitchenItemProps extends React.HtmlHTMLAttributes<HTMLElement> {
  finished?: boolean;
  item: KitchenItemType;
  orderApiHandler: OrderApiHandler;
}

type ContainerProps = Omit<IKitchenItemProps, 'item' | 'orderApiHandler'>;
const Container = styled(({ finished, ...props }: ContainerProps) => (
  <div {...props} />
))`
  width: 90%;
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;

  border: ${({ finished }) => (finished ? '2px solid #7DB97E' : 'none')};
  border-radius: 20px;

  * {
    flex-shrink: 0;
  }

  .details-holder {
    width: 50%;
  }

  h1 {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.8rem;
  }

  .image-holder {
    -webkit-box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);
    -moz-box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);
    box-shadow: 0px 5px 20px 5px rgba(244, 244, 244, 1);
  }

  & {
    -webkit-box-shadow: ${({ finished }) =>
      finished
        ? '0px 20px 38px -7px rgba(207, 229, 208, 1);'
        : '0px 5px 20px 5px rgba(244, 244, 244, 1)'};

    -moz-box-shadow: ${({ finished }) =>
      finished
        ? '0px 20px 38px -7px rgba(207, 229, 208, 1)'
        : '0px 5px 20px 5px rgba(244, 244, 244, 1)'};
    box-shadow: ${({ finished }) =>
      finished
        ? '0px 20px 38px -7px rgba(207, 229, 208, 1)'
        : '0px 5px 20px 5px rgba(244, 244, 244, 1)'};
  }

  .image-holder {
    width: 5rem;
    padding: 0.5rem;
    background-color: #fff;

    border-radius: 20px;

    img {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  }

  .buttons-holder {
    display: flex;
  }

  button {
    width: 2rem;
    height: 2rem;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fae5e5;

    cursor: pointer;

    border: none;
    border-radius: 10px;

    padding: 0;
    margin-right: 0.5rem;

    svg {
      color: #cf0303;
    }

    &:hover {
      filter: brightness(95%);
    }
  }

  button.finish {
    background-color: #e5f5e6;

    svg {
      color: #44b948;
    }
  }

  @media screen and (max-width: 1000px) {
    .details-holder {
      width: 40%;
    }
  }

  @media screen and (max-width: 900px) {
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

export default function KitchenItem({
  finished = false,
  item,
  orderApiHandler,
  ...props
}: IKitchenItemProps) {
  const { finish, isFinishing, deliver, isdelivering } = orderApiHandler;

  const finishOrder = () =>
    askForConfirmation('Marcar como pronto?').then(r => {
      if (r.isConfirmed) finish(item.id);
    });

  const deliverOrder = () =>
    askForConfirmation('Pedido entregue?').then(r => {
      if (r.isConfirmed) deliver(item.id);
    });

  return (
    <Container finished={finished} style={{ marginTop: '2rem' }} {...props}>
      <div className="image-holder">
        <img src={item.products[0].imageUrl} alt="" />
      </div>
      <div className="details-holder">
        <h1>
          {' '}
          {item.orderNumber} - {item.clientName}
        </h1>
        {item.products.map(p => (
          <KitchenItemDetails
            key={`kitch-item-holder-${p.id}-product-${p.id}`}
            product={p}
          />
        ))}
      </div>
      <div className="buttons-holder">
        <button className="deliver" onClick={deliverOrder} type="button">
          {isdelivering ? <Loader width="2rem" height="2rem" /> : <CloseIcon />}
        </button>
        {finished || (
          <button className="finish" onClick={finishOrder} type="button">
            {isFinishing ? <Loader width="2rem" height="2rem" /> : <DoneIcon />}
          </button>
        )}
      </div>
    </Container>
  );
}
