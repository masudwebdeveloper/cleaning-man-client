import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewsItems from './ReviewsItems';

const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   const { user } = useContext(AuthContext);

   useEffect(() => {
      const url = `http://localhost:5000/reviews?email=${user?.email}`;
      fetch(url)
         .then(res => res.json())
         .then(data => {
            setReviews(data)
         })
         .catch(err => {
            console.error(err);
         })
   }, [user?.email])
   return (
      <div className='container mx-auto'>
         {/* {
            reviews.sort((a, b) => {
               return a.date - b.date;
           })
         } */}
         <h1 className='text-4xl font-bold my-10'>Reviews founded items: { reviews.length}</h1>
         <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
         {
            reviews.map(review => <ReviewsItems
               key={review._id}
               review={review}
               reviews={reviews}
               setReviews={setReviews}
            ></ReviewsItems>)
         }
         </div>
      </div>
   );
};

export default Reviews;