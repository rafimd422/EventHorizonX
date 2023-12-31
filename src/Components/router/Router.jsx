import React from 'react'
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../Pages/ErrorPage';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Event from '../Pages/Event/Event';
import Blog from '../Pages/Blog/Blog';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/ServiceDetails';
import PrivateRoute from '../../Context/privateRoute/PrivateRoute';

const routes = createBrowserRouter([

        {
          path: "/",
          element: <Root />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/event",
              element: <PrivateRoute><Event /></PrivateRoute>,
            },
            {
              path: "/blog",
              element: <PrivateRoute><Blog /></PrivateRoute>,
            },
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
            {
              path: "/serviceDetails/:id",
              element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
              loader: ()=> fetch('/services.json')
            },
          ]
        },
      ])
    
  

export default routes

