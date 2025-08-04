export type Theme = 'theme1' | 'theme2' | 'theme3';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}