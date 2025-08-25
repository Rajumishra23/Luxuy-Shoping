// pages/Home.jsx

import HeroSection from '../components/HeroSection'; // Global header
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      
      <HeroSection />
      <section className="flex justify-center gap-10 mt-20">
        <Link to="/cloth" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          Explore Clothing
        </Link>
        <Link to="/watches" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          Explore Watches
        </Link>
      </section>
    </>
  );
};

export default Home;