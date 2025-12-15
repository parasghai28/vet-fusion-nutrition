import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Btn from './components/Btn'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          {/* ✅ Main site route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Products />
                <WhyChooseUs />
                <Contact />
              </>
            }
          />

          {/* ✅ Export Products page route */}
          <Route path="/export" element={<Btn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
