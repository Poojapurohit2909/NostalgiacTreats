import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../../data/all_product.json';
import './ProductPage.css';

const ProductPage = ({ isLoggedIn }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert('Please log in to add products to the cart.');
      navigate('/login');
      return;
    }
    // Add to cart logic here
    alert('Product added to cart');
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image-container">
          <img src={require(`../../images/${product.image}`)} alt={product.name} className="product-img" />
        </div>
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: Rs.{product.price.toFixed(2)}</p>
          <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
