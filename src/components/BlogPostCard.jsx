import React from "react";

const blogPosts = [
  {
    title: "A spa is a location where mineral-rich spring water",
    date: "April 23, 2025",
    category: "Spa Treatments",
    image: "blog1.jpg",
  },
  {
    title: "The main professionals that provide therapeutic",
    date: "May 12, 2025",
    category: "Spa Treatments",
    image: "blog2.jpg",
  },
  {
    title: "The dyeing of hair is an ancient art that involves",
    date: "May 25, 2025",
    category: "Hair Care",
    image: "blog3.jpg",
  },
];

const BlogPosts = () => {
  return (
    <section className="w-full min-h-screen bg-pink-50 px-4 sm:px-6 lg:px-12 py-16 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-start gap-3 mb-12">
          {/* Vertical Gradient Line */}
          <div className="w-[4px] h-full min-h-[100px] bg-gradient-to-b from-pink-500 to-purple-500 rounded-sm" />

          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Latest Blog Posts
            </h2>
            <p className="text-gray-500 italic text-base sm:text-lg mt-1">
              Read our tips about makeup, hairdressing and body treatments
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {post.date} |{" "}
                  <span className="text-pink-600 font-medium">
                    {post.category}
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-auto inline-block text-pink-600 font-medium text-sm hover:underline hover:text-pink-700 transition"
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

export default BlogPosts;
