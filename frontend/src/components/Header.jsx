// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from 'react-router-dom';
// import { faBars, faSearch, faShoppingCart, faUser, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faPagelines } from '@fortawesome/free-brands-svg-icons';
// import CartIcon from "./CartIcon";

// const Header = () => {
//   const [isSearchVisible, setSearchVisible] = useState(false);
//   const [isLoginVisible, setLoginVisible] = useState(false);
//   const [isMenuOpen, setMenuOpen] = useState(false); // New state for menu toggle

//   // Handlers to toggle visibility
//   const toggleSearch = () => setSearchVisible(prev => !prev);
//   const toggleLogin = () => setLoginVisible(prev => !prev);
//   const toggleMenu = () => setMenuOpen(prev => !prev);
//   return (
//     <header className="header">
//       <a href="#" className="logo">
//         <i><FontAwesomeIcon icon={faPagelines} aria-hidden="true" /> Green Harvest</i>
//       </a>


//       <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
//          <Link className='a' to='/'>Home</Link>
//          <Link className='a' to='/about'>About Us</Link>
//          <Link className='a' to='/order'>Order</Link>
//          <Link className='a' to='/product'>Product</Link>
//          <Link className='a' to='/categories'>Categories</Link>
//          <Link className='a' to='/farmer'>Farmer</Link>
//          <Link className='a' to='/review'>Review</Link>
//       </nav>


//       <div className="icons">
//       <div className="icon" id="menu-btn" onClick={toggleMenu}>
//           <FontAwesomeIcon icon={faBars} />
//         </div>
//         <div className="icon" id="search-btn" onClick={toggleSearch}><FontAwesomeIcon icon={faSearch} /></div>
//         <Link to='/cartPage'>
//           <div className="icon"><CartIcon /></div>
//         </Link> 
//         <div className="icon" id="login-btn" onClick={toggleLogin}><FontAwesomeIcon icon={faUser} /></div>
//       </div>


//        {/* Conditional rendering of search form */}
//       {isSearchVisible && (
//         <form className="search-form">
//           <input type="search" id="search-box" placeholder="Search Here ......" />
//           <label htmlFor="search-box">
//             <FontAwesomeIcon icon={faSearch} />
//           </label>
//         </form>
//       )}

//       {/* Conditional rendering of login form */}
//       {isLoginVisible && (
//         <form className="login-form">
//           <h3>Login Now</h3>
//           <input type="email" placeholder="enter your email" className="box" />
//           <input type="password" placeholder="enter your password" className="box" />
//           <p>Forgot Your Password? <a href="#">Click Here</a></p>
//           <p>Don't Have An Account? <a href="#">Create Now</a></p>
//           <input type="submit" value="Login Now" className="btn" />
//         </form>
//       )}

//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import CartIcon from "./CartIcon";
import products from "./data";
import AuthForm from "./AuthForm";
const Header = () => {
  // State variables for toggling visibility
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');  // For storing search input
  const [filteredProducts, setFilteredProducts] = useState(products);  // For storing filtered results

  // Handlers for toggling visibility
  const toggleSearch = () => {
    setSearchVisible(prev => !prev);
    setLoginVisible(false);
    setMenuOpen(false);
  };


  const toggleLogin = () => {
    setLoginVisible(prev => !prev);
    setSearchVisible(false);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setSearchVisible(false);
    setLoginVisible(false);
  };

  // Hide all active sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSearchVisible(false);
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler for search input
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter products based on name or category
    const results = products.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
    setFilteredProducts(results);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <i><FontAwesomeIcon icon={faPagelines} aria-hidden="true" /> Green Harvest</i>
      </a>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <Link className='a' to='/'>Home</Link>
        <Link className='a' to='/about'>About Us</Link>
        <Link className='a' to='/order'>Order</Link>
        <Link className='a' to='/product'>Product</Link>
        <Link className='a' to='/categories'>Categories</Link>
        <Link className='a' to='/farmer'>Farmer</Link>
        <Link className='a' to='/review'>Review</Link>
      </nav>
      <div className="icons">
        <div className="icon" id="menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="icon" id="search-btn" onClick={toggleSearch}><FontAwesomeIcon icon={faSearch} /></div>
        <Link to='/cartPage'>
          <div className="icon"><CartIcon /></div>
        </Link>
        <div className="icon" id="login-btn" onClick={toggleLogin}><FontAwesomeIcon icon={faUser} /></div>
      </div>

      {/* Conditional rendering of search form */}
      {isSearchVisible && (
        <form className="search-form active" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            id="search-box"
            placeholder="Search by product name or category..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <label htmlFor="search-box">
            <FontAwesomeIcon icon={faSearch} />
          </label>
        </form>
      )}


      {/* Display filtered search results */}
      {isSearchVisible && searchTerm && (
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Link
                key={index}
                to={`/product/${product.id}`}
              >
                <div className="search-item">
                  {product.name} - {product.category}
                </div>
              </Link>
            ))
          ) : (
            <p className="search-item">No results found</p>
          )}
        </div>
      )}

      {/* Conditional rendering of login form */}
      {isLoginVisible && (
       <AuthForm/>
      )}
    </header>
  );
};

export default Header;
