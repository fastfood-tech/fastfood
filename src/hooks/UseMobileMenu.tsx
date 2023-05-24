import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const UseMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) closeMenu();
  }, [pathname]);

  useEffect(() => {
    const closeMenuOnLargeScreen = () => {
      const screenWidth = window.innerWidth;
      const mobileWidthBrakpoint = 800;

      const shouldCloseMenu = screenWidth > mobileWidthBrakpoint && isMenuOpen;
      if (shouldCloseMenu) closeMenu();
    };

    window.addEventListener('resize', closeMenuOnLargeScreen);

    return () => {
      window.removeEventListener('resize', closeMenuOnLargeScreen);
    };
  }, []);

  return { isMenuOpen, toggleMenu: () => setIsMenuOpen(!isMenuOpen) };
};

export default UseMobileMenu;
