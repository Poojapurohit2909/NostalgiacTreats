import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {state.cartItems.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
