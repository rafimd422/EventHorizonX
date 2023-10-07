import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

const {SignUp} = useContext(AuthContext)


const handleRegister = e =>{
e.preventDefault()
const email = e.target.email.vlaue;
const password = e.target.password.vlaue
SignUp(email,password)
.then(result =>{
  const user = result.user;
  console.log(user)

  setSuccess('Account Created Successfully')
  
})
.catch(error =>{
  console.log(error.message)
  setError(error.message)
})
}






  return (
<div className="min-h-screen bg-base-200">
<div className="bg h-[180px] w-full md:h-[360px] sm:h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
       <p className='xl:text-5xl md:text-4xl text-3xl font-bold border-b-2 border-red-600 p-3'>Register Now!</p>
      </div>
      
  <div className="w-full">
    <div className="card w-full mx-auto md:mt-12 mt-28 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleRegister} className="form-control">
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input type="text" id="name" placeholder="Name" name="name" required className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input type="text" id="email" placeholder="email" name="email" required className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input type="password" id="password" placeholder="password" name="password" className="input input-bordered" />
            <label className="label">
              <a href="/forgetpass" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        {error && <p className="text-red-700">{error}</p>}
        {success && <p className="text-success">{success}</p>}
{/* google button  */}
        <button
    className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 bg-white hover:border-slate-400 hover:text-slate-900 p-4">
    <img className="w-6 h-6 ms-auto" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
    <span className='me-auto'>Login with Google</span>
</button>
{/* google button  */}

        <p>Already Have An Account? Please <Link className='text-blue-800 font-bold' to={'/login'}>Log In</Link></p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Register
