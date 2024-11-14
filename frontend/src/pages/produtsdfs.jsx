import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Product.css';

const Product = () => {
  const products = [
    // Same product data as before
  ];

  const { addToCart, removeFromCart, isInCart } = useCart();

  // State to track quantity of each product
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  // Function to handle quantity change
  const handleQuantityChange = (id, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, value), // Minimum quantity of 1
    }));
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">Our <span>Products</span></h1>
      <div className="product-slider">
        <div className="slider">
          {products.map((product) => (
            <div className="slide-box" key={product.id}>
              <img src={product.imgSrc} alt={product.name} />
              <h1>{product.name}</h1>
              <div className="price">{product.price}</div>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    key={i}
                    className={`fa ${i < Math.floor(product.rating) ? 'fa-star' : 'fa-star-half'}`}
                  ></i>
                ))}
              </div>
              <div className="quantity-control">
                <button
                  onClick={() => handleQuantityChange(product.id, quantities[product.id] - 1)}
                  disabled={quantities[product.id] <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantities[product.id]}
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                  min="1"
                />
                <button
                  onClick={() => handleQuantityChange(product.id, quantities[product.id] + 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() =>
                  isInCart(product.id)
                    ? removeFromCart(product.id)
                    : addToCart({ ...product, quantity: quantities[product.id] })
                }
                className="btn"
              >
                {isInCart(product.id) ? 'Remove from cart' : 'Add to cart'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
