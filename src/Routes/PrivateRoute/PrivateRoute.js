import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();
   if (loading) {
      return <div className='min-h-screen'><div className="w-16 mx-auto h-16 mt-[200px] border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
   }
   if (!user) {
      return <Navigate to='/login' state={{ from: location }} replace></Navigate>
   }
   return children
};

export default PrivateRoute;