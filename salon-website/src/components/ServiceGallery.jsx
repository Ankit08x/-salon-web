import React from 'react';
import { FaCut, FaSpa, FaPumpSoap, FaMagic, FaBath, FaLeaf } from 'react-icons/fa';

const services = [
  {
    title: "Clean Face",
    img: "/img1.jpg",
    description: "Custom Haircut suiting your face type.",
    icon: <FaMagic size={50} className="text-white" />
  },
  {
    title: "Hair Cut",
    img: "/img2.jpg",
    description: "Using only premium and herbal products.",
    icon: <FaCut size={50} className="text-white" />
  },
  {
    title: "Barber",
    img: "/img5.jpg",
    description: "Get smooth, shiny, and healthy hair.",
    icon: <FaPumpSoap size={50} className="text-white" />
  },
  {
    title: "Massages",
    img: "/img4.jpg",
    description: "Relaxing massages for mind and body.",
    icon: <FaSpa size={50} className="text-white" />
  },
  {
    title: "Body Treatments",
    img: "/img3.jpg",
    description: "Affordable Packages for glowing skin.",
    icon: <FaBath size={50} className="text-white" />
  },
  {
    title: "Aromatherapy",
    img: "/img6.jpg",
    description: "Therapeutic oils for relaxation.",
    icon: <FaLeaf size={50} className="text-white" />
  }
];

const Services = () => {
  return (
    <div className="px-4 py-10 bg-gray-100">
      <div className="mb-10 px-6 max-w-6xl mx-auto">
        <h2 className="font-poppins font-semibold text-4xl border-l-4 border-red-500 pl-4">
          Our Services
        </h2>
        <p className="italic text-gray-600 mt-2 border-l-4 border-red-500 pl-4">
          Our salon offers a wide variety of beauty services
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-md shadow-lg cursor-pointer group"
          >
            <img
              src={service.img}
              alt={service.title}
              className=" w-full h-60 object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="bg-black/60 absolute inset-0 flex flex-col items-center justify-center">
              {service.icon}
              <p className=" text-white mt-2 text-lg font-semibold">{service.title}</p>
            </div>
            <div className=" absolute inset-0 bg-pink-600 bg-opacity-0 group-hover:bg-opacity-100 transition-all duration-500 flex items-center justify-center">
              <p className="text-white text-center opacity-0 group-hover:opacity-100 px-4 transition-all duration-500">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
