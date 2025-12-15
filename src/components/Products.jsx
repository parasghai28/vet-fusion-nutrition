import React from 'react';
import { ArrowRight } from 'lucide-react';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';


const Products = () => {
  const products = [
    {
      image: img1,
      name: 'Fusi-Resp',
    }, 
    {
      image: img2,
      name: 'Fusiliv-gold',
    }, 
    {
      image: img3,
      name: 'Fusiliv forte',
    }, 
    {
      image: img4,
      name: 'Selwin-E',
    }, 
    {
      image: img5,
      name: 'Fusivit-A',
    }, 
    {
      image: img6,
      name: 'Fus-NEPH',
    }, 
    {
      image: img7,
      name: 'WIN-TOX',
    }, 
    {
      image: img8,
      name: 'FUSI-BOLITE',
    }, 
    {
      image: img9,
      name: 'FUSI-ROP',
    }, 
    {
      image: img10,
      name: 'FUSI-GROW',
    }, 
    {
      image: img11,
      name: 'FUSI-CAL',
    }, 
    {
      image: img12,
      name: 'NUTRI MALT VET',
    }, 
    {
      image: img13,
      name: 'FUSIMIX',
    }, 
    {
      image: img14,
      name: 'FUSI ZYME VET',
    }, 
    {
      image: img15,
      name: 'FUSI-PLEX',
    }, 
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products & Services
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive veterinary care tailored to meet all your pet's health and wellness needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
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

export default Products;
