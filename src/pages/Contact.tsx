import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div className={`content ${theme}`}>
      <div className="container">
        {theme === 'theme2' && (
          <div className="sidebar">
            <h2>Contact Info</h2>
            <p>Reach out to us!</p>
          </div>
        )}
        <div className={theme === 'theme2' ? 'main-content' : ''}>
          <h1 className={`title ${theme}`}>Contact Us</h1>
          <p className={`paragraph ${theme}`}>
            Hipster Pte. Ltd.<br />
            #01-04, 75 Ayer Rajah Crescent, 139953, Singapore<br />
            UEN: 201621408D<br />
            Contact: +6582314107<br />
            Email: hr@hipster-inc.com<br />
            Website: www.hipster-inc.com
          </p>
          <button className={`button ${theme}`}>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;