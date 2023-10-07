import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import routes from './Components/router/Router';
import AuthProvider from './Context/AuthProvider';


const router = routes;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />

</AuthProvider>
  </React.StrictMode>,
)
