import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Hero from '../../Others/Hero/Hero';
import Slider from '../../Others/Slider/Slider';
import ChooseUs from '../../Share/ChooseUs/ChooseUs';
import Works from '../../Share/Works/Works';
import Services from '../Services/Services';

const Home = () => {
   useTitle('Home')
   return (
      <div>
         <Slider></Slider>
         <Hero></Hero>
         <Services></Services>
         <Works></Works>
         <ChooseUs></ChooseUs>
      </div>
   );
};

export default Home;