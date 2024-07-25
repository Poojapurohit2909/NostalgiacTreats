import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/all_product.json';
import './ProductList.css'; // Ensure you create this CSS file for styling

const ProductList = () => {
  return (
    <div className="product-list">
      <div className='heading'>
        <h2 className='logo'>Products</h2>
        <hr />
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <img src={require(`../../images/${product.image}`)} alt={product.name} className='product_img' />
              <h3>{product.name}</h3>
              <p>Rs.{product.price.toFixed(2)}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
