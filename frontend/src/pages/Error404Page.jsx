import React from 'react';
import { Link } from 'react-router-dom';
import './Error404Page.css'; // CSS for styling

const Error404Page = () => {
  return (
    <div className="error-page">
        <div className='error-content'>
        <img src='images/404Error2.jpeg'></img>
        </div>
      <div className="error-content">
        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-message">
          We can't seem to find the page you're looking for.
        </p>
        <Link to="/">
          <button className="home-button">Go Back to Home</button>
        </Link>
      </div>

    </div>
  );
};

export default Error404Page;
