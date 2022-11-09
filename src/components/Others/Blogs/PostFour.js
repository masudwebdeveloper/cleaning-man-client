import React from 'react';
import image from '../../../assets/images/nodemultiple.png'

const PostFour = () => {
   return (
      <div className='my-10 shadow-2xl p-5 rounded-xl'>
         <img className='mx-auto h-[500px]' src={image} alt="" />
         <h1 className='text-3xl lg:text-5xl font-bold text-gray-600 my-10 text-center'>How does NodeJS handle multiple requests at the same time?</h1>
         <p className='text-xl font-normal mb-1 border-2 pl-5'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
      </div>
   );
};

export default PostFour;