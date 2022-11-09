import React from 'react';
import image from '../../../assets/images/jwt.png'


const PostTwo = () => {
   return (
      <div className='my-10 shadow-2xl p-5 rounded-xl'>
         <img className='mx-auto' src={image} alt="" />
         <h1 className='text-3xl lg:text-5xl font-bold text-gray-600 my-10 text-center'>What is JWT, and how does it work?</h1>
         <p className='text-xl font-normal mb-1 border-2 pl-5'>SON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
      </div>
   );
};

export default PostTwo;