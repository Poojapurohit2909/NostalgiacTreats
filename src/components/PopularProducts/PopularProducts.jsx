import React from 'react'
import { Link } from 'react-router-dom';
import './PopularProducts.css'
import products from '../../data/product.json';

const PopularProducts = () => {
    return (
        <div className="product-list">
          <div className='heading'>
            <h2 className='logo'>Popular Products</h2>
            <hr />
          </div>
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product">
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <img src={require(`../../images/${product.image}`)} alt={product.name} className='product_img' />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <button className="add-to-cart-button">Add to Cart</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
export default PopularProducts
