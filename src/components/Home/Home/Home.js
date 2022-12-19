import React from 'react';
import { FaCheck } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';
import ChooseUs from '../../Share/ChooseUs/ChooseUs';
import Works from '../../Share/Works/Works';
import Services from '../Services/Services';
import img1 from '../../../assets/images/cleaner man.jpg'
import { IoMdNotificationsOutline } from 'react-icons/io';
import SliderItem from '../../Others/Slider/SliderItem';
import ImageGallary from '../../Share/Gallary/ImageGallary';

const Home = () => {
   useTitle('Home')
   const sliderData = [
      {
         image: "https://i.ibb.co/zn0YgBF/1000-F-219330520-sy-GRnisb-MRej9u-YNOz3-Sr5c-HDibcb-Y2-J.jpg",
         prev: 4,
         id: 1,
         next: 2
      },
      {
         image: "https://i.ibb.co/c85RRzr/240-F-416839335-NWT6vhg-FIf-Po-Wfjd-Kh-Gyj8enuqls9y8-N.jpg",
         prev: 1,
         id: 2,
         next: 3
      },
      {
         image: "https://i.ibb.co/1M9hfFp/1000-F-331850802-q-BUm-RWPyqgnf-BBHPbzqf-T8cud-G55-Y1u-F.jpg",
         prev: 2,
         id: 3,
         next: 4
      },
      {
         image: "https://i.ibb.co/CJkmGDb/1000-F-283626778-WKekd-Mp-Cx4l2r-Hpb8mqxa-Zfej-RGf-Pd-Wl.jpg",
         prev: 3,
         id: 4,
         next: 1
      },
   ]
   return (
      <div className='overflow-hidden'>
         <div className=''>
            <div className="carousel h-[250px] lg:h-[500px]">
               {
                  sliderData.map(slider => <SliderItem key={slider.id} slider={slider}></SliderItem>)
               }
            </div>
         </div>
         <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-5 mb-10 mt-20 container mx-auto px-2'>
               <div className='col-span-2' data-aos="fade-right" data-aos-duration="2000">
                  <img src={img1} alt="" />
               </div>
               <div className='col-span-3 text-center' data-aos="fade-left" data-aos-duration="2000">
                  <h1 className='text-2xl lg:text-5xl font-bold mb-10 text-gray-600'>Cleaning With a Conscience</h1>
                  <hr />
                  <h3 className='text-2xl font-medium my-10'>Professional Cleaning Services for Home and Office</h3>
                  <p className='text-md lg:text-xl font-serif text-justify px-2'>Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve our already high standards to have you see us as the absolute best in the industry. It's not enough to have trust in the cleaning crew that you let into your home… you also have to trust that they will perform a first-class cleaning job for you. Putting our employees through a rigorous training program ensures each member of our cleaning team understands their role and how it relates to the overall performance of the team.</p>
                  <div className='grid grid-cols-2 mt-10'>
                     <h4 className='mb-3'><FaCheck className='inline text-success mr-2'></FaCheck> One-off, weekly or fortnightly visits</h4>
                     <h4 className='mb-3'><FaCheck className='inline text-success mr-2'></FaCheck> One-off, weekly or fortnightly visits</h4>
                     <h4 className='mb-3'><FaCheck className='inline text-success mr-2'></FaCheck> One-off, weekly or fortnightly visits</h4>
                     <h4 className='mb-3'><FaCheck className='inline text-success mr-2'></FaCheck> One-off, weekly or fortnightly visits</h4>
                  </div>
               </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center bg-emerald-400 p-10 justify-center' data-aos="fade-up" data-duration="2000">
               <h1 className='text-2xl lg:text-4xl text-white text-center'>Get started with your <span className='font-bold'>free estimate</span> </h1>
               <div className='flex my-5 lg:mb-5 lg:ml-5'>
                  <button className="btn rounded-full bg-slate-100  hover:text-white text-black font-semibold duration-500 uppercase ml-5"> <IoMdNotificationsOutline className='mr-1 font-normal text-xl'></IoMdNotificationsOutline> get free estimate</button>
               </div>
            </div>
         </div>
         <Services></Services>
         <Works></Works>
         <ChooseUs></ChooseUs>
         <ImageGallary></ImageGallary>
      </div>
   );
};

export default Home;