import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

 // Calculate the total amount
 const totalAmount = cartItems
 .reduce((total, item) => total + item.price * item.quantity, 0)
 .toFixed(2);

  const handleConfirmPurchase = () => {
    setIsProcessing(true);
    // Simulate a delay to represent transaction processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      clearCart(); // Clear cart upon successful purchase
    }, 2000); // Simulate a 2-second transaction delay
  };

  const handleContinueShopping = () => {
    navigate('/product'); // Navigate back to products page
  };

  return (
     <section className='checkout-page'>
    <div className="buyNow-checkout-page">
      <h2>Checkout</h2>

      {isCompleted ? (
        <div className="buyNow-checkout-completion">
          <h3>Thank you for your purchase!</h3>
          <p>Your transaction was successful.</p>
          <button onClick={handleContinueShopping} className="btn">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="buyNow-checkout-summary">
            <h3>Order Summary</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>Qty: {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="buyNow-total-amount">
              <strong>Total: ${totalAmount}</strong>
            </div>
          </div>

          <button
            onClick={handleConfirmPurchase}
            className="buyNow-btn buyNow-checkout-btn"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Confirm Purchase'}
          </button>
        </div>
      )}
    </div>
    </section>
  );
};

export default CheckoutPage;
