import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMapMarker, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (event) => {
    event.preventDefault();
    setMessage(""); // Clear any previous messages

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setMessage("Subscribed successfully! Check your email for updates.");
        setEmail(""); // Clear the email field on success
      } else {
        const data = await response.json();
        setMessage(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>
            Harvest <FontAwesomeIcon icon={faPagelines} className="icon" />
          </h3>
          <p>Feel free to follow us on our Social Media. All the links are below.</p>
          <div className="share">
            <a href="#" className="fa"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="fa"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="fa"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="fa"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <a href="tel:+913875863456" className="links">
            <FontAwesomeIcon icon={faPhone} className="i" /> +91 38758634566
          </a>
          <a href="tel:+9173467532346" className="links">
            <FontAwesomeIcon icon={faPhone} className="i" /> +91 73467532346
          </a>
          <a href="mailto:info786@gmail.com" className="links">
            <FontAwesomeIcon icon={faEnvelope} className="i" /> info786@gmail.com
          </a>
          <a href="#" className="links">
            <FontAwesomeIcon icon={faMapMarker} className="i" /> Karachi, Pakistan
          </a>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <Link to="/" className="links">
            <FontAwesomeIcon icon={faArrowRight} className="i" /> Home
          </Link>
          <Link to="/about" className="links">
            <FontAwesomeIcon icon={faArrowRight} className="i" /> About Us
          </Link>
          <Link to="/order" className="links">
            <FontAwesomeIcon icon={faArrowRight} className="i" /> Order
          </Link>
          <Link to="/product" className="links">
            <FontAwesomeIcon icon={faArrowRight} className="i" /> Product
          </Link>
          <Link to="/categories" className="links">
            <FontAwesomeIcon icon={faArrowRight} className="i" /> Categories
          </Link>
          <Link to="/farmer" className="links">
            <FontAwesomeIcon icon={faArrowRight} className="i" /> Farmer
          </Link>
          <Link to="/review" className="links">
            <FontAwesomeIcon icon={faArrowRight} className="i" /> Review
          </Link>
        
        </div>

        <div className="box">
          <h3>Newsletter</h3>
          <p>Subscribe for latest updates</p>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your Email"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input type="submit" value="Subscribe" className="btn" />
          </form>
          {message && <p className="message">{message}</p>}
          <img src="images/payment.png" alt="payment methods" className="payment-img" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
