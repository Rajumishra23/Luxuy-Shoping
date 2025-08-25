import React from 'react';
import Categories from './Categories';
import NewArrival from './NewArrival';
import Stats from './Stats';
import Testimonial from './Testimonial';
import Footer from './Footer';

const Watches = () => {
  return (
    <div className="flex flex-col gap-10">
      <Categories />
      <NewArrival />
      <Stats />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Watches;