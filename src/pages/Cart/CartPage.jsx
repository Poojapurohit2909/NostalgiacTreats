import React from 'react';
import { useCart } from '../../Context/CartContext';
import './CartPage.css'; // Ensure you create this CSS file for styling

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    return <div className="cart-page">Your cart is empty.</div>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={require(`../../images/${item.image}`)} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Rs.{item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: Rs.{total.toFixed(2)}</h3>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
