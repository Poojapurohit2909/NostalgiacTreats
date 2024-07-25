// src/pages/ForgotPassword/ForgotPasswordPage.jsx
import React, { useState } from 'react';
import './ForgotPassward.css'; // Ensure you create this CSS file for styling

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would typically send the email to your backend here
    // For this example, we'll just display a message
    setMessage('If this email is registered, you will receive a password reset link.');
  };

  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="submit-button">Send Reset Link</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
