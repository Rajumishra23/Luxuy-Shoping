import React from 'react';

import NewArrival from './NewArrival';
import Combo from './Combo';
import BackToCollege from './BackToCollege';
import Trust from './Trust';
import Coupon from './Coupon';
import Testimonials from './Testimonials';
import MostWanted from './MostWanted';
import Footer from './Footer';

const Cloth = () => {
  return (
    <div className="flex flex-col gap-10">
      <NewArrival />
      <Combo />
      <MostWanted />
      <BackToCollege />
      <Coupon />
      <Testimonials />
      <Trust />
      <Footer />
    </div>
  );
};

export default Cloth;