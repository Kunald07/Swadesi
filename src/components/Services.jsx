import React from 'react';
import copperProducts from '../data/copperProducts'; // ✅ shared import

export default function Services() {
  return (
    <section id='services' className='py-20 bg-gray-50 text-center'>
      <h2 className='text-3xl font-bold text-brandTeal mb-10'>Our Copper Product Range</h2>
      <div className='max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>
        {copperProducts.map((item, index) => (
          <div
            key={index}
            className='bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-left overflow-hidden'
          >
            <img src={item.image} alt={item.title} className='w-full h-48 object-cover' />
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-brandOrange mb-2'>{item.title}</h3>
              <p className='text-gray-700 text-sm'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
