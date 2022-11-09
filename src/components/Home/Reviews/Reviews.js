import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewsItems from './ReviewsItems';

const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   const { user, logOut } = useContext(AuthContext);
   useTitle('My Reviews')

   useEffect(() => {
      const url = `http://localhost:5000/reviews?email=${user?.email}`;
      fetch(url, {
         headers: {
            authorization: `Bearer ${localStorage.getItem('jwt-token')}`
         }
      })
         .then(res => {
            if (res.status === 401 || res.status === 403) {
               return logOut();
            }
            return res.json()
         })
         .then(data => {
            data.sort((a,b)=> b.date - a.date)
            setReviews(data)
         })
         .catch(err => {
            console.error(err);
         })
   }, [user?.email, logOut])
   return (
      <div className='container mx-auto'>
         <div className='text-center'>
            {
               reviews.length > 0 ?
                  <h1 className='text-4xl font-bold my-10'>
                     Reviews founded items: {reviews.length}
                  </h1>
                  :
                  <h1 className='text-4xl font-bold my-10'>
                     No reviews were added
                  </h1>
            }
         </div>

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