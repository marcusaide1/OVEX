import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Thabo Mthembu",
      location: "Johannesburg",
      rating: 5,
      text: "ZARcrypto has been my go-to exchange for over 2 years. The platform is reliable, secure, and the customer service is excellent. Highly recommended!",
      avatar: "TM"
    },
    {
      name: "Sarah van der Merwe",
      location: "Cape Town",
      rating: 5,
      text: "As a beginner in crypto, ZARcrypto made it so easy to get started. The educational resources and user-friendly interface are fantastic.",
      avatar: "SV"
    },
    {
      name: "Mandla Ndlovu",
      location: "Durban",
      rating: 5,
      text: "The trading fees are competitive and the platform is lightning fast. I've never had any issues with deposits or withdrawals.",
      avatar: "MN"
    }
  ];

  return (
    <section id="testimonials" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold mb-3 dark:text-white">What Our Traders Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Join thousands of satisfied traders in South Africa</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-sm" />
                ))}
              </div>
              
              <div className="relative">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-orange-500 text-2xl opacity-20 absolute -top-2 -left-1" />
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
