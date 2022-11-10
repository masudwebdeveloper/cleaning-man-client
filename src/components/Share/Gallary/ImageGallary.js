import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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
   ]
   return (
      <section className="py-6  dark:text-gray-50">
         
            <PhotoProvider>
               <div className='grid grid-cols-3 gap-5 container mx-auto'>
                  {images.map((item, index) => (
                     <PhotoView key={index} src={item.image}>
                        <img src={item.image} alt="" />
                     </PhotoView>
                  ))}
               </div>
            </PhotoProvider>
         
      </section>
   );
};

export default ImageGallary;