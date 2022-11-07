import React, { useState } from 'react';

const ServicesItems = ({ service }) => {
   const [active, setActive] = useState(true);
   const { title, picture, price, description, rating } = service;
   return (
      <div className="card w-96 bg-base-100 shadow-xl">
         <figure className="px-10 pt-10">
            <img src={picture} alt="Shoes" className="rounded-xl" />
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            {
               active ? <p>{description.length > 100 ? <> {description.slice(0, 100) + "..."} <button className='font-semibold' onClick={() => setActive(!active)}>Read more</button></> : description}</p>
                  : <p>{description} <button className='font-semibold' onClick={() => setActive(!active)}> Read Less </button></p>
            }

            <div className="card-actions">
               <button className="btn btn-secondary">Review</button>
            </div>
         </div>
      </div>
   )
};

export default ServicesItems;