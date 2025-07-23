import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/smo_logo.png";
import bgImg from "./bg-image.png";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Our Services", link: "/OurServices" },
  { name: "Gallery", link: "/GalleryReal" },
  { name: "About Us", link: "/About-Us" },
  { name: "Contact Us", link: "/Contact-Us" },
  { name: "Book Appointment", link: "/App" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // auto-close mobile menu on resize to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="relative w-full text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-pink-600/90 z-10 backdrop-blur-sm" />

      

      <div className="absolute top-0 left-0 w-5/12 h-60 bg-white/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-20" />

      {/* Top Navigation */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center h-12">
            {" "}
            {/* Fixed height for navbar */}
            <img
              src={logo}
              alt="Logo"
              className="h-10 sm:h-12 md:h-16 lg:h-56 w-auto object-contain rounded-full brightness-100"
            />
          </div>

          {/* Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-sm lg:text-base font-semibold">
            {menuItems.map((item, i) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={i}
                  to={item.link}
                  className={`hover:text-white/80 transition ${
                    isActive ? "underline underline-offset-4 font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-[40vh] px-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold leading-tight mb-4">
          Transforming Beauty, Empowering You
        </h2>
        <p className="text-xs sm:text-sm md:text-base max-w-xl mb-6 text-white/90">
          Discover expert styling, vibrant looks, and personalized salon care.
          Book your transformation today.
        </p>
        <Link
          to="/App"
          className="bg-white text-black px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-200 transition"
        >
          Book Appointment
        </Link>
      </div>

      {/* Mobile Menu (Menu + Contact Details) */}
      {menuOpen && isMobile && (
        <div className="relative z-20 w-full mt-4 px-6 py-6 bg-gradient-to-b from-cyan-500/90 to-pink-600/90 space-y-6">
          {/* Mobile Nav Menu */}
          <div className="flex flex-col space-y-4 text-base font-semibold text-white">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                onClick={() => setMenuOpen(false)} // auto-close on nav click
                className={`hover:text-pink-200 transition ${
                  location.pathname === item.link
                    ? "underline underline-offset-4 font-bold"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-white" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white" />
                <span>subhyamakeovvers@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-white" />
                <span>123 Beauty Lane, City Center</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-white" />
                <span>Mon-Sat: 10am - 8pm</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center sm:justify-end gap-5 mt-4 sm:mt-0">
              <a href="#" className="text-white hover:text-pink-300 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-pink-300 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-pink-300 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-pink-300 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;