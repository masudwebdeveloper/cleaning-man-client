import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import Main from "../components/Layout/Main";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         }
      ]
   }
])

export default router;