import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Works from "../pages/Works/Works";
import Errorpage from "../pages/Errorpage/Errorpage";
import Skills from "../pages/Skills/Skills";



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
          path: '/skills', 
          element: <Skills></Skills>
        }
      ]
    },
  ]);

export default router; 