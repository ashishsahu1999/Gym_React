// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token); // टोकन सेट करें
        alert('Login successful!');
        navigate('/sidebar');
      }
    } catch (error) {
      setError(error.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="signup-container">
      <div className="container">
      <h1>Log In</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleLogin}>Login</button>
        </div>
        <div className="form-group alternate-text">
          Forgotten Password? <Link to="/password-recovery">Recover Your Password</Link><br /><br />
          Don't have an account? <Link to="/signup">Sign up</Link><br /><br />
          <Link to="/">Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
