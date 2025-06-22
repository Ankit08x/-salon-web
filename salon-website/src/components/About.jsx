import React from "react";
const aboutData = [
  {
    title: "A spa is a location where mineral-rich spring water",
    date: "April 23, 2025",
    category: "Spa Treatments",
    image: "blog1.jpg",
    description: "The term is derived from the name of the town of Spa, Belgium, whose name is known back from Roman times, when the location was called Aquae Spadanae, sometimes incorrectly",

  },
  {
    title: "The main professionals that provide therapeutic",
    
    date: "May 12, 2025",
    category: "Spa Treatments",
    image: "blog2.jpg",
    description: "Many types of practices are associated with massage and include bodywork, manual therapy, energy medicine, neural mobilization and breathwork. Other names for massage.",
  },
  {
    title: "The dyeing of hair is an ancient art that involves",
    date: "May 25, 2025",
    category: "Hair Care",
    image: "blog3.jpg",
    description: "In ancient times, the dyes were obtained from plants. Some of the most well known are henna (Lawsonia inermis), indigo, Cassia obovata, senna, turmeric and amla.",
  },
];
const About = () => {
  return (
    <section className="px-6 pt-   py-12 bg-gray-100">
      <div className="max-w-6xl  mx-auto">
        <h1 className="text-6xl font-bold mb-14 text-gray-800"> About Us</h1>
        <h1 className=" text-4xl   mb-12 font-bold text-gray-600"> Blog Posts </h1>
         
       
        <div className="  grid md:grid-cols-3 gap-8">
          {aboutData.map((post, index) => (
            <div key={index} className="bg-white w-[300px] h-full shadow-sm rounded overflow-hidden">
            <img
                src={post.image}
                alt={post.title}
                className="   w-full h-56 object-cover"
     />
                <div className=" h-[250px]   p-4">
                <h3 className="font-semibold text-lg text-gray-800 leading-snug">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {post.date} in <span className="text-gray-700">{post.category}</span>
                </p>
                 <p className="text-gray-600 text-sm mt-2">{post.description}</p>
                <a href="#" className="text-pink-600 mt-4 text-sm font-medium border-b-2 border-pink-600 inline-block">
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

export default About;
