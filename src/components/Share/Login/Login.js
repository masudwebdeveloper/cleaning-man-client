import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image1 from '../../../assets/images/login.webp'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
   const { login } = useContext(AuthContext);
   const [error, setError] = useState('');
   const location = useLocation();
   const navigate = useNavigate();
   useTitle('Login')

   const from = location.state?.from?.pathname || '/';

   const handleSignIn = (event) => {
      event.preventDefault();
      setError('');
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      login(email, password)
         .then(result => {
            const user = result.user
            form.reset();

            const userEmail = {
               email: user?.email,
            }

            fetch('https://cleaning-man-server.vercel.app/jwt', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json'
               },
               body: JSON.stringify(userEmail)
            })
               .then(res => res.json())
               .then(data => {
                  localStorage.setItem('jwt-token', data.token)
                  navigate(from, { replace: true })
               })
               .then(err => {
                  // setError(err.message)
                  console.error(err)})
         })
         .catch(err => {
            setError(err.message)
            console.error(err);
         }

         )
   }
   return (
      <div className="hero my-10">
         <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-20 justify-between">
            <div className="text-center">
               <img src={image1} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100  py-10">
               <form onSubmit={handleSignIn} className="card-body">
                  <h1 className="text-5xl font-bold text-center">Login now!</h1>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                     <label className="label">
                        <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                  </div>
                  <p className='text-red-500'>{error}</p>
                  <div className="form-control mt-6">
                     <button className="btn btn-primary">Login</button>
                  </div>
               </form>
               <p className='text-center'>New Genius Car?<Link className='text-orange-600 font-semibold' to="/signup">Sign Up</Link></p>
               <SocialLogin></SocialLogin>
            </div>
         </div>
      </div>
   );
};

export default Login;