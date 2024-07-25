import React from 'react';
import './Testnomials.css'; // Optional: Add CSS for styling

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial">
        <p>"Great selection of nostalgic snacks! Brought back so many memories."</p>
        <span>-KR</span>
      </div>
      <div className="testimonial">
        <p>"Fast shipping and excellent customer service. Highly recommended!"</p>
        <span>-MJ</span>
      </div>
    </section>
  );
};

export default Testimonials;
