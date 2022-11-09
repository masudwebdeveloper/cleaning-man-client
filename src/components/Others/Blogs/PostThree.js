import React from 'react';
import image from '../../../assets/images/jsnodejs.png'

const PostThree = () => {
   return (
      <div className='my-10 shadow-2xl p-5 rounded-xl'>
         <img className='mx-auto' src={image} alt="" />
         <h1 className='text-3xl lg:text-5xl font-bold text-gray-600 my-10 text-center'>What is the difference between javascript and NodeJS?</h1>
         <p className='text-xl font-normal mb-1 border-2 pl-5'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
         <h3 className='text-3xl font-semibold mb-5'>Node js</h3>
         <p className='text-xl font-normal mb-1 border-2 pl-5'>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
         <h3 className='text-3xl font-semibold mb-5'>JavaScript</h3>
         <p className='text-xl font-normal mb-1 border-2 pl-5'>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
      </div>
   );
};

export default PostThree;