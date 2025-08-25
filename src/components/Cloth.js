// pages/Cloth.jsx
import BackToCollege from '../components/Cloth/BackToCollege';
import Combo from '../components/Cloth/Combo';
import Coupon from '../components/Cloth/Coupon';

import MostWanted from '../components/Cloth/MostWanted';
import NewArrival from '../components/Cloth/NewArrival';
import Testimonials from '../components/Cloth/Testimonials';
import Trust from '../components/Cloth/Trust';


const Cloth = () => {
  return (
    <>
      
      <NewArrival />
      <BackToCollege />
      <Combo />
      <Coupon />
      <MostWanted />
      <Testimonials />
      <Trust />
      
    </>
  );
};

export default Cloth;