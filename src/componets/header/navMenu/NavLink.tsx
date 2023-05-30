import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface INavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isSelected: boolean;
  to: string;
}

const NavLink = styled(({ isSelected, ...props }: INavLinkProps) => (
  <Link {...props} />
))`
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgb(0, 50, 0)' : 'rgb(30,125,20)'};

  font-family: Roboto, sans-serif;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  font-weight: 500;

  margin-right: 1rem;

  padding: 0.65rem;
  padding-left: 1rem;
  padding-right: 1rem;

  border-radius: 9px;
`;

export default NavLink;
