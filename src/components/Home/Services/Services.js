import React, { useEffect, useState } from 'react';
import ServicesItems from './ServicesItems';

const Services = () => {
   const [services, setServices] = useState([]);
   const [size, setSize] = useState(3);

   console.log(services);

   useEffect(() => {
      const url = `http://localhost:5000/services?size=${size}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setServices(data.services))
         .catch(err => console.error(err))
   }, [size])
   return (
      <div className=' container mx-auto my-10'>
         <div className='w-1/2 mx-auto'>
            <h1 className='text-5xl font-bold mb-10 my-20'>Our Services</h1>
            <hr />
            <p></p>
         </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
               services.map(service => <ServicesItems key={service._id} service={service}></ServicesItems>)
            }

         </div>
         <div className='mt-10'>
            {
               services.length === 3 ?
                  <button className='btn btn-secondary' onClick={() => setSize(size + 3)}>Show More Services</button>
                  :
                  <button className='btn btn-secondary' onClick={() => setSize(size - 3)}>Show less Services</button>
            }
         </div>
      </div>
   );
};

export default Services;