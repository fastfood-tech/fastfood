import React from 'react';
import styled from 'styled-components';
import { Direction, WrapMode } from './types';

export interface IItemsHolderProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  direction?: Direction;
  wrapMode?: WrapMode;
  itemsGap?: string;
}

const ItemsHolder = styled(
  ({ direction, wrapMode, itemsGap, ...props }: IItemsHolderProps) => (
    <div {...props} />
  ),
)`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  flex-wrap: ${({ wrapMode = 'nowrap' }) => wrapMode};
  gap: ${({ itemsGap = '3rem' }) => itemsGap};

  & > * {
    flex-shrink: 0;
  }

  padding-bottom: 1rem;

  overflow-x: hidden;

  &:hover {
    overflow-x: ${({ wrapMode = 'nowrap' }) =>
      wrapMode !== 'nowrap' ? 'hidden' : 'scroll'};

    padding-bottom: ${({ wrapMode = 'nowrap' }) =>
      wrapMode === 'wrap' ? '1rem' : '0.25rem'};
  }

  @media screen and (hover: hover) {
    &::-webkit-scrollbar {
      height: 0.75rem;
    }

    &::-webkit-scrollbar-track {
      background-color: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #125c13aa;
      border-radius: 9px;
    }
  }

  @media screen and (hover: none) {
    overflow-x: ${({ wrapMode = 'nowrap', direction = 'row' }) =>
      wrapMode !== 'nowrap' &&
      (direction === 'column' || direction === 'column-reverse')
        ? 'hidden'
        : 'scroll'};
  }
`;

export default ItemsHolder;
