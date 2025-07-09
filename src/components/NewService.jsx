import React from "react";
import { Heart, Sparkles, Crown, Leaf, Palette, Gem, Scissors, Hand } from "lucide-react";
import Waxing from "../assets/v1.png"
import Facial from "../assets/f2.png"
import BM from "../assets/bm3.png"
import Clean from "../assets/cu4.png"
import MakeUp from "../assets/mu5.png"
import Skin from "../assets/s6.png"
import Hair from "../assets/h7.png"
import Nail from "../assets/n8.png"

const services = [
  { name: "Waxing", description: "Gentle and smooth waxing for long-lasting results.", image: Waxing, icon: Leaf },
  { name: "Facial", description: "Relaxing facial treatments for glowing skin.", image: Facial, icon: Sparkles },
  { name: "Bridal Makeup", description: "Stunning bridal looks for your big day.", image: BM, icon: Crown },
  { name: "Clean Up", description: "Revitalizing skin clean-up sessions.", image: Clean, icon: Gem },
  { name: "Make Up", description: "Professional makeup for any occasion.", image: MakeUp, icon: Palette },
  { name: "Skin", description: "Advanced skin treatments for all types.", image: Skin, icon: Heart },
  { name: "Hairs", description: "Trendy hair styling and care services.", image: Hair, icon: Scissors },
  { name: "Pedicure", description: "Elegant nail art and manicure/pedicure.", image: Nail, icon: Hand },
];

export default function NewServices() {
  return (
    <section className="relative bg-pink-50 text-gray-900 py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <div className="mb-12">
         <div className="relative inline-block mb-5">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
            Our
            <span className="relative ml-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400">
              Services
            </span>
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
        </div>
          <p className="text-gray-600 text-base sm:text-lg italic max-w-2xl mx-auto">
            Explore what we offer to enhance your beauty and relaxation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/40 backdrop-blur-sm border border-white/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/60"
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-pink-100/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Image Container */}
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative p-5 flex flex-col items-center text-center">
                {/* Service Icon */}
                <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white p-3 rounded-full shadow-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <service.icon className="text-sm" />
                </div>
                
                {/* Service Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {service.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Button */}
                <button className="relative overflow-hidden bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:from-pink-500 hover:to-rose-500 hover:shadow-lg hover:scale-105 transform">
                  <span className="relative z-10">More info</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}