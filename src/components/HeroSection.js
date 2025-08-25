// components/HeroSection.jsx
import { useRef, useEffect } from 'react';

const HeroSection = () => {
  const sliderRef = useRef(null);
  const bannerImages = ['newbanner.webp', 'watch.webp', 'banner12.webp'];

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
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* 🧭 Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gray-900">
            Luxury <span className="text-gray-900">Shopping</span>
          </a>

          {/* Links */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <a href="/" className="hover:text-gray-600 transition">Home</a>
            <a href="/cloth" className="hover:text-gray-600 transition">Clothing</a>
            <a href="/watches" className="hover:text-gray-600 transition">Watches</a>
          </div>
        </div>
      </nav>

      {/* 🎞️ Auto Sliding Banner */}
      <div
        ref={sliderRef}
        className="w-full max-w-screen-xl mx-auto h-[500px] flex overflow-x-hidden scroll-smooth mt-16 px-4"
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
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;