import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

import newlogo from './newlogo.png';

export default function Footer() {
  return (
    <footer className=" transition-all duration-300   bg-black  text-white text-sm">
      <div className=" max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-6 gap-8">
       
        <div className="   md:col-span-1">
         
          <img src={newlogo} alt="Logo" className="h-16 mb-10 bg-white " />
          
         
          <div className="flex mt-20 space-x-3">
            <button className="border border-white rounded-full p-2">
              <FaFacebookF />
            </button>
            <button className="border border-white rounded-full p-2">
              <FaInstagram />
            </button>
            <button className="border border-white rounded-full p-2">
              <FaTwitter />
            </button>
            <button className="border border-white rounded-full p-2">
              <FaYoutube />
            </button>
            <button className="border border-white rounded-full p-2">
              <FaEnvelope />
            </button>
          </div>
        </div>

        <div>
          <h4 className=" font-bold mb-3">About Us</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Our Story</a></li>
            <li><a href="#" className="hover:text-blue-400">Blogs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Useful Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Return Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Our Salons</h4>
          <ul className="space-y-2">
            <li className="hover:text-blue-400">Mumbai</li>
            <li className="hover:text-blue-400">Hyderabad</li>
            <li className="hover:text-blue-400">Bangalore</li>
            <li className="hover:text-blue-400">Gurugram</li>
            <li className="hover:text-blue-400">Guwahati</li>
            <li className="hover:text-blue-400">Kolkata</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Categories</h4>
          <ul className="space-y-2">
            <li className="hover:text-blue-400">All Products</li>
            <li className="hover:text-blue-400">Hair Styling</li>
            <li className="hover:text-blue-400">Hair Colour</li>
            <li className="hover:text-blue-400">Hair Care</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">My Account</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Profile</a></li>
            <li><a href="#" className="hover:text-blue-400">Orders</a></li>
            <li><a href="#" className="hover:text-blue-400">Addresses</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-gray-400 text-xs py-4 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>
          © 2025 Honasa Consumer Limited. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <span>100% Payment Protection, Easy Return Policy</span>
          <div className="flex space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
              alt="MasterCard"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
              alt="Amex"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fc/RuPay.svg"
              alt="RuPay"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Bank_font_awesome.svg"
              alt="Bank"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
