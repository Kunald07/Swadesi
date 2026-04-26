import React from "react";
import { motion } from "framer-motion"; // for smooth animations
import { GiMetalBar, GiWireCoil, GiFactory } from "react-icons/gi";
import copperProducts from "../../data/copperProducts";

export default function SwadeshiCopper() {
  return (
    <section className="relative overflow-hidden">

      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-90" 
        style={{ backgroundImage: "url('/images/copper-factory.png')" }}
      ></div>

      {/* Tricolor background wave effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-white to-green-100 opacity-90 -z-10"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-green-700 to-blue-800 drop-shadow-md">
            Swadeshi Copper
          </h1>
          <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
            Harnessing India’s metallurgical legacy — precision copper products
            for a sustainable and self-reliant future.
          </p>
        </motion.div>

        {/* Intro Cards with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <InfoCard
            icon={<GiMetalBar size={40} />}
            title="Quality Assured"
            text="Electrolytic copper products engineered with unmatched precision."
          />
          <InfoCard
            icon={<GiWireCoil size={40} />}
            title="Wide Product Range"
            text="Strips, wires, rods, bus bars, flats, sections, and more."
          />
          <InfoCard
            icon={<GiFactory size={40} />}
            title="Global Reach"
            text="Trusted exports across industries worldwide."
          />
        </div>

        {/* Product Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {copperProducts.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="relative group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              {/* Tricolor Ribbon */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-green-700 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-xl font-bold text-blue-900">
            🇮🇳 Crafted with Pride. Delivered with Precision. Swadeshi at Heart.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* Reusable InfoCard */
function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white/80 rounded-xl shadow-md border-t-4 border-green-600 p-6 text-center hover:shadow-xl transition">
      <div className="flex justify-center items-center text-orange-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
