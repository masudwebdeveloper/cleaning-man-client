import React from 'react';
import './SliderItem.css'

const SliderItem = ({ slider }) => {
   return (
      <div id={`slide${slider.id}`} className="carousel-item relative w-full">
         <div className='carousel-img w-full'>
            <img alt='' src={slider.image} className="w-full h-full rounded-lg" />
         </div>
         <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${slider.prev}`} className="btn btn-circle">❮</a>
            <a href={`#slide${slider.next}`} className="btn btn-circle">❯</a>
         </div>
         <div className="absolute  top-[50px] lg:top-[150px] left-[61px] lg:left-[575px] flex justify-center items-center text-center" data-aos="zoom-in" data-aos-duration="2000">
            <h1 className='text-2xl lg:text-5xl font-bold text-white'>Eco Friendly <br /> Cleaning Services</h1>
         </div>
         <div className="absolute top-[135px] lg:top-[275px] left-[93px] lg:left-[685px]">
            <button className="btn btn-secondary">More Explore</button>
         </div>
      </div>
   );
};

export default SliderItem;