import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faBolt, 
  faChartLine,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <section id="home" className="bg-hero-gradient pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-8">
          {/* Left Content */}
          <div className="text-white fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trade Bitcoin with 
              <span className="text-orange-400 block">South Africa's #1</span>
              Crypto Exchange
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Join over 100,000 South Africans trading Bitcoin, Ethereum, and more. 
              Secure, fast, and built for the South African market with ZAR trading pairs.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <FontAwesomeIcon icon={faShieldAlt} className="text-green-400 mr-2" />
                <span className="text-sm font-medium">Bank-Grade Security</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <FontAwesomeIcon icon={faBolt} className="text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Instant Deposits</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <FontAwesomeIcon icon={faChartLine} className="text-blue-400 mr-2" />
                <span className="text-sm font-medium">Advanced Trading</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                    to="/register" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faRocket} className="mr-2" />
                    Start Trading Now
                </Link>
                <button 
                    onClick={() => scrollToSection('features')}
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                    Learn More
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">100K+</div>
                <div className="text-sm text-gray-300">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">R2.5B+</div>
                <div className="text-sm text-gray-300">Volume Traded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative fade-in delay-200">
            <div className="relative z-10">
              {/* Main Trading Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-bitcoin-gradient rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">₿</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Bitcoin</div>
                      <div className="text-gray-300 text-sm">BTC/ZAR</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">R892,450</div>
                    <div className="text-green-400 text-sm">+5.2%</div>
                  </div>
                </div>
                <div className="h-16 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-lg flex items-end justify-between px-2 py-2">
                  {/* Mini chart bars */}
                  {[40, 60, 45, 80, 65, 90, 75, 95, 85, 100].map((height, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-t from-green-400 to-blue-400 rounded-sm w-2 opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Secondary Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-xs">E</span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Ethereum</div>
                      <div className="text-gray-300 text-xs">ETH/ZAR</div>
                    </div>
                  </div>
                  <div className="text-white font-bold">R45,230</div>
                  <div className="text-green-400 text-sm">+3.1%</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-xs">L</span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Litecoin</div>
                      <div className="text-gray-300 text-xs">LTC/ZAR</div>
                    </div>
                  </div>
                  <div className="text-white font-bold">R1,245</div>
                  <div className="text-red-400 text-sm">-1.2%</div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
