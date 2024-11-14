import React, { useState } from 'react';

function AuthForm() {
  const [mode, setMode] = useState('login'); // 'login', 'signup', or 'forgotPassword'
  const [username, setUsername] = useState(''); // New state for username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(''); // New state for role
  const [message, setMessage] = useState('');

  const handleToggle = (newMode) => {
    setMode(newMode);
    setMessage('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setRole('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    let endpoint;
    let payload;

    if (mode === 'login') {
      endpoint = '/api/auth/login';
      payload = { email, password, role }; // Include role in payload for login
    } else if (mode === 'signup') {
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        return;
      }
      endpoint = '/api/auth/register';
      payload = { username, email, password, role }; // Include username for signup // Include role in payload for signup
    } else if (mode === 'forgotPassword') {
      endpoint = '/api/auth/forgot-password';
      payload = { email };
    }

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        if (mode === 'forgotPassword') {
          setMessage("Password reset link sent to your email.");
        } else {
          setMessage(mode === 'login' ? "Login successful!" : "Signup successful! Please log in.");
          if (mode === 'signup') handleToggle('login'); // Switch to login after signup success
        }
      } else {
        setMessage(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <form className="login-form active" onSubmit={handleSubmit}>
      <h3>
        {mode === 'login' ? "Login Now" : mode === 'signup' ? "Sign Up Now" : "Forgot Password"}
      </h3>

      {mode !== 'forgotPassword' && (
        <select
          id="role"
          className="box"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required={mode === 'signup'}
        >
          <option value="" disabled>Select Role</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="farmer">Farmer</option>
        </select>
      )}
      {mode === 'signup' && (
        <input
          type="text"
          placeholder="Enter your username"
          className="box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        placeholder="Enter your email"
        className="box"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {mode !== 'forgotPassword' && (
        <input
          type="password"
          placeholder="Enter your password"
          className="box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      )}
      {mode === 'signup' && (
        <input
          type="password"
          placeholder="Confirm your password"
          className="box"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      )}
    
      {message && <p className="message">{message}</p>}
      {mode === 'login' && (
        <p>
          Forgot Your Password?{" "}
          <button onClick={() => handleToggle('forgotPassword')}>Click Here</button>
        </p>
      )}
      {mode === 'forgotPassword' && (
        <p>
          Remembered your password?{" "}
          <button  onClick={() => handleToggle('login')}>Login</button>
        </p>
      )}
      <p>
        {mode === 'login' ? "Don't Have An Account?" : "Already Have An Account?"}{" "}
        <button onClick={() => handleToggle(mode === 'login' ? 'signup' : 'login')}>
          {mode === 'login' ? "Create Now" : "Login"}
        </button>
      </p>
      <input
        type="submit"
        value={
          mode === 'login'
            ? "Login Now"
            : mode === 'signup'
            ? "Sign Up Now"
            : "Send Reset Link"
        }
        className="btn"
      />
    </form>
  );
}

export default AuthForm;
