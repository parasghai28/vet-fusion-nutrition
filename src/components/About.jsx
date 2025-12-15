import React from 'react';

import third from '../assets/third.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={third}
                alt="Veterinarian caring for a pet"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome to Vet Fusion Nutrition
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
               Vet Fusion Nutrition has been redefining animal nutrition since 2020, providing herbal, poultry, livestock, and aqua-based feed supplements that promote health, productivity, and sustainability across the agricultural ecosystem.
              </p>
              <p>
                We proudly operate our own ISO-certified manufacturing facility in India, powered by a committed team of over 50 skilled professionals. This in-house capability ensures we maintain stringent quality standards and consistent supply, delivering reliable, high-performance
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
