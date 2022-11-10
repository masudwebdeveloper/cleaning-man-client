import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../../hooks/useTitle';


const AllReviewsItems = ({ review }) => {
   const { title, picture, clientName, rating, email, message, date } = review;
   useTitle('Reviews')
   return (
      <div className="card lg:card-side bg-base-100 my-10 shadow-2xl p-2 lg:p-10">
         <PhotoProvider>
            <PhotoView src={picture}>
               <figure><img className='w-full lg:w-96' src={picture} alt="Album" /></figure>
            </PhotoView>
         </PhotoProvider>
         <div className="card-body">
            <h2 className="card-title text-2xl lg:text-4xl font-bold text-gray-600">{title}</h2>
            <h3 className='text-xl lg:text-2xl font-semibold text-gray-600'>Viewer: {clientName}</h3>
            <div>
               <p>Rating: {rating} <FaStar className='inline ml-1 text-warning mt-[-3px]'></FaStar></p>
               <p>{ }</p>
            </div>
            <p>Message: {message}</p>
            <div className="card-actions justify-start lg:justify-end">
               <button className="btn btn-primary">{email}</button>
            </div>
         </div>
      </div>
   );
};

export default AllReviewsItems;