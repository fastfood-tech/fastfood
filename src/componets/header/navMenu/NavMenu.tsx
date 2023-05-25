import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import NavLink from './NavLink';

interface IContainerProps extends React.HtmlHTMLAttributes<HTMLElement> {
  isMenuOpen: boolean;
}

const Container = styled(({ isMenuOpen, ...props }: IContainerProps) => (
  <nav {...props} />
))`
  color: #fff;

  @media screen and (max-width: 800px) {
    height: 100vh;
    width: 50vw;
    min-width: 120px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2rem;
    position: fixed;
    top: 0;
    right: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-68vw')};

    background-color: rgba(18, 92, 19, 0.2);
    opacity: 0.9;

    padding-top: 5rem;

    z-index: 1;

    transition: 0.5s;
  }
`;

export default function NavMenu(props: IContainerProps) {
  const { pathname } = useLocation();
  const { isMenuOpen } = props;

  return (
    <Container isMenuOpen={isMenuOpen}>
      <NavLink isSelected={pathname === '/'} to="/">
        Pedidos
      </NavLink>
      <NavLink isSelected={pathname === '/cozinnha'} to="/cozinnha">
        Cozinha
      </NavLink>
      <NavLink isSelected={pathname === '/retirada'} to="/retirada">
        Retirada
      </NavLink>
    </Container>
  );
}
