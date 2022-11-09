import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AllReviewsItems from './AllReviewsItems';

const AllReviews = () => {
   const [allreviews, setAllReviews] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/allreviews')
         .then(res => res.json())
         .then(data => {
            data.sort((a,b)=> b.date - a.date)
            setAllReviews(data)
         })
         .catch(err => {
            console.error(err);
            toast.error(err, { autoClose: 2000 })
         })
   }, [])
   return (
      <div>
         <h1 className='text-2xl lg:text-5xl text-gray-600 font-bold text-center mt-10'>Total Review Items: {allreviews.length}</h1>
         <div className='container mx-auto'>
            {
               allreviews.map(singleReview => <AllReviewsItems
                  key={singleReview._id}
                  review={singleReview}
               ></AllReviewsItems>)
            }
         </div>
      </div>
   );
};

export default AllReviews;