import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faBars, 
  faTimes, 
  faSun, 
  faMoon,
  faUser,
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <FontAwesomeIcon icon={faChartLine} className="text-orange-500 text-2xl mr-2" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">ZARcrypto</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </button>
              <Link to="/login" className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-400">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login
              </Link>
              <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 p-2"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 w-64 h-full shadow-xl">
              <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faChartLine} className="text-orange-500 text-xl mr-2" />
                  <span className="text-lg font-bold text-gray-900 dark:text-white">ZARcrypto</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <div className="py-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-orange-500"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-orange-500"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-orange-500"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-orange-500"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-orange-500"
                >
                  Contact
                </button>
                <div className="border-t dark:border-gray-700 mt-4 pt-4 px-4 space-y-2">
                  <a 
                    href="/login.html"
                    className="block w-full text-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
                    Login
                  </a>
                  <a 
                    href="/register.html"
                    className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors"
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-1" />
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
