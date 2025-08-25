// components/HeroSection.jsx
import { Link } from 'react-router-dom';
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
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative w-full bg-white">
      {/* 🧭 Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide text-gray-900">
            Luxury <span className="text-gray-900">Shopping</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link to="/" className="hover:text-gray-600 transition">Home</Link>
            <Link to="/cloth" className="hover:text-gray-600 transition">Clothing</Link>
            <Link to="/watches" className="hover:text-gray-600 transition">Watches</Link>
          </div>
        </div>
      </nav>

      {/* 🎞️ Auto Sliding Banner */}
   <div
  ref={sliderRef}
  className="w-[900px] h-[500px] ml-[-80px] flex overflow-x-hidden scroll-smooth mt-10" 
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
