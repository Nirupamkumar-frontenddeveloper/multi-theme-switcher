import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div className={`content ${theme}`}>
      <div className="container">
        {theme === 'theme2' && (
          <div className="sidebar">
            <h2>Our Story</h2>
            <p>Learn about our journey and mission.</p>
          </div>
        )}
        <div className={theme === 'theme2' ? 'main-content' : ''}>
          <h1 className={`title ${theme}`}>About Us</h1>
          <p className={`paragraph ${theme}`}>
            Hipster App is dedicated to bringing you the most stylish and unique products. Our mission is to inspire creativity and individuality through our curated collections.
          </p>
          <button className={`button ${theme}`}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;