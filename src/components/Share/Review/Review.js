import React, { useContext } from 'react';
import { FaCheck, FaClock, FaHome, FaPhone, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { RiAddFill } from 'react-icons/ri'
import { toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';


const Review = () => {
   const service = useLoaderData();
   const { user } = useContext(AuthContext);
   const { _id, title, picture, description, pirce, rating, name } = service;
   const email = user?.email || 'unregistered';
   useTitle('Review')

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const clientName = form.name.value;
      const message = form.message.value;

      const review = {
         service_id: _id,
         title,
         picture,
         price: pirce,
         name,
         clientName,
         rating,
         email,
         message,
         date: Date.now()
      }
      fetch('https://cleaning-man-server.vercel.app/reviews', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(review)
      })
         .then(res => res.json())
         .then(data => {
            if (data.acknowledged) {
               toast.success('added review successfull', { autoClose: 2000 })
               form.reset();
            }

         })
         .catch(err => {
            console.error(err);
            toast.error(err, { autoClose: 2000 })
         })
   }
   return (
      <div className="hero min-h-screen bg-base-200 container mx-auto">
         <div className="hero-content flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-gray-500">{title}</h1>
            <div className="divider w-full lg:w-1/2 mx-auto"><GoPrimitiveDot className='font-bold text-2xl text-gray-400'></GoPrimitiveDot></div>
            <img alt='' src={picture} className=" rounded-lg shadow-2xl mb-10" />
            <div className='text-left ml-5 lg:w-4/5'>
               <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-gray-500">{title}</h1>
               <hr className='border-2 border-gray-400' />
               <p className="py-6 text-lg text-gray-500">{description}</p>
               <div className='grid grid-cols-3 justify-between mb-5'>
                  <p>Price: {pirce}$</p>
                  <p>Rating: {rating} <FaStar className='inline text-warning'></FaStar></p>
                  <p>Name: {name}</p>
               </div>
               <form onSubmit={handleSubmit}>
                  <div className='flex mb-5'>
                     <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs mr-5" required />
                     <input type="text" name='email' defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly />
                  </div>

                  <textarea name='message' className="textarea mb-5 textarea-bordered w-1/2" placeholder={`what's on you mind, ${user?.displayName}`}></textarea> <br required />
                  <button className="btn btn-success mb-10 mr-10 hover:bg-green-600 hover:text-white duration-500"><RiAddFill className='text-xl mr-2'></RiAddFill>Add Rivew</button>
                  <Link to='/home' className="btn btn-success mb-10 hover:bg-green-600 hover:text-white duration-500"><FaHome className='inline mr-2'></FaHome>Back To Home</Link>
               </form>
               <h1 className="text-3xl lg:text-4xl font-bold mb-5 text-gray-500">How does our apartment cleaning program work?</h1>
               <hr className=' border-gray-400' />
               <p className="py-6 text-lg text-gray-500">We start with a thorough detail-clean throughout your house over the course of the first two cleans. On the first clean, our maid service will thoroughly clean your apartment, with special attention on your kitchen and bathrooms. On the second session, we???ll clean your entire apartment, but this time we???ll provide detail-clean services in your sleeping and living areas. We???ll continue to maintain this detail-clean level throughout your home throughout our next visits by providing deep cleaning services on a rotating basis.</p>
               <p className="py-6 text-lg text-gray-500 my-10">Every time we clean, we'll provide services that include the following:</p>
               <div className='flex-col'>
                  <div className='flex mb-5'>
                     <p className='mr-2 mt-1'><FaCheck className='text-success'></FaCheck></p>
                     <div>
                        <h4>Bathrooms</h4>
                        <p><small>Cobwebs removed, dusting, floors cleaned, toilets cleaned, mirrors / chrome fixtures cleaned, shower doors cleaned, tile walls, bathtub / showers cleaned</small></p>
                     </div>
                  </div>
                  <div className='flex mb-5'>
                     <p className='mr-2 mt-1'><FaCheck className='text-success'></FaCheck></p>
                     <div>
                        <h4>Sleeping Areas</h4>
                        <p><small>Surfaces hand wiped, floors cleaned, general dusting, cobwebs removed, doors and door frames spot cleaned</small></p>
                     </div>
                  </div>
                  <div className='flex mb-5'>
                     <p className='mr-2 mt-1'><FaCheck className='text-success'></FaCheck></p>
                     <div>
                        <h4>Living Areas</h4>
                        <p><small>Surfaces hand wiped, cobwebs removed, doors and door frames spot cleaned, general dusting, floors cleaned</small></p>
                     </div>
                  </div>
                  <div className='flex mb-5'>
                     <p className='mr-2 mt-1'><FaCheck className='text-success'></FaCheck></p>
                     <div>
                        <h4>Kitchen</h4>
                        <p><small>Countertops cleaned, outside of range hood cleaned, top and front of range cleaned, drip pans / glass top surfaces wiped, sinks cleaned and chrome shined, fronts of all appliances cleaned, general dusting, cobwebs removed, microwave wiped out, doors and door frames spot cleaned</small></p>
                     </div>
                  </div>
               </div>

               <div className='flex flex-col lg:flex-row items-center bg-gray-200 p-5 justify-center pt-8'>
                  <div className='flex mb-5'>
                     <p className='mr-2 mt-2'><FaPhone className='text-success'></FaPhone></p>
                     <div>
                        <h4>Phone: +880 179 6682951</h4>
                        <h4>Fax: 585-587-4569</h4>
                     </div>
                  </div>
                  <div className='flex mb-5 ml-5'>
                     <p className='mr-2 mt-2'><FaClock className='text-success'></FaClock></p>
                     <div>
                        <h4>Mon-Fri: 9:00 am - 5:00 pm</h4>
                        <h4>Sat-Sun: 11:00 am - 16:00 pm</h4>
                     </div>
                  </div>
                  <div className='flex mb-5 ml-5'>
                     <div>
                        <button className="btn btn-success rounded-full text-white uppercase ml-5"> <IoMdNotificationsOutline className='mr-1 font-normal text-xl'></IoMdNotificationsOutline> get free estimate</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Review;