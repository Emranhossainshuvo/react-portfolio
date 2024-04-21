import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Works from "../pages/Works/Works";
import Experience from "../pages/Experience/Experience";
import Errorpage from "../pages/Errorpage/Errorpage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: '/', 
          element: <Home></Home>
        }, 
        {
          path: '/works', 
          element: <Works></Works>
        }, 
        {
          path: '/experience', 
          element: <Experience></Experience>
        }
      ]
    },
  ]);

export default router; 