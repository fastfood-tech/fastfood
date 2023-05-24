import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { CiBurger as BurgerIcon } from 'react-icons/ci';

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

const HeaderMenu = styled.div``;

interface INavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isSelected: boolean;
  to: string;
}

const NavLink = styled(({ isSelected, ...props }: INavLinkProps) => (
  <Link {...props} />
))`
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgba(0, 0, 0, 0.25)' : 'inherit'};

  color: #fff !important;
  font-size: 1rem;
  letter-spacing: 0.025rem;
  font-weight: 600;

  margin-right: 1rem;

  padding: 0.65rem;
  padding-left: 1rem;
  padding-right: 1rem;

  border-radius: 9px;
`;

export default function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <div>
        <div className="icon-holder">
          <BurgerIcon />
        </div>
        <p>fastfood</p>
      </div>
      <HeaderMenu>
        <NavLink isSelected={pathname === '/'} to="/">
          Pedidos
        </NavLink>
        <NavLink isSelected={pathname === '/cozinnha'} to="/cozinnha">
          Cozinha
        </NavLink>
        <NavLink isSelected={pathname === '/retirada'} to="/retirada">
          Retirada
        </NavLink>
      </HeaderMenu>
    </HeaderContainer>
  );
}
