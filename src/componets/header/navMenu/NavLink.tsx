import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface INavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isSelected: boolean;
  to: string;
}

const NavLink = styled(({ isSelected, ...props }: INavLinkProps) => (
  <Link {...props} />
))`
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgba(0, 0, 0, 0.25)' : 'rgba(18, 92, 19, 1)'};

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

export default NavLink;
