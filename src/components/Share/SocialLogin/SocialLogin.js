import React from 'react';

const SocialLogin = () => {
   const handleGoogleSignIn = () => {
      
   }
   return (
      <div className='text-center mt-5'>
         <p><small>Social Login</small></p>
         <hr />
         <div className='mt-5'>
            <button onClick={handleGoogleSignIn} className="btn btn-ghost text-xl">
               <span className='text-[#4285F4]'>G</span>
               <span className='text-[#34A853]'>o</span>
               <span className='text-[#FBBC05]'>o</span>
               <span className='text-[#EA4335]'>g</span>
               <span className='text-[#4285F4]'>l</span>
               <span className='text-[#34A853]'>e</span>
            </button>
         </div>
      </div>
   );
};

export default SocialLogin;