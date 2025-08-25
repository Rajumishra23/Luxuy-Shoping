import React from "react";

const categories = [
  {
    title: "Men's Watches",
    image: "/Watches/c1.png",
  },
  {
    title: "Women's Watches",
    image: "/Watches/w.png",
  },
  {
    title: "Pre-Owned Watches",
    image: "/Watches/c2.png",
  },
  {
    title: "Pocket Watches",
    image: "/Watches/c3.png",
  },
  {
    title: "Luxury Watches",
    image: "/Watches/c4.png",
  },
  {
    title: "Diver Watches",
    image: "/Watches/c5.png",
  },
  {
    title: "Smart Watches",
    image: "/Watches/c6.png", // ✅ New category image
   
  },
  
  {
    title: "Vintage Watches",
    image: "/Watches/c7.png",

  },
   {
    title: "Minimalist Watches",
    image: "/Watches/c8.png",
  },

];

const Collections = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-12">
          All Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-800 group-hover:text-black transition">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;