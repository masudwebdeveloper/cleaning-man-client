import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';

const EditPage = () => {
   const storedUser = useLoaderData();
   const [user, setUser] = useState(storedUser);
   const navigate = useNavigate();
   useTitle('Edit')

   const doot = 'jfjf'


   const handleUpdate = (event) => {
      event.preventDefault();
      console.log(user);
      fetch(`https://cleaning-man-server.vercel.app/reviews/${storedUser._id}`, {
         method: 'PATCH',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(user)
         
      })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount > 0) {
               toast.success('Updated Successfull')
               navigate('/reviews')

            }
         })
         .catch(err => {
            console.error(err);
            toast.error(err, { autoClose: 2000 })
            console.log("🚀 ~ file: EditPage.js ~ line 38 ~ handleUpdate ~ err", err)
         })
   }

   const handleChange = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const newUser = { ...user };
      newUser[field] = value;
      setUser(newUser);
   }

   return (
      <div className='dark:bg-gray-200 mt-[-10px]'>
         <div className='container pt-5 mx-auto'>
            <div className="card w-1/2 mx-auto lg:card-side bg-base-100 shadow-2xl p-2 lg:p-3">
               <figure><img className='w-full lg:w-64 rounded-lg' src={storedUser.picture} alt="Album" /></figure>
               <div className="card-body">
                  <h2 className="card-title text-2xl lg:text-2xl font-semibold text-gray-600">{storedUser.title}</h2>
                  <div>
                     <p>Rating: {storedUser.rating} <FaStar className='inline ml-1 text-warning mt-[-3px]'></FaStar></p>
                     <p>{ }</p>
                  </div>
                  <div className="card-actions justify-start lg:justify-end">
                     <button className="btn btn-primary lowercase text-lg">{storedUser.email}</button>
                  </div>
               </div>
            </div>
            <form className='flex flex-col w-1/2 mx-auto' onSubmit={handleUpdate}>
               <input onChange={handleChange} type="text" name='clientName' placeholder="Your Name..." className="input input-bordered w-full my-5 text-lg font-semibold" defaultValue={`${storedUser.clientName}`} />
               <textarea onChange={handleChange} name='message' className="textarea textarea-bordered mb-5 text-lg font-semibold" placeholder="What's Your mind" defaultValue={`${storedUser.message}`}></textarea>
               <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-5">Save</button>
            </form>
         </div>
      </div>
   );
};

export default EditPage;