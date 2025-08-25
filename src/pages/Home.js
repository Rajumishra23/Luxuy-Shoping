import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Cloth from '../components/Cloth/Cloth';
import Watches from '../components/Watches/Watches';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <main className="px-6 md:px-20 py-10">
      <HeroSection />

      {/* Category Buttons */}
      <div className="flex gap-4 justify-center mt-10">
        <button
          onClick={() => setSelectedCategory('cloth')}
          className={`px-6 py-2 rounded text-white ${
            selectedCategory === 'cloth' ? 'bg-black' : 'bg-gray-700'
          }`}
        >
          Cloth
        </button>
        <button
          onClick={() => setSelectedCategory('watches')}
          className={`px-6 py-2 rounded text-white ${
            selectedCategory === 'watches' ? 'bg-black' : 'bg-gray-700'
          }`}
        >
          Watches
        </button>
      </div>

      {/* Render Sections Based on Selection */}
      <div className="mt-16">
        {selectedCategory === 'cloth' && <Cloth />}
        {selectedCategory === 'watches' && <Watches />}
      </div>
    </main>
  );
};

export default Home;