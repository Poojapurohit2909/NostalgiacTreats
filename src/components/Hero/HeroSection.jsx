import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css'; // Import the CSS for styling

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/products');
  };

  return (
    <section className="hero-section">
      <h1>"Welcome to Nostalgic Treats – Treat Yourself to a Taste of Childhood!</h1>
      <p>Dive into a world of cherished flavors and timeless delights with Nostalgic Treats.   </p>
      <button onClick={handleShopNowClick}>Shop Now</button>
    </section>
  );
};

export default HeroSection;
