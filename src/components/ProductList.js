import React from 'react';
import useFetch from '../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  
  return (
    <div className="product-container">
      <h1 className="product-title">Featured Products Collection</h1>
      <div className="product-list">
        {data?.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
