//Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState(''); // Change from fullName to username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
            username,
            email,
            password,
            gender,
            dob,
            mobile,
        });

        // Reset the form fields
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setGender('');
        setDob('');
        setMobile('');

        if (response.status === 201) {
            alert('Signup successful!'); // Handle success case
        }
    } catch (error) {
        console.error('Signup error:', error.response.data);
        alert('Signup failed: ' + error.response.data.message);
    }
};


  return (
    <div className="signup-container">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username" // Change from fullName to username
            value={username} // Change from fullName to username
            onChange={(e) => setUsername(e.target.value)} // Change from setFullName to setUsername
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile No:</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div className="password-row">
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
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <button type="button" onClick={handleSignup}>Sign Up</button>
        </div>

        <div className="form-group alternate-text">
          <div>
            Already have an account? <Link to="/login">Log in</Link>
            <span className="link-separator"></span>
            <Link to="/">Back To Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
