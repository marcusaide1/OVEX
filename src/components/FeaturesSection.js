import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMobile, 
  faChartBar, 
  faRobot, 
  faShieldAlt,
  faExchangeAlt,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  const features = [
    {
      icon: faMobile,
      title: "Mobile Trading App",
      description: "Trade on the go with our iOS and Android apps. Never miss a market opportunity.",
      color: "text-blue-500"
    },
    {
      icon: faChartBar,
      title: "Advanced Analytics",
      description: "Professional charting tools with technical indicators and market analysis.",
      color: "text-green-500"
    },
    {
      icon: faRobot,
      title: "Automated Trading",
      description: "Set up trading bots and automated strategies to trade 24/7.",
      color: "text-purple-500"
    },
    {
      icon: faShieldAlt,
      title: "Insurance Coverage",
      description: "Your digital assets are insured against theft and security breaches.",
      color: "text-red-500"
    },
    {
      icon: faExchangeAlt,
      title: "Instant Swaps",
      description: "Instantly swap between different cryptocurrencies with competitive rates.",
      color: "text-orange-500"
    },
    {
      icon: faCreditCard,
      title: "Easy Deposits",
      description: "Fund your account instantly with credit card, EFT, or instant EFT.",
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold mb-3 dark:text-white">Advanced Trading Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Everything you need to trade like a pro</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg`}>
                <FontAwesomeIcon icon={feature.icon} className={`text-2xl ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
