import React from 'react';

import img1 from '../assets/unizink.jpg';
import img2 from '../assets/univirosafe.jpg';
import img3 from '../assets/unifat.jpg';
import img4 from '../assets/unineph.jpg';
import img5 from '../assets/unical.jpg';
import img6 from '../assets/univit.jpg';
import img7 from '../assets/uniliv.jpg';
import img8 from '../assets/uniheat.jpg';
import img9 from '../assets/uniresp.jpg';
import img10 from '../assets/bro.jpg' 


const Btn = () => {
  const products = [
    { image: img1, name: 'UNIZINK' },
    { image: img2, name: 'UNIVIROSAFE' },
    { image: img3, name: 'UNIFAT' },
    { image: img4, name: 'UNINEPH' },
    { image: img5, name: 'UNICAL' },
    { image: img6, name: 'UNIVIT' },
    { image: img7, name: 'UNILIV' },
    { image: img8, name: 'UNI-HEAT' },
    { image: img9, name: 'UNIRESP' },
    { image: img10, name: 'What are you doing on 14th'}
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Export Products & Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive veterinary care tailored to meet all your pet&apos;s health and wellness needs
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="p-6 bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Product Name */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Btn;
