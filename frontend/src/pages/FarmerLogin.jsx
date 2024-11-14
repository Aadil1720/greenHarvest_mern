import React from 'react';

const FarmerLogin = () => {
  return (
    <section className="tehmi" id="tehmi">
      <div className="content">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" />
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="fa fa-lock" aria-hidden="true"></i>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
          <div className="forget">
            <a href="#">Forget Password?<br /></a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FarmerLogin;
