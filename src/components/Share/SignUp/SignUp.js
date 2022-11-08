import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import image1 from '../../../assets/images/signup.jpg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const SignUp = () => {
   const { createUser } = useContext(AuthContext);
   
   const handleSignUp = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password);
      createUser(email, password)
         .then(result => {
            const user = result.user;
            toast.success('Account Create is successfull', {autoClose: 2000})
            form.reset();
         })
         .catch(err => {
            console.error(err)
            toast.error(err, {autoClose: 2000})
         })
   }

   return (
      <div className="hero my-10">
         <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-20 justify-between">
            <div className="text-center">
               <img src={image1} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-10">
               <form onSubmit={handleSignUp} className="card-body">
               <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text" name='name' placeholder="name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="password" name='password' placeholder="password" className="input input-bordered" />
                  </div>
                  <div className="form-control mt-6">
                     <button className="btn btn-primary">SignUp</button>
                  </div>
               </form>
               <p className='text-center'>Already you have an Account <Link className='text-orange-600' to='/login'>Login</Link></p>
               <SocialLogin></SocialLogin>
            </div>
         </div>
      </div>
   );
};

export default SignUp;