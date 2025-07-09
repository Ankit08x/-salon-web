import React from "react";

const aboutData = [
  {
    title: "A spa is a location where mineral-rich spring water",
    date: "April 23, 2025",
    category: "Spa Treatments",
    image: "blog1.jpg",
    description:
      "The term is derived from the name of the town of Spa, Belgium, known back from Roman times, when it was called Aquae Spadanae.",
  },
  {
    title: "The main professionals that provide therapeutic",
    date: "May 12, 2025",
    category: "Spa Treatments",
    image: "blog2.jpg",
    description:
      "Massage includes bodywork, manual therapy, energy medicine, neural mobilization and breathwork.",
  },
  {
    title: "The dyeing of hair is an ancient art that involves",
    date: "May 25, 2025",
    category: "Hair Care",
    image: "blog3.jpg",
    description:
      "Ancient dyes were made from henna, indigo, Cassia obovata, senna, turmeric, and amla.",
  },
];

const About = () => {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex items-start gap-4 mb-14">
          {/* Vertical Line */}
          <div className="w-1 h-14 bg-gradient-to-b from-pink-500 to-purple-500 rounded"></div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">About Us</h1>
            <p className="text-gray-600 italic text-lg mt-1">
              Explore what we offer to enhance your beauty and relaxation.
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {aboutData.map((post, index) => (
            <div
              key={index}
              className="w-full max-w-xs bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-up"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-t-3xl"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-pink-700 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {post.date} in{" "}
                  <span className="font-medium text-gray-700">
                    {post.category}
                  </span>
                </p>
                <p className="text-sm text-gray-600">{post.description}</p>
                <a
                  href="#"
                  className="text-sm font-semibold text-pink-600 border-b-2 border-pink-600 hover:text-pink-700 transition inline-block mt-2"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
