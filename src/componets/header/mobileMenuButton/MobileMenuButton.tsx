import React from 'react';
import styled from 'styled-components';
import VerticalBar from './VerticalBar';
import MiddleBar from './MiddleBar';

interface IContainerProps extends React.HtmlHTMLAttributes<HTMLElement> {
  isMobileMenuOpen: boolean;
}

const Container = styled(({ isMobileMenuOpen, ...props }: IContainerProps) => (
  <div {...props} />
))`
  display: none;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  z-index: 2;

  margin: auto 0;

  ${VerticalBar}:nth-of-type(1) {
    transform: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? 'translate3d(0,0.8rem,0) rotate(45deg)' : ''};
  }

  ${VerticalBar}:nth-of-type(3) {
    transform: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? 'translate3d(0,-0.8rem,0) rotate(-45deg)' : ''};
  }

  @media screen and (max-width: 800px) {
    display: flex;
  }
`;

interface MenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function MenuButton({
  isMenuOpen,
  toggleMenu,
}: MenuButtonProps) {
  return (
    <Container onClick={toggleMenu} isMobileMenuOpen={isMenuOpen}>
      <VerticalBar />
      <MiddleBar hide={isMenuOpen} />
      <VerticalBar />
    </Container>
  );
}
