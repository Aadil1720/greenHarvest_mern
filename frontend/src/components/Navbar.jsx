import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">home</Link>
        <Link to="/about">about us</Link>
        <Link to="/login">login</Link>
        <Link to="/order">order</Link>
        <Link to="/product">product</Link>
        <Link to="/categories">categories</Link>
        <Link to="/farmer">farmer</Link>
        <Link to="/customer">customer</Link>
        <Link to="/review">review</Link>
      </nav>
    </>
  );
};

export default Navbar;
