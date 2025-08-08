import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook as faFacebookBrand,
  faTwitter as faTwitterBrand,
  faInstagram as faInstagramBrand,
  faLinkedin as faLinkedinBrand
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faChartLine} className="text-orange-500 text-2xl mr-2" />
              <span className="text-xl font-bold">ZARcrypto</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              South Africa's premier cryptocurrency exchange platform. Trade Bitcoin, Ethereum, and more with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FontAwesomeIcon icon={faFacebookBrand} className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FontAwesomeIcon icon={faTwitterBrand} className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FontAwesomeIcon icon={faInstagramBrand} className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FontAwesomeIcon icon={faLinkedinBrand} className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-orange-500 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="/login.html" className="text-gray-400 hover:text-orange-500 transition-colors">Login</a></li>
              <li><a href="/register.html" className="text-gray-400 hover:text-orange-500 transition-colors">Sign Up</a></li>
            </ul>
          </div>

          {/* Trading */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trading</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Bitcoin (BTC)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Ethereum (ETH)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Litecoin (LTC)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Ripple (XRP)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Market Data</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Trading Fees</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 mr-3" />
                <span className="text-gray-400">support@zarcrypto.co.za</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-orange-500 mr-3" />
                <span className="text-gray-400">+27 11 123 4567</span>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 mr-3 mt-1" />
                <div className="text-gray-400">
                  <div>123 Sandton Drive</div>
                  <div>Sandton, Johannesburg 2196</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ZARcrypto Exchange. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Disclaimer</a>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>ZARcrypto is an authorized Financial Services Provider (FSP). Trading cryptocurrencies involves risk.</p>
            <p>Please ensure you understand the risks before trading. Past performance is not indicative of future results.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
