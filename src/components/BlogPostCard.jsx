// BlogPosts.jsx
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
    <section className=" transition-all duration-300 px-6 py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">
          <span className="border-l-4 border-pink-500 pl-4">Latest Blog Posts</span>
        </h2>
        <p className="text-gray-500  mt-1 mb-6">Read our tips about makeup, hairdressing and body treatments</p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className= "  bg-white shadow-sm">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover rounded" />
              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-800 leading-snug">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {post.date} in <span className="text-gray-700">{post.category}</span>
                </p>
                <a href="#" className="text-pink-600 text-sm font-medium mt-2 inline-block">
                  Read More
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