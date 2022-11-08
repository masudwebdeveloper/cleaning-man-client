import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {FaUserCircle} from 'react-icons/fa'

const Header = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleLogout = () => {
      logOut()
         .then(() => { })
      .catch(err => console.error(err))
   }
   return (
      <div className="navbar bg-gray-200 sticky top-0 z-50 container mx-auto">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Home</a></li>
                  <li><a>Login</a></li>
               </ul>
            </div>
            <Link to='/' className="cursor-pointer normal-case text-4xl font-bold">Clean East</Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
               <li><Link className='text-xl font-semibold mr-5' to='/home'>Home</Link></li>
               {
                  user?.uid ?
                     <li><Link className='text-xl font-semibold' to='/Services'>Services</Link></li>
                     :
                     <></>
               }
            </ul>
         </div>
         <div className="navbar-end lg:flex mr-10">
            <ul className="menu menu-horizontal p-0">
               {
                  user?.uid ? <></>
                     :
                  <li><Link className='text-xl font-semibold' to='/login'>Login</Link></li>
               }

               <li tabIndex={0}>
                  <div className='w-20'>
                     {
                        user?.uid ? <img className='rounded-full' src={user?.photoURL} alt="" />
                           : 
                        <FaUserCircle className='w-full text-4xl'></FaUserCircle>   
                     }
                  </div>
                  <ul className="p-2 mr-5 z-50 bg-slate-400 text-slate-100">
                     {
                        user?.uid ? <li><a>{user?.displayName}</a></li>
                           : 
                           <>N/A</>
                     }
                     <li><a onClick={handleLogout}>logOut</a></li>
                  </ul>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Header;