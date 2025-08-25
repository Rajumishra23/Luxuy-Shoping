import { useState } from 'react';
import Cloth from '../components/Cloth';
import Watches from '../components/Watches';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(prev => prev === section ? null : section);
  };

  return (
    <div className="w-full">
      {/* Global Navbar + Header Image + Buttons */}
      <HeroSection
        onClothingClick={() => handleClick('clothing')}
        onWatchesClick={() => handleClick('watches')}
      />

      {/* 👇 Conditional Section Rendering */}
      <div className="px-6 py-10">
        {activeSection === 'clothing' && <Cloth />}
        {activeSection === 'watches' && <Watches />}
      </div>
    </div>
  );
};

export default Home;