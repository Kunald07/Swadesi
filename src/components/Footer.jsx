import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-brandTeal text-white py-6 text-center'>
      <p className='text-sm'>© {new Date().getFullYear()} Swadeshi Global. All rights reserved.</p>
    </footer>
  );
}