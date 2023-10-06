import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../ShereAble/Nav'
import Footer from './../ShereAble/Footer';

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