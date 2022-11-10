import React from 'react';
import { FaEdit, FaStar, FaTrash } from 'react-icons/fa';
import { TbDots } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ReviewsItems = ({ review, reviews, setReviews }) => {
   const { _id, title, picture, clientName, rating, price, message, date } = review;

   const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure want to delete?');
      if (proceed) {
         fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               if (data.acknowledged) {
                  toast.success('deleted succesfully')
                  const remaining = reviews.filter(review => review._id !== id);
                  setReviews(remaining);
               }

               console.log(data);
            })
            .catch(err => {
               console.error(err);
               toast.error(err, { autoClose: 2000 })
            })
      }
   }

   return (
      <div className='mb-5 shadow-2xl p-5 rounded-2xl'>
         <div className='border-b-4 mb-5 flex justify-between'>
            <h1 className='text-2xl font-bold text-gray-600'>{title}</h1>
            <div className="dropdown dropdown-end">
               <label tabIndex={0} className="btn btn-ghost m-1"><TbDots className='text-xl font-bold'></TbDots></label>
               <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 w-32">
                  <Link to={`/editpage/${_id}`} htmlFor="my-modal-6" className='text-md flex btn btn-ghost'><FaEdit></FaEdit> -Edit</Link>
                  <button onClick={() => handleDelete(_id)} className='text-md flex btn btn-ghost'><FaTrash></FaTrash> -Delete</button>
               </ul>
            </div>
         </div>
         <div className='flex'>
            <img className='w-48 mr-5' src={picture} alt="" />
            <div>
               <h3 className='text-sm font-medium'>Name: {clientName}</h3>
               <h3 className='text-sm font-medium'>Rating: {rating} <FaStar className='inline mb-1 text-warning'></FaStar></h3>
               <h3 className='text-sm font-medium'>Price: {price}$</h3>
               <h3 className='text-sm font-medium'>message: {message}</h3>
            </div>
         </div>
      </div>
   );
};

export default ReviewsItems;