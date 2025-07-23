import React from "react";
import Flogo from "../assets/footerlogo.png";
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

const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white text-sm w-full overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start lg:col-span-2">
          <div className="relative mb-6">
            <div className="flex items-center h-16">
              <img
                src={Flogo}
                alt="Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-60 w-auto object-contain rounded-full"
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
              <Link
                to="/our-story"
                className="hover:text-pink-400 transition-all"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-pink-400 transition-all">
                Blogs
              </Link>
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
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Return Policy", path: "/return-policy" },
              { label: "Terms & Conditions", path: "/terms-conditions" },
              { label: "Contact Us", path: "/contact-us" },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link to={path} className="hover:text-pink-400 transition-all">
                  {label}
                </Link>
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
                <Link to={`/salon/${city.toLowerCase()}`}>{city}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <Link to="/NewServices">
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </h4>
          </Link>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {[
              "Waxing",
              "Facial",
              "Bridal makeup",
              "Clean up",
              "Make up",
              "Skin",
              "Hairs",
              "Nails",
            ].map((service) => (
              <li
                key={service}
                className="hover:text-pink-400 transition-all cursor-pointer"
              >
                <Link
                  to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Get in Touch Section - Blue Line Area */}
      <div className="relative border-t border-cyan-400/30 backdrop-blur-sm bg-gradient-to-r from-cyan-900/20 to-blue-900/20 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left side - Button */}
            <div className="flex-shrink-0">
              <Link to="/Contact-us">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 group">
                  <MessageSquareText size={20} />
                  Get In Touch
                  <div className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300"></div>
                </button>
              </Link>
            </div>
            {/* className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6  gap-y-3 text-sm" */}

            {/* Right side – Contact Details */}
            <div className="flex-1 lg:ml-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6  gap-y-3 text-sm">
                {[
                  {
                    icon: (
                      <Phone size={16} className="text-cyan-400 shrink-0" />
                    ),
                    label: "+91 98765 43210",
                    truncate: false,
                  },
                  {
                    icon: <Mail size={16} className="text-cyan-400 shrink-0" />,
                    label: "subhyamakeovvers@gmail.com",
                    truncate: false,
                  },
                  {
                    icon: (
                      <MapPin size={16} className="text-cyan-400 shrink-0" />
                    ),
                    label: "123 Beauty Lane, City Center",
                    truncate: true, // single line, don't break
                  },
                  {
                    icon: (
                      <Clock size={16} className="text-cyan-400 shrink-0" />
                    ),
                    label: "Mon–Sat: 10am – 8pm",
                    truncate: false,
                  },
                ].map(({ icon, label, truncate }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 min-w-0 w-full"
                  >
                    {icon}
                    <span
                      className={`
            text-gray-300
            ${truncate ? "whitespace-nowrap overflow-hidden text-ellipsis" : ""}
          `}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="relative border-t border-white/10 backdrop-blur-sm bg-black/20 text-gray-400 text-xs py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2025 Honasa Consumer Limited. All rights reserved.</p>
          <div className="flex items-end">
            <p className="text-white/60 ml-2 sm:ml-72">
              100% Payment Protection, Easy Return Policy
            </p>
          </div>

          <div className="flex space-x-4">
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
                alt: "American Express",
              },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="backdrop-blur-sm bg-white/10 p-1 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
    </footer>
  );
}