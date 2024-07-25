import React from 'react';
import HeroSection from '../../components/Hero/HeroSection';
import ProductList from '../../components/ProductList/ProductList';
import Testimonials from '../../components/Testnomials/Testinomials';
import Footer from '../../components/Footer/Footer';
import PopularProducts from '../../components/PopularProducts/PopularProducts';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PopularProducts />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
