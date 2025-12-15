import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send,File } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_20k3mi6',       // Your Service ID
      'template_e1ca6db',      // Replace with your actual template ID
      formData,                // Must match template vars
      'WsVeyzbwWPIj2hfmI'        // Your public key from EmailJS
    ).then(
      (result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            For any inquiries about our animal feed products, our expert team is available to provide tailored guidance and support to meet your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-gray-300 mt-1">
                    1/448, NEW SHARDA NAGAR, SAHARANPUR - 247001 (U.P.) INDIA
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Phone Number</h4>
                  <p className="text-gray-300 mt-1">
                    Main: +91-9457068550
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <File className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">GST No:</h4>
                  <p className="text-gray-300 mt-1">
                    09AAZFV3088J1Z3
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-300 mt-1">
                    vetfusionnutrition@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Tell us how we can help your pet..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


// 
// Email-
// Contact-
// GST No- 09AAZFV3088J1Z3