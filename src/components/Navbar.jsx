// import React, { useState, useEffect } from 'react';
// import { Menu, X, Heart } from 'lucide-react';
// import vetlogo from '../assets/vetlogo.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinks = [
//     { href: '#home', label: 'Home' },
//     { href: '#about', label: 'About' },
//     { href: '#products', label: 'Products' },
//     { href: '#contact', label: 'Contact' },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-0.5">
//             <img src={vetlogo} className="h-15 w-15" />
//             <span className="text-xl font-bold text-gray-900">Vet Fusion Nutrition</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${
//           isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
//         } overflow-hidden bg-white border-t border-gray-200`}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import vetlogo from '../assets/vetlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href) => {
    if (href === '#home') {
      // ✅ Always go to root when clicking "Home"
      navigate('/');
      return;
    }

    if (location.pathname !== '/') {
      // ✅ Go back to home first if on another route
      navigate('/');
      // small delay to allow page to load before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      // ✅ Already on home, just scroll
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-0.5 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img src={vetlogo} className="h-15 w-15" alt="Vet Fusion Logo" />
            <span className="text-xl font-bold text-gray-900">Vet Fusion Nutrition</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105"
              >
                {link.label}
              </button>
            ))}

            {/* ✅ Export Products Button */}
            <button
              onClick={() => navigate('/export')}
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Export Products
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                handleNavClick(link.href);
                setIsOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left"
            >
              {link.label}
            </button>
          ))}

          {/* ✅ Mobile Export Products Button */}
          <button
            onClick={() => {
              navigate('/export');
              setIsOpen(false);
            }}
            className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Export Products
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
