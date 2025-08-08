import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join over 100,000 South Africans who trust ZARcrypto for their cryptocurrency trading needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Get Started Today
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
            <a 
              href="#" 
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download App
            </a>
          </div>
          
          <div className="mt-8 text-orange-100 text-sm">
            <p>✓ No setup fees • ✓ Start with as little as R100 • ✓ 24/7 support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
