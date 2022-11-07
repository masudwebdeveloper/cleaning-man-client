import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Main;