import React from 'react';
import Hero from '../../Others/Hero/Hero';
import Slider from '../../Others/Slider/Slider';
import Works from '../../Share/Works/Works';
import Services from '../Services/Services';

const Home = () => {
   return (
      <div>
         <Slider></Slider>
         <Hero></Hero>
         <Services></Services>
         <Works></Works>
      </div>
   );
};

export default Home;