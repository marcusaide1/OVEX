import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faBolt, 
  faUsers, 
  faChartLine,
  faGlobe,
  faLock
} from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
  const features = [
    {
      icon: faShieldAlt,
      title: "Bank-Grade Security",
      description: "Your funds are protected with multi-signature wallets, cold storage, and 2FA authentication.",
      color: "text-green-500"
    },
    {
      icon: faBolt,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-performance trading engine.",
      color: "text-yellow-500"
    },
    {
      icon: faUsers,
      title: "24/7 Support",
      description: "Get help anytime with our dedicated South African customer support team.",
      color: "text-blue-500"
    },
    {
      icon: faChartLine,
      title: "Advanced Trading",
      description: "Professional trading tools including limit orders, stop losses, and market analysis.",
      color: "text-purple-500"
    },
    {
      icon: faGlobe,
      title: "ZAR Integration",
      description: "Seamlessly trade with South African Rand using local banking partners.",
      color: "text-orange-500"
    },
    {
      icon: faLock,
      title: "Regulatory Compliant",
      description: "Fully compliant with South African financial regulations and FICA requirements.",
      color: "text-red-500"
    }
  ];

  return (
    <section id="about" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold mb-3 dark:text-white">Why Choose ZARcrypto?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            South Africa's most trusted cryptocurrency exchange, built specifically for the local market 
            with world-class security and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4`}>
                  <FontAwesomeIcon icon={feature.icon} className={`text-xl ${feature.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 fade-in delay-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">100K+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">R2.5B+</div>
              <div className="text-gray-600 dark:text-gray-400">Volume Traded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">5 Years</div>
              <div className="text-gray-600 dark:text-gray-400">In Business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
