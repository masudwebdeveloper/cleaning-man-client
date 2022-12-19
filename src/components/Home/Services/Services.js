import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';
import ServicesItems from './ServicesItems';

const Services = () => {
   const [services, setServices] = useState([]);
   const [size, setSize] = useState(3);
   useTitle('Services')

   useEffect(() => {
      const url = `https://cleaning-man-server.vercel.app/services?size=${size}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setServices(data.services))
         .catch(err => {
            console.error(err);
            toast.error(err, { autoClose: 2000 })
         })
   }, [size])
   return (
      <div className='container mx-auto my-10'>
         <div className='w-1/2 mx-auto text-center'>
            <h1 className='text-3xl lg:text-5xl font-semibold lg:font-bold mb-10 my-7 lg:my-20'>Our Services</h1>
            <hr />
            <p></p>
         </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto justify-center gap-5'>
            {
               services.map(service => <ServicesItems key={service._id} service={service}></ServicesItems>)
            }

         </div>
         <div className='mt-10 text-center'>
            {
               services.length === 3 ?
                  <Link to='/services' className='btn btn-secondary' onClick={() => setSize(size + 3)}>Show More Services</Link>
                  :
                  <button className='btn btn-secondary' onClick={() => setSize(size - 3)}>Show less Services</button>
            }
         </div>
      </div>
   );
};

export default Services;