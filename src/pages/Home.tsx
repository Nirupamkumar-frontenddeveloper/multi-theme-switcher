import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext)!;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`content ${theme}`}>
      <div className="container">
        <h1 className={`title ${theme}`}>Welcome to Hipster App</h1>
        <p className={`paragraph ${theme}`}>
          Discover our curated collection of products with a unique style.
        </p>
        <button className={`button ${theme}`}>Explore Now</button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={`product-grid ${theme}`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;