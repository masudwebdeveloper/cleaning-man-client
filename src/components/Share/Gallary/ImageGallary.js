import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import image1 from '../../../assets/images/banner-calendar-img.png'

const ImageGallary = () => {
   const images = [
      {
         image: 'https://i.ibb.co/DpwX07m/service-page-4-img.jpg',
         id: 1
      },
      {
         image: 'https://i.ibb.co/PWdc6PD/service-page-5-img.jpg',
         id: 2
      },
      {
         image: 'https://i.ibb.co/TR7Wn9J/service-page-6-img.jpg',
         id: 3
      },
      {
         image: 'https://i.ibb.co/51dyFL2/service-page-7-img.jpg',
         id: 4
      },
      {
         image: 'https://i.ibb.co/CnYbDt6/service-page-9-img.jpg',
         id: 5
      },
      {
         image: 'https://i.ibb.co/mDCs38y/service-page-8-img.jpg',
         id: 5
      },
   ]
   return (
      <section className="py-6  dark:text-gray-50">
         <div className='text-center mb-10' data-aos="fade-down" data-aos-duration="2000">
            <h1 className='text-5xl text-gray-500 font-semibold mb-8'>Our Projects</h1>
            <div className='divider border-1 mb-8 w-2/5 mx-auto'><GoPrimitiveDot className='text-gray-500'></GoPrimitiveDot></div>
         </div> 
         <PhotoProvider
            speed={() => 800}
            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            loop={6}
         >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto p-2'>
               {images.map((item, index) => (
                  <PhotoView key={index} src={item.image}>
                     <img className='hover:scale-105 duration-500 rounded-lg' src={item.image} style={{ objectFit: 'cover' }} alt="" />
                  </PhotoView>
               ))}
            </div>
         </PhotoProvider>
         <div className='flex flex-col gap-10 lg:flex-row items-center bg-emerald-400 justify-center mt-10' data-aos="fade-up" data-duration="2000">
            <img className='mt-[-10px]' src={image1} alt="" />
            <div className='text-center lg:text-right'>
               <h1 className='text-2xl lg:text-4xl text-white lg:mb-[-20px] pb-0'>Save Time. Save Money.</h1><br />
               <span className='font-bold text-4xl text-white '>Save Yourself!</span>
               <p className='font-medium text-xl text-white'>Life's Too Short to Clean Your Own Home</p>
            </div>
            <div className='flex mb-5 lg:ml-5'>
                  <button className="btn rounded-full bg-slate-100  hover:text-white text-black font-semibold duration-500 uppercase ml-5"> <IoMdNotificationsOutline className='mr-1 font-normal text-xl'></IoMdNotificationsOutline> get an estimate</button>
            </div>
         </div>
      </section >
   );
};

export default ImageGallary;