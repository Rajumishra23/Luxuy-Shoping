import React from 'react';
import Categories from './Categories';
import NewArrival from './NewArrival';
import Stats from './Stats';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Header from '../Watches/Header';
import Navbar from '../Watches/Navbar';

const Watches = () => {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <Header />
      <Categories />
      <NewArrival />
      <Stats />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Watches;