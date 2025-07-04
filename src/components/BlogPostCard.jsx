/*import React from "react";

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
    
    <section className=" transition-all duration-300 px-8 py-12 bg-gray-100">
      <div className="max-w-4x1 mx-auto">
        <h2 className="  text-3xl font-bold text-gray-800">
          <span className="ml-3 border-pink-500 border-l-4 text-4xl  pl-4">Latest Blog Posts</span>
      </h2>
        <p className="ml-3 border-pink-500 border-l-4 text-gray-500  pl-4  italic mt-1 mb-6">Read our tips about makeup, hairdressing and body treatments</p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className= "  bg-white shadow-sm">
              <img src={post.image} alt={post.title} className="w-full h-52 object-cover rounded" />
              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-800 leading-snug">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {post.date} in <span className="text-gray-700">{post.category}</span>
                </p>
                <a href="#" className="text-pink-600 text-sm font-medium mt-2 inline-block hover:border-b-2 border-pink-500 hover:scale-105 duration-200">
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

export default BlogPosts;*/

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
    <section className="transition-all duration-300 px-8 py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-left  mb-8">
          <h2 className="text-4xl font-bold  text-gray-800 border-l-4 border-pink-500 pl-4 ml-3">
            Latest Blog Posts
          </h2>
          <p className="text-gray-500 italic  border-l-4 border-pink-500 pl-4 ml-3">
            Read our tips about makeup, hairdressing and body treatments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover rounded"
              />
              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-800 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {post.date} in{" "}
                  <span className="text-gray-700">{post.category}</span>
                </p>
                <a
                  href="#"
                  className="text-pink-600 text-sm font-medium mt-2 inline-block hover:border-b-2 border-pink-500 hover:scale-105 duration-200"
                >
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
