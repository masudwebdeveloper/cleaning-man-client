import React from 'react';
import useTitle from '../../../hooks/useTitle';
import PostFour from './PostFour';
import PostOne from './PostOne';
import PostThree from './PostThree';
import PostTwo from './PostTwo';

const Blogs = () => {
   useTitle('Blogs')
   return (
      <div>
         <div className='container mx-auto'>
            <PostOne></PostOne>
            <PostTwo></PostTwo>
            <PostThree></PostThree>
            <PostFour></PostFour>
         </div>
      </div>
   );
};

export default Blogs;