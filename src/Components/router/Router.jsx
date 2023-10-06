import React from 'react'
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../Pages/ErrorPage';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';

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
          ]
        },
      ])
    
  

export default routes

