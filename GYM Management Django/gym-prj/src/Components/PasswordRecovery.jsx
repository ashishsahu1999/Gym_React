//PasswordRecovery.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './styles.css'; // Import your CSS file

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [mobile, setMobile] = useState(''); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value); 
  };

  const handlePasswordRecovery = () => {
    // Handle password recovery logic here
    console.log('Password recovery initiated for:', email, 'DOB:', dob, 'Mobile:', mobile);
    // You can add further logic here, such as sending a recovery email
  };

  return (
    <div className="signup-container">
      <div className="container">
        <h1>Password Recovery</h1>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="mobile">Mobile No:</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={handleMobileChange} // यहाँ मोबाइल हैंडलर का उपयोग करें
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={handleDOBChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handlePasswordRecovery}>Recover Password</button>
        </div>
        <div className="form-group alternate-text">
          Remember your password? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
