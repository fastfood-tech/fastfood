import React from 'react';
import { styled } from 'styled-components';
import { CiBurger as BurgerIcon } from 'react-icons/ci';
import NavMenu from './NavMenu';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 5vh;
  min-height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #125c13;

  padding-left: 2.5rem;
  padding-right: 2.5rem;

  overflow: hidden;

  & > div:first-child {
    display: flex;
    align-items: center;
  }

  & > div:first-child p {
    color: #fff;
    font-size: 1.75rem;
    letter-spacing: 0.075rem;
    font-weight: bold;
  }

  & > div:first-child div.icon-holder {
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

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <div className="icon-holder">
          <BurgerIcon />
        </div>
        <p>fastfood</p>
      </div>
      <NavMenu />
    </HeaderContainer>
  );
}
