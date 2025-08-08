import React from 'react';
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/register.html"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Create Free Account
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download App
            </button>
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
