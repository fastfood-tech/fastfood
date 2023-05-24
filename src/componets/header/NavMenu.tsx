import React from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from './NavLink';

export default function NavMenu() {
  const { pathname } = useLocation();
  return (
    <nav>
      <NavLink isSelected={pathname === '/'} to="/">
        Pedidos
      </NavLink>
      <NavLink isSelected={pathname === '/cozinnha'} to="/cozinnha">
        Cozinha
      </NavLink>
      <NavLink isSelected={pathname === '/retirada'} to="/retirada">
        Retirada
      </NavLink>
    </nav>
  );
}
