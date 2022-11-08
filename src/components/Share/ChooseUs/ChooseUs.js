import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import image from '../../../assets/images/the-best-img-1.png'

const ChooseUs = () => {
   return (
      <div className='bg-gray-100'>
         <div className='container mx-auto mb-1 mt-32 py-10'>
            <div className='text-center mb-10'>
               <h1 className='text-5xl text-gray-500 font-semibold mb-8'>Why Our Customers Choose Us?</h1>
               <div className='divider border-1 mb-8 w-2/5 mx-auto'><GoPrimitiveDot className='text-gray-500'></GoPrimitiveDot></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
               <div className='text-center lg:text-right mt-10'>
                  <div className='mb-10'>
                     <h2 className='text-xl font-bold text-gray-600'>We Are Experts</h2>
                     <p className='text-md font-medium text-gray-500'>and dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.</p>
                  </div>
                  <div className='mb-10'>
                     <h2 className='text-xl font-bold text-gray-600'>We Are Committed</h2>
                     <p className='text-md font-medium text-gray-500'>to our customers and are guided in all we do by their needs.</p>
                  </div>

               </div>
               <div className='mx-auto'>
                  <img src={image} alt="" />
               </div>
               <div className='text-center lg:text-left mt-10'>
                  <div className='mb-10'>
                     <h2 className='text-xl font-bold text-gray-600'>We Are Complete</h2>
                     <p className='text-md font-medium text-gray-500'>and seek to provide exceptional service and engage in proactive behavior.</p>
                  </div>
                  <div className='mb-10'>
                     <h2 className='text-xl font-bold text-gray-600'>We Are Driven</h2>
                     <p className='text-md font-medium text-gray-500'>to pursue the highest standards and continuously improve in all aspects of our business.</p>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
};

export default ChooseUs;