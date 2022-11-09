import { createBrowserRouter } from "react-router-dom";
import AllReviews from "../components/Home/AllReviews/AllReviews";
import Home from "../components/Home/Home/Home";
import Reviews from "../components/Home/Reviews/Reviews";
import Services from "../components/Home/Services/Services";
import Main from "../components/Layout/Main";
import Blogs from "../components/Others/Blogs/Blogs";
import Login from "../components/Share/Login/Login";
import Review from "../components/Share/Review/Review";
import SignUp from "../components/Share/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/home',
            element: <Home></Home>
         },
         {
            path: '/services',
            element: <Services></Services>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/signup',
            element: <SignUp></SignUp>
         },
         {
            path: '/review/:id',
            element: <Review></Review>,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
         },
         {
            path: '/reviews',
            element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
         },
         {
            path: '/blogs',
            element: <Blogs></Blogs>
         },
         {
            path: '/allreviews',
            element: <AllReviews></AllReviews>
         }
      ]
   }
])

export default router;