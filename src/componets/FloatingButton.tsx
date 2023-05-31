import React from 'react';
import { Fab, FabProps } from '@mui/material';
import styled from 'styled-components';

interface IFloatingButtonProps extends FabProps {
  confirmation?: boolean;
}
export const FloatingButton = styled(
  ({ confirmation, ...props }: IFloatingButtonProps) => <Fab {...props} />,
)` 
    &&{
    width: 17rem;

    background-color: ${({ confirmation }) =>
      confirmation ? '#125c13' : '#fff'};
    color: ${({ confirmation }) => (confirmation ? '#fff' : '#125c13')};

    border: 1px solid #125c13;
    border-radius: 15px;

    margin: 1rem;

    overflow: hidden;

    text-transform: capitalize;
    z-index: 5;

    &:disabled {
      color: #ababab;
      background-color: #fff;
      border: 1px solid #ababab;
    }

    &:hover{
        filter: brightness(90%);
        background-color: ${({ confirmation }) =>
          confirmation ? '#125c13' : '#fff'};
    }
  }}



  @media screen and (max-width: 800px) {
    && {
      width: 15rem;
    }
  }

  @media screen and (max-width: 700px) {
    && {
      width: 80%;

      font-size: 0.75rem;
      line-height: 0.75rem;
    }

`;
