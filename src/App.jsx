import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Verticals from './components/Verticals';
import SwadeshiCopper from './components/SwadeshiCopper/SwadeshiCopper';
import { Routes, Route } from 'react-router-dom'; // ✅ Import Routes and Route

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page (/) */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Verticals />
              <Contact />
              {/* Uncomment these if you want them on home */}
              {/* <About /> */}
              {/* <Services /> */}
              {/* <Footer /> */}
            </>
          }
        />

        {/* Swadeshi Copper Page */}
        <Route path="/swadeshi-copper" element={<SwadeshiCopper />} />

        {/* Optional: Fallback for unmatched routes */}
        <Route path="*" element={<h2 className="p-10 text-center">Page Not Found</h2>} />
      </Routes>
      {/* <Footer />  */}
      {/* <About />
      <Services />
      */}
    </>
  );
}

export default App;

