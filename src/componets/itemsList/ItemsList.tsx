import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Direction, WrapMode } from './types';
import ItemsHolder from './ItemsHolder';

interface ItemsListProps {
  title?: string;
  subTitle?: string;
  titleFontSize?: string;
  subtitleFontSize?: string;
  direction?: Direction;
  wrapMode?: WrapMode;
  itemsGap?: string;
  items: ReactNode[];
}

const Container = styled.div`
  & > h1 {
    font-weight: 700;
    font-size: 2.25rem;
    color: #181818;
  }

  & > h2 {
    margin-top: 1rem;
  }

  ${ItemsHolder} {
    margin-top: 3rem;
  }

  margin-top: 4rem;
`;

export default function ItemsList({
  title,
  subTitle,
  titleFontSize = '1.75rem',
  subtitleFontSize = '1.25rem',
  direction = 'row',
  wrapMode = 'nowrap',
  items,
  itemsGap = '5rem',
}: ItemsListProps) {
  return (
    <Container>
      {title && <h1 style={{ fontSize: titleFontSize }}>{title}</h1>}
      {subTitle && <h2 style={{ fontSize: subtitleFontSize }}>{subTitle}</h2>}
      <ItemsHolder
        direction={direction}
        wrapMode={wrapMode}
        itemsGap={itemsGap}
      >
        {items}
      </ItemsHolder>
    </Container>
  );
}
