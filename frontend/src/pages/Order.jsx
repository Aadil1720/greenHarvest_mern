import React from 'react';

const Order = () => {
  return (
    <section className="order" id="order">
      <h1 className="sub-heading">
        <span>Order</span> Products
      </h1>
      
      <form action="">
        <div className="inputBox">
          <div className="input">
            <span>Your Name</span>
            <input type="text" placeholder="enter your name" />
          </div>

          <div className="input">
            <span>Your Number</span>
            <input type="text" placeholder="enter your number" />
          </div>

          <div className="input">
            <span>Your Order</span>
            <input type="text" placeholder="enter your order" />
          </div>

          <div className="input">
            <span>Additional items</span>
            <input type="text" placeholder="extra items" />
          </div>

          <div className="input">
            <span>How much</span>
            <input type="number" placeholder="how many orders" />
          </div>

          <div className="input">
            <span>Date & Time</span>
            <input type="datetime-local" />
          </div>

          <div className="input">
            <span>Your Address</span>
            <textarea placeholder="enter your address" cols="30" rows="10"></textarea>
          </div>

          <div className="input">
            <span>Your Message</span>
            <textarea placeholder="enter your message" cols="30" rows="10"></textarea>
          </div>
        </div>

        <input type="submit" value="Order Now" className="btn" />
      </form>
    </section>
  );
};

export default Order;
