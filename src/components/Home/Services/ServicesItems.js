import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesItems = ({ service }) => {
   const [active, setActive] = useState(true);
   const {_id, title, picture, pirce, description, rating } = service;
   return (
      <div className="card w-96 bg-base-100 shadow-xl">
         <figure className="px-10 pt-10">
            <img src={picture} alt="Shoes" className="rounded-xl" />
         </figure>
         <div className='flex justify-between mx-5 mt-5'>
            <p className='font-semibold'>Price: {pirce}$</p>
            <p className='mt-1 font-semibold'>Rating: { rating} <FaStar className='text-warning inline'></FaStar></p>
         </div>
         <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-500 font-bold">{title}</h2>
            {
               active ? <p>{description.length > 100 ? <> {description.slice(0, 100) + "..."} <button className='font-semibold' onClick={() => setActive(!active)}>Read more</button></> : description}</p>
                  : <p>{description} <button className='font-semibold' onClick={() => setActive(!active)}> Read Less </button></p>
            }

            <div className="card-actions">
               <Link to={`/review/${_id}`}  className="btn btn-secondary">Review details</Link>
            </div>
         </div>
      </div>
   )
};

export default ServicesItems;