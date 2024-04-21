import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Works from "../pages/Works/Works";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/', 
          element: <Home></Home>
        }, 
        {
          path: '/works', 
          element: <Works></Works>
        }
      ]
    },
  ]);

export default router; 