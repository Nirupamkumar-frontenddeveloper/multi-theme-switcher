import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const context = useContext(ThemeContext);

  if (!context) {
    return <div>Error: ThemeContext is not available</div>;
  }

  const { theme } = context;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-10 transition-all duration-300 ${theme}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className={`logo ${theme}`}>
            Hipster App
          </Link>
          <button className={`hamburger ${theme}`} onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`nav-links ${theme} ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;