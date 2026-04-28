// src/components/Verticals.jsx
import React from 'react';

const Verticals = () => {
  return (
    <section className="px-6 py-12 bg-gradient-to-br from-lime-50 via-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-12">
          Business Verticals
        </h2>

        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <VerticalCard
            title="SWADESHI FOOD PARK"
            description="Swadeshi Food Park was invented and constructed by its subsidiary company known as B2B Tradecom Consumer Private Limited (B2BCPL)."
            image="/verticals/foodpark.jpg"
            color="green"
          />
          <VerticalCard
            title="SWADESHI R - MART"
            description="Under this segment, the company is planning to expand its Retail Super Markets from 16 to 500 in the span of three years."
            image="/verticals/rmart.jpg"
            color="orange"
          />
          <VerticalCard
            title="SWADESHI WATER-LESS DYING PROCESS"
            description="Swadeshi, through its own research team, invented a new eco-friendly water-less dying process for textiles."
            image="/verticals/waterless.jpg"
            color="blue"
          />
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-3 gap-10">
          <VerticalCard
            title="SWADESHI MINERALS"
            description="Swadeshi has acquired Mines of Soft Stones to manufacture dolomite marble powder, talcum powder, kaolin powder, etc."
            image="/verticals/minerals.png"
            color="emerald"
          />
          <VerticalCard
            title="SWADESHI COPPER"
            description="Swadeshi has forayed into manufacturing and trading of copper and energy products including industrial Copper Busbar, Wires, Flates, Pipe and Connectors."
            image="/verticals/copper.jpg"
            color="rose"
            link="/swadeshi-copper"

          />
          <VerticalCard
            title="SWADESHI MSME PARK"
            description="Swadeshi is planning to develop and operate MSME Parks comprising diversified manufacturing and service units."
            image="/verticals/msme.jpg"
            color="indigo"
          />
        </div>
      </div>
    </section>
  );
};

// Reusable Card Component
const VerticalCard = ({ title, description, image, color, link }) => (
  <a href={link}>
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 text-center border-t-8 border-${color}-400`}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-6" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </a>
);

export default Verticals;
