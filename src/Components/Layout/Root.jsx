import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../FixedRoute/Nav'
import Footer from '../FixedRoute/Footer';

const Root = () => {

  return (
<>
<Nav />
<Outlet />
<Footer />
</>
  )
}

export default Root