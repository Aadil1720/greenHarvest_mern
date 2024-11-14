import React, { useState, useEffect } from 'react';

// Sample API URL (you should replace this with your actual API endpoint)
const API_URL = 'http://localhost:5000/api/categories';

const Categories = () => {
  const [categories, setCategories] = useState([]); // State to store categories
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle any errors during the fetch

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data); // Set the fetched categories in state
        setLoading(false); // Set loading to false once the data is fetched
      } catch (error) {
        setError(error.message); // Set the error if the fetch fails
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchCategories();
  }, []); // Empty dependency array to run this effect only once on mount

  // Render loading state, error, or categories
  if (loading) {
    return <p>Loading categories...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="categories" id="categories">
      <h1 className="heading">Product <span>Categories</span></h1>
      <div className="slider">
        {categories.map((category) => (
          <div className="slide-box" key={category.id}>
            <img src={category.imgSrc} alt={category.title} />
            <h3>{category.title}</h3>
            <p>{category.discount}</p>
            <a href="#" className="btn">Shop Now</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
