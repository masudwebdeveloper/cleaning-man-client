import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

const Works = () => {
   return (
      <div className='container mx-auto my-20'>
         <div className='text-center mb-10' data-aos="zoom-out" data-aos-duration="2000">
            <h1 className='text-5xl text-gray-500 font-semibold mb-8'>How It Works</h1>
            <div className='divider border-1 mb-8 w-2/5 mx-auto'><GoPrimitiveDot className='text-gray-500'></GoPrimitiveDot></div>
            <p className='text-xl font-medium text-gray-500'>Taking the stress out of any aspect of cleaning is what we specialise in. We will come to your premises and offer a free quote, so you know exactly what you'll be spending</p>
         </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='text-center' data-aos="fade-down-right" data-aos-duration="2000">
               <p className='w-24 h-24 mx-auto shadow-2xl mb-8 bg-green-300 rounded-full flex justify-center items-center'>
                  <span className='font-bold text-3xl text-white'>1</span>
               </p>
               <h2 className='text-3xl font-semibold text-gray-500 mb-5'>Book online <span className='text-green-300'>in 60 seconds</span></h2>
               <p className='text-md font-medium text-gray-500'>Book & pay online. We'll match you with a trusted, experienced house cleaner</p>
            </div>
            <div className='text-center' data-aos="zoom-out-up" data-aos-duration="2000">
               <p className='w-24 h-24 mx-auto shadow-2xl mb-8 bg-sky-300 rounded-full flex justify-center items-center'>
                  <span className='font-bold text-3xl text-white'>2</span>
               </p>
               <h2 className='text-3xl font-semibold text-gray-500 mb-5'>Get a <span className='text-green-500'>5 star cleaner</span></h2>
               <p className='text-md font-medium text-gray-500'>Book & pay online. We'll match you with a trusted, experienced house cleaner</p>
            </div>
            <div className='text-center' data-aos="fade-down-left" data-aos-duration="2000">
               <p className='w-24 h-24 mx-auto shadow-2xl mb-8 bg-sky-600 rounded-full flex justify-center items-center'>
                  <span className='font-bold text-3xl text-white'>3</span>
               </p>
               <h2 className='text-3xl font-semibold text-gray-500 mb-5'>Manage everything <span className='text-green-500'>online</span></h2>
               <p className='text-md font-medium text-gray-500'>Book & pay online. We'll match you with a trusted, experienced house cleaner</p>
            </div>
         </div>
      </div>
   );
};

export default Works;