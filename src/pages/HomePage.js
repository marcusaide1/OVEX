import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import LivePrices from '../components/LivePrices';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <LivePrices />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
