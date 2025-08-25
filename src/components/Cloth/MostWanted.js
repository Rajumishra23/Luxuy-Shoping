import React from "react";

export default function MostWantedCategories() {
  const categories = [
    {  image: "/Cloth/shirt1.webp" },
    {  image: "/Cloth/shirt2.webp" },
    {  image: "/Cloth/shirt3.webp" },
    {  image: "/Cloth/shirt4.webp" },
    {  image: "/Cloth/shirt5.webp" },
    { image: "/Cloth/shirt6.webp" },
    {  image: "/Cloth/shirt7.webp" },
    { image: "/Cloth/shirt8.webp" },
    {  image: "/Cloth/shirt9.webp" },
    { image: "/Cloth/shirt10.webp" },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-center text-2xl font-bold mb-8">MOST WANTED CATEGORIES</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((item, index) => (
          <div key={index} className="group relative cursor-pointer">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-black bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}