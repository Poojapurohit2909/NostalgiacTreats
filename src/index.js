import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { CartProvider } from './Context/CartContext';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
