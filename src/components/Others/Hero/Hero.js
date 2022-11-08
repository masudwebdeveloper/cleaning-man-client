import React from 'react';
import Lottie from 'react-lottie';
import img1 from '../../../assets/images/cleaner man.jpg'
import { FaBeer, FaCheck } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
const Hero = () => {

   return (
      <div>
         <div className='grid grid-cols-1 lg:grid-cols-5 my-10 container mx-auto'>
            <div className='col-span-2'>
               <img src={img1} alt="" />
            </div>
            <div className='col-span-3 text-center'>
               <h1 className='text-5xl font-bold mb-10'>Cleaning With a Conscience</h1>
               <hr />
               <h3 className='text-2xl font-medium my-10'>Professional Cleaning Services for Home and Office</h3>
               <p className='text-xl font-serif'>Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve our already high standards to have you see us as the absolute best in the industry. It's not enough to have trust in the cleaning crew that you let into your home… you also have to trust that they will perform a first-class cleaning job for you. Putting our employees through a rigorous training program ensures each member of our cleaning team understands their role and how it relates to the overall performance of the team.</p>
               <div className='grid grid-cols-2 mt-10'>
                  <h4 className='mb-3'><FaCheck className='inline text-success mr-2'></FaCheck> One-off, weekly or fortnightly visits</h4>
                  <h4 className='mb-3'><FaCheck className='inline text-success mr-2'></FaCheck> One-off, weekly or fortnightly visits</h4>
                  <h4 className='mb-3'><FaCheck className='inline text-success mr-2'></FaCheck> One-off, weekly or fortnightly visits</h4>
                  <h4 className='mb-3'><FaCheck className='inline text-success mr-2'></FaCheck> One-off, weekly or fortnightly visits</h4>
               </div>
            </div>
         </div>
         <div className='flex flex-col lg:flex-row items-center bg-emerald-400 p-5 justify-center pt-8'>
            <h1 className='text-4xl text-white text-center'>Get started with your <span className='font-bold'>free estimate</span> </h1>
            <div className='flex my-5 lg:mb-5 ml-5'>
               <div>
                  <button className="btn rounded-full bg-slate-100  hover:text-white text-black font-semibold duration-500 uppercase ml-5"> <IoMdNotificationsOutline className='mr-1 font-normal text-xl'></IoMdNotificationsOutline> get free estimate</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;