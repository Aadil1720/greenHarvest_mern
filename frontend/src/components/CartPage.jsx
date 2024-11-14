// CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  // Ensure cartItems is an array before reducing
  const totalAmount = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.imgSrc} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className='emptyCart'>
        <p>Your cart is empty.</p>
        <Link to='/product'><button className='btn'>Shop Now</button></Link>
        </div> 
      )}
      {Array.isArray(cartItems) && cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
         <Link to='/checkout'>
         <button  className="checkout-button">
            Checkout
          </button>
         </Link>
         
        </div>
      )}
    </div>
  );
};

export default CartPage;
