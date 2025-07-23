/*import React from 'react';
import {
  FaHeart,
  FaCut,
  FaSpa,
  FaMagic,
  FaLeaf,
  FaHandHoldingHeart,
} from 'react-icons/fa';

const services = [
  {
    title: 'Cosmetics',
    description:
      'Cosmetics are substances or products used to enhance or alter the appearance of the face or body.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/service_01.jpg',
    icon: <FaMagic className="text-white text-xl" />,
  },
  {
    title: 'Hairdressing',
    description:
      'Hairdressing is an occupation dating back thousands of years. Ancient art drawings and paintings have been discovered.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/service_02.jpg',
    icon: <FaCut className="text-white text-xl" />,
  },
  {
    title: 'Barber',
    description:
      'A barber’s main job is to cut, style, groom and shave men’s and boys’ hair and beard.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/service_03.jpg',
    icon: <FaHandHoldingHeart className="text-white text-xl" />,
  },
  {
    title: 'Massages',
    description:
      'Massage is the manipulation of soft tissues using hands, fingers, or elbows.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/service_04.jpg',
    icon: <FaSpa className="text-white text-xl" />,
  },
  {
    title: 'Body Treatments',
    description:
      'A manicure is a cosmetic beauty treatment for the fingernails and hands.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/service_05.jpg',
    icon: <FaLeaf className="text-white text-xl" />,
  },
  {
    title: 'Aromatherapy',
    description:
      'Aromatherapy uses essential oils and other aroma compounds to improve mood and health.',
    image: 'https://demo.lsvr.sk/html/beautyspot/images/gallery_01.jpg',
    icon: <FaHeart className="text-white text-xl" />,
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-pink-50 py-16 px-4 sm:px-6 lg:px-12 2xl:px-24 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto">

       
        <div className="flex items-start gap-3 mb-12">
          <div className="w-[4px] min-h-[100px] bg-gradient-to-b from-pink-500 to-purple-500 rounded-sm" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our Services
            </h2>
            <p className="text-gray-500 italic text-base sm:text-lg mt-1">
              Explore what we offer to enhance your beauty and relaxation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fadeIn"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 sm:h-56 object-cover rounded-t-2xl"
                />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-pink-600 rounded-full p-3 shadow-md z-10">
                  {service.icon}
                </div>
              </div>
              <div className="pt-10 pb-6 px-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-sm font-medium text-pink-600 border-b-2 border-transparent hover:border-pink-600 transition duration-200 hover:scale-105">
                  More info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
*/

import React from 'react'
import NewServices from './NewService'

const OurServices = () => {
  return (
    <>
    <NewServices/>
    </>
  )
}

export default OurServices