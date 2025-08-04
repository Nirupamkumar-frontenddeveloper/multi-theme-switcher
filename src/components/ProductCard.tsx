import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div className={`product-card ${theme}`}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.substring(0, 100)}...</p>
    </div>
  );
};

export default ProductCard;