import { createBrowserRouter } from "react-router-dom";
import AllReviews from "../components/Home/AllReviews/AllReviews";
import Home from "../components/Home/Home/Home";
import Reviews from "../components/Home/Reviews/Reviews";
import Services from "../components/Home/Services/Services";
import Main from "../components/Layout/Main";
import Blogs from "../components/Others/Blogs/Blogs";
import EditPage from "../components/Share/EditPage/EditPage";
import Login from "../components/Share/Login/Login";
import Review from "../components/Share/Review/Review";
import SignUp from "../components/Share/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            loader: ({ params }) => fetch(`https://cleaning-man-server.vercel.app/services/${params.id}`)
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
            element: <PrivateRoute><AllReviews></AllReviews></PrivateRoute>
         },
         {
            path: '/editpage/:id',
            element: <EditPage></EditPage>,
            loader: ({ params }) => fetch(`https://cleaning-man-server.vercel.app/reviews/${params.id}`)
         }

      ]
   }
])

export default router;