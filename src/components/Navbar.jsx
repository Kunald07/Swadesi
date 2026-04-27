// src/components/Navbar.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import bseLogo from '/images/bse.png'; // Adjust the path as necessary
import logo from '/images/swadeshi-logo.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-2 container mx-auto">
        <Link to="/">
          <img src={logo}  alt="Swadeshi Logo" className="h-14" />
        </Link>
        <nav className="space-x-6 text-sm font-semibold text-gray-700 uppercase tracking-wide">
          <a href="#about">About Us</a>
          <a href="#segments">Segments</a>
          <a href="#connect">Connect</a>
          <a href="#invest">Invest</a>
          <a href="#news">News</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="flex items-center space-x-4">
          <img src={bseLogo} alt="BSE Sensex" className="h-8" />
          <FaFacebook className="text-blue-600 hover:scale-110" />
          <FaInstagram className="text-pink-500 hover:scale-110" />
          <FaLinkedin className="text-blue-700 hover:scale-110" />
          <FaYoutube className="text-red-600 hover:scale-110" />
        </div>
      </div>
    </header>
  );
}
