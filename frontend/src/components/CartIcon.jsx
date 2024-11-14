import React, { useState, useEffect } from 'react';
import './CartIcon.css';
import { useCart } from '../context/CartContext';

const CartIcon = () => {
  const { cartItems } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (totalItems > 0) {
      setIsAnimating(true);
      const timeout = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

  return (
    <div className="cart-icon" onClick={() => alert('Redirect to cart page')}>
      <i className="fa fa-shopping-cart"></i>
      {totalItems > 0 && (
        <span className={`cart-count ${isAnimating ? 'animate' : ''}`}>
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
