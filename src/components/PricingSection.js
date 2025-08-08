import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCrown, faRocket } from '@fortawesome/free-solid-svg-icons';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "0.5%",
      description: "Perfect for beginners",
      icon: faRocket,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      features: [
        "Basic trading features",
        "Email support",
        "Mobile app access",
        "Standard withdrawal limits",
        "Basic market analysis"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "0.25%",
      description: "Most popular choice",
      icon: faCrown,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      features: [
        "Advanced trading tools",
        "Priority support",
        "API access",
        "Higher withdrawal limits",
        "Advanced analytics",
        "Trading signals"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "0.1%",
      description: "For high-volume traders",
      icon: faCrown,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom trading solutions",
        "Unlimited withdrawals",
        "White-label options",
        "OTC trading desk"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold mb-3 dark:text-white">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">No hidden fees, no surprises</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg fade-in ${
                plan.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${plan.bgColor} border-2 ${plan.borderColor} flex items-center justify-center`}>
                  <FontAwesomeIcon icon={plan.icon} className={`text-2xl ${plan.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2 dark:text-white">{plan.name}</h3>
                <div className="text-4xl font-bold text-orange-500">{plan.price}</div>
                <div className="text-gray-500 dark:text-gray-400">per trade</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in delay-300">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All plans include secure wallet storage, 24/7 monitoring, and regulatory compliance
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <span>✓ No setup fees</span>
            <span>✓ No monthly fees</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
