import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

// Removed FaXTwitter since it throws an error

const Contact = () => {
  return (
    <section className="bg-gradient-to-tr from-white via-lime-50 to-green-100 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT INFO CARD */}
        <div className="bg-white/70 shadow-2xl rounded-3xl p-10 backdrop-blur-md border border-green-200">
          <h2 className="text-4xl font-bold text-green-800 mb-8">Connect with us</h2>

          {/* Address */}
          <div className="flex items-start gap-4 mb-6">
            <FaMapMarkerAlt className="text-2xl text-green-600 mt-1" />
            <div>
              <h4 className="text-lg font-semibold">Postal Address</h4>
              <p className="text-gray-700">
                303, Apollo Arcade, R. K. Singh Marg,<br />
                Andheri East, Mumbai-400069.
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 mb-6">
            <FaPhoneAlt className="text-2xl text-green-600 mt-1" />
            <div>
              <h4 className="text-lg font-semibold">More Information</h4>
              <p className="text-gray-700">99999 00000</p>
              <p className="text-gray-700">88888 00000</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 mb-6">
            <FaEnvelope className="text-2xl text-green-600 mt-1" />
            <div>
              <h4 className="text-lg font-semibold">Email Address</h4>
              <p className="text-gray-700">swadeshiindltd@gmail.com</p>
            </div>
          </div>

          {/* Work Hours */}
          <div className="flex items-start gap-4 mb-6">
            <FaClock className="text-2xl text-green-600 mt-1" />
            <div>
              <h4 className="text-lg font-semibold">Work Hours</h4>
              <p className="text-gray-700">Mon–Fri: 9:00–19:00</p>
              <p className="text-gray-700">Saturday: 10:00–17:00</p>
            </div>
          </div>

          {/* CTA and Socials */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-10">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition font-semibold">
              Sign Up
            </button>

            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-[#3b5998] text-white hover:scale-110 transition duration-200 shadow-md">
                <FaFacebookF />
              </a>
              <a href="#" className="p-3 rounded-full bg-[#1da1f2] text-white hover:scale-110 transition duration-200 shadow-md">
                <FaXTwitter />
              </a>
              <a href="#" className="p-3 rounded-full bg-[#e60023] text-white hover:scale-110 transition duration-200 shadow-md">
                <FaPinterestP />
              </a>
              <a href="#" className="p-3 rounded-full bg-[#0077b5] text-white hover:scale-110 transition duration-200 shadow-md">
                <FaLinkedinIn />
              </a>
              <a href="#" className="p-3 rounded-full bg-[#0088cc] text-white hover:scale-110 transition duration-200 shadow-md">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="w-full h-[500px] shadow-2xl border border-green-300 rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.427939273013!2d72.8585865143928!3d19.1313961870529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7559f7ab3c1%3A0x3b87b1d3d0e9b6b3!2sApollo%20Arcade%2C%20R%20K%20Singh%20Marg%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400093!5e0!3m2!1sen!2sin!4v1611313772460!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
