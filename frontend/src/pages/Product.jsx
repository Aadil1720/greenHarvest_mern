import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [products, setProducts] = useState([]); // State to store fetched products
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products'); // Update with your API URL
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);

        // Initialize quantities state for each product
        setQuantities(data.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {}));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle quantity change
  const handleQuantityChange = (id, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, value), // Minimum quantity of 1
    }));
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

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
                onClick={() => {
                  const averagePrice = (product.numericPrice[0] + product.numericPrice[1]) / 2;
                  isInCart(product.id)
                    ? removeFromCart(product.id)
                    : addToCart({
                        ...product,
                        quantity: quantities[product.id],
                        price: averagePrice.toFixed(2), // Pass the calculated average price
                      });
                }}
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
