import React from "react";
import Flogo from "../assets/smo_logo.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquareText,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white text-sm w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"></div>
      </div>

      {/* Main Grid Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Logo & Social Icons */}
        <div className="flex flex-col items-start lg:col-span-2">
          <div className="relative mb-6">
            {/* Logo Placeholder */}
            <div className="flex items-center h-16">
              {" "}
              {/* Fixed height for navbar */}
              <img
                src={Flogo}
                alt="Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-48 w-auto object-contain rounded-full"
              />
            </div>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Transform your beauty journey with our expert services and premium
            products.
          </p>

          <div className="flex mt-2 space-x-4">
            {[
              { Icon: Facebook, link: "#" },
              {
                Icon: Instagram,
                link: "https://www.instagram.com/shubhya_makeovvers?utm_source=ig_web_button_share_sheet&igsh=MW9wNGNkZTkxOGNkdQ==",
              },
              { Icon: Twitter, link: "#" },
              { Icon: Youtube, link: "#" },
              { Icon: Mail, link: "mailto:subhyamakeovvers@gmail.com" },
            ].map(({ Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-sm bg-white/10 border border-white/20 p-3 rounded-full hover:bg-pink-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* About Us */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            About Us
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-pink-400 transition-all">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition-all">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Useful Links
          </h4>
          <ul className="space-y-3">
            {[
              "Privacy Policy",
              "Return Policy",
              "Terms & Conditions",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-pink-400 transition-all">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Salons */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Our Salons
          </h4>
          <ul className="space-y-3">
            {["Jaipur", "Mumbai", "Bangalore", "Gurugram"].map((city) => (
              <li
                key={city}
                className="hover:text-pink-400 transition-all cursor-pointer"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}

        <div className="space-y-4">
          <Link to={"/NewServices"}>
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Waxing",
                "Facial",
                "Bridal makeup",
                "Clean up",
                "Make up",
                "Skin",
                "Hairs",
                "Nails",
              ].map((cat) => (
                <li
                  key={cat}
                  className="hover:text-pink-400 transition-all cursor-pointer"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </Link>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="relative max-w-7xl mx-auto px-4 pt-2 pb-12">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="text-pink-400" size={18} />
                    <span className="text-gray-300">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-pink-400" size={18} />
                    <span className="text-gray-300">
                      subhyamakeovvers@gmail.com
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MapPin className="text-pink-400" size={18} />
                    <span className="text-gray-300">
                      123 Beauty Lane, City Center
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-pink-400" size={18} />
                    <span className="text-gray-300">Mon-Sat: 10am - 8pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Button + My Account */}
            <div className="space-y-6">
              <Link to={"/Contact-us"}>
                <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <MessageSquareText size={18} />
                  Contact Us
                </button>
              </Link>

              <div className="space-y-4">
                <h4 className="font-bold text-lg bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  My Account
                </h4>
                <ul className="space-y-3">
                  {["Profile", "Orders", "Addresses"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-pink-400 transition-all"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="relative border-t border-white/10 backdrop-blur-sm bg-white/5 text-gray-400 text-xs py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2025 Honasa Consumer Limited. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-white/80 font-normal">
              100% Payment Protection, Easy Return Policy
            </span>
            <div className="flex space-x-3">
              {[
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
                  alt: "Visa",
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg",
                  alt: "MasterCard",
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
                  alt: "Amex",
                },
              ].map(({ src, alt }) => (
                <div
                  key={alt}
                  className="backdrop-blur-sm bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-4 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
