import React from 'react'
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../Pages/ErrorPage';
import Root from '../Layout/Root';

const routes = createBrowserRouter([

        {
          path: "/",
          element: <Root />,
          errorElement: <ErrorPage />,
        },
      ])
    
  

export default routes

