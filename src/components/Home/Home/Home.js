import React from 'react';
import Hero from '../../Others/Hero/Hero';
import Slider from '../../Others/Slider/Slider';
import Services from '../Services/Services';

const Home = () => {
   return (
      <div>
         <Slider></Slider>
         <Hero></Hero>
         <Services></Services>
      </div>
   );
};

export default Home;