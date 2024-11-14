import React, { useState, useEffect } from 'react';
import './SingleProductPage.css'; // Standard CSS file for styling
import { useParams,Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../components/data';

const SingleProductPage = ({ products }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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
  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, products]);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="single-product-page">
      <div className="single-product-details">
        {/* Product Image Gallery */}
        <div className="single-product-images">
          <img src={`/${product.imgSrc}`} alt={product.name} className="single-main-image" />
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
        </div>

        {/* Product Information */}
        <div className="single-product-info">
          <h1 className="single-product-name">{product.name}</h1>
          <p className="single-product-description">{product.description}</p>
          <div className="single-price">
            <span className="single-price-range">${product.numericPrice[0]} - ${product.numericPrice[1]}</span>
            <span className="single-price-rating">
              {product.rating} <i className="fa fa-star"></i>
            </span>
          </div>

          <div className="single-product-meta">
            <p>Seller: <span>{product.seller}</span></p>
            <p>Origin: <span>{product.origin}</span></p>
            <p>Category: <span>{product.category}</span></p>
            <p>Availability: <span>{product.availability}</span></p>
          </div>

          <button
                onClick={() => {
                  const averagePrice = (product.numericPrice[0] + product.numericPrice[1]) / 2;
                  isInCart(product.id)
                    ? removeFromCart(product.id)
                    : addToCart({
                      ...product,
                      quantity: quantities[product.id],
                      price: averagePrice.toFixed(2) // Pass the calculated average price
                    });
                }}
                className="single-add-to-cart"
              >
                {isInCart(product.id) ? 'Remove from cart' : 'Add to cart'}
              </button>
              <Link to='/checkout'><button className="single-buyNow-btn">Buy Now</button></Link>
              
        </div>
      </div>

      {/* Nutritional Information Table */}
      <div className="single-nutrition-table">
        <h2>Nutrition Information</h2>
        <table>
          <thead>
            <tr>
              <th>Calories</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Carbs</th>
              <th>Fiber</th>
              <th>Sugars</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.nutrition.calories}</td>
              <td>{product.nutrition.protein}</td>
              <td>{product.nutrition.fat}</td>
              <td>{product.nutrition.carbs}</td>
              <td>{product.nutrition.fiber}</td>
              <td>{product.nutrition.sugars}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleProductPage;
