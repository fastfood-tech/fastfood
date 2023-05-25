import React from 'react';
import { CiBurger as BurgerIcon } from 'react-icons/ci';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  & > h1 {
    color: #fff;
    font-size: 1.75rem;
    font-family: Roboto, sans-serif !important;
    font-weight: 500;
  }

  div.icon-holder {
    height: 2rem;
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #125c13;
    font-size: 2rem;

    border-radius: 50%;
    background-color: #fff;

    margin-right: 0.5rem;
  }
`;
export default function Logo() {
  return (
    <Container>
      <div className="icon-holder">
        <BurgerIcon />
      </div>
      <h1>fastfood</h1>
    </Container>
  );
}
