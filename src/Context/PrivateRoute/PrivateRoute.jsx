import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { BallTriangle } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext)

if(loading){
  return (
    <div className='flex justify-center items-center h-screen mb-12'>
    <BallTriangle
  height={300}
  width={300}
  radius={5}
  color="blue"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/></div>
  )
}

if(user !== null ){
  return children;
}
return <Navigate to={'/login'}/>

}

export default PrivateRoute
