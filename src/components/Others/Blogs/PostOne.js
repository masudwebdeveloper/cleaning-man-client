import React from 'react';
import image from '../../../assets/images/nosql.png'

const PostOne = () => {
   return (
      <div className='my-10 shadow-2xl p-5 rounded-xl'>
         <img className='mx-auto' src={image} alt="" />
         <h1 className='text-3xl lg:text-5xl font-bold text-gray-600 my-10 text-center'>What is Difference between SQL and NoSQL?</h1>
         <h3 className='text-3xl font-semibold mb-5'>SQL</h3>
         <p className='text-xl font-normal mb-1 border-2 pl-5'>Tables with fixed rows and columns</p>
         <p className='text-xl font-normal mb-1 border-2 pl-5'>Developed in the 1970s with a focus on reducing data duplication</p>
         <p className='text-xl font-normal mb-5 border-2 pl-5'>Oracle, MySQL, Microsoft SQL Server, and PostgreSQL</p>

         <h3 className='text-3xl font-semibold mb-5'>NoSQL</h3>
         <p className='text-xl font-normal mb-1 border-2 pl-5'>Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges</p>
         <p className='text-xl font-normal mb-1 border-2 pl-5'>Developed in the late 2000s with a focus on scaling and allowing for rapid application change driven by agile and DevOps practices.</p>
         <p className='text-xl font-normal mb-1 border-2 pl-5'>Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune</p>
         
      </div>
   );
};

export default PostOne;