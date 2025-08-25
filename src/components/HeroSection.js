// components/HeroSection.jsx
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const HeroSection = () => {
  const sliderRef = useRef(null);
  const bannerImages = ["newbanner.webp", "watch.webp", "banner12.webp"];

  useEffect(() => {
    const slider = sliderRef.current;
    let index = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        index = (index + 1) % bannerImages.length;
        slider.scrollTo({
          left: index * slider.offsetWidth,
          behavior: 'smooth',
        });
      }
    }, 3000); // ⏱ Slide every 3 seconds

    return () => clearInterval(slideInterval); // 🧹 Cleanup on unmount
  }, []);

  return (
    <section className="relative h-[80vh] w-full">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 text-black fixed top-0 w-full z-50 bg-white shadow-md">
        <h1 className="text-xl font-bold">Luxury Shopping</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/cloth" className="hover:text-gray-500">Clothing</Link>
          <Link to="/watches" className="hover:text-gray-500">Watches</Link>
        </div>
      </nav>

      {/* 👇 Auto Sliding Banner */}
      <div
        ref={sliderRef}
        className="w-full h-[600px] flex overflow-x-hidden scroll-smooth pt-20"
      >
        {bannerImages.map((src, index) => (
          <div
            key={index}
            className="min-w-full flex items-center justify-center"
          >
            <img
              src={`/Cloth/${src}`}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;