import React from 'react';
import { styled } from 'styled-components';
import NavMenu from './navMenu/Index';
import ContentCover from './ContentCover';
import MenuButton from './mobileMenuButton/Index';
import UseMobileMenu from '../../hooks/UseMobileMenu';
import Logo from './Logo';

const Container = styled.div`
  width: 100vw;
  height: 5vh;
  min-height: 4rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #125c13;

  padding-left: 2.5rem;
  padding-right: 2.5rem;

  overflow: hidden;

  @media screen and (max-width: 350px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default function Header() {
  const { isMenuOpen, toggleMenu } = UseMobileMenu();

  return (
    <Container>
      <Logo />
      <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <NavMenu isMenuOpen={isMenuOpen} />
      <ContentCover onClick={toggleMenu} hide={!isMenuOpen} />
    </Container>
  );
}
