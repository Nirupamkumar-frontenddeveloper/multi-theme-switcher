import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../types';

const ThemeSwitcher: React.FC = () => {
  const { setTheme } = useContext(ThemeContext)!;

  return (
    <select
      onChange={(e) => setTheme(e.target.value as Theme)}
      className={useContext(ThemeContext)!.theme}
    >
      <option value="theme1">Theme 1 (Minimalist)</option>
      <option value="theme2">Theme 2 (Dark)</option>
      <option value="theme3">Theme 3 (Colorful)</option>
    </select>
  );
};

export default ThemeSwitcher;