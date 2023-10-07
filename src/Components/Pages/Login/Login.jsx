import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

  const { signIn } = useContext(AuthContext)

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('');
        setSuccess('');

        signIn(email,password)
.then(result =>{
    const user = result.user;
    console.log(user)
    if(!user.emailVerified){
      toast.error('Please Varify Your Account')
      return;
    }else{
    setSuccess('Log in Successful');}
})
.catch(error=>{
    console.log(error.message)
    if(error.message === "Firebase: Error (auth/invalid-login-credentials)."){
        const errormessage = 'Invalid login credentials'
        setError(errormessage)
    }else if(error.message ==="Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."){
        const errmessage = 'Access to this account has been temporarily disabled due to many failed login attempts. You can try again later.'
        setError(errmessage)
    }else if(error.message === 'Firebase: Error (auth/missing-password).'){
// toast 
toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <p className='text-black'><strong>Please Type Your Password</strong></p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
// toast 
    } 
    else{
        setError(error.message)
    }
})
    }
  return (
<>




<div className="min-h-screen bg-base-200">
<div className="bg h-[180px] w-full md:h-[360px] sm:h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
       <p className='xl:text-5xl md:text-4xl text-3xl font-bold border-b-2 border-red-600 p-3'>LogIn Now!</p>
      </div>
      
  <div className="w-full">
    <div className="card w-full mx-auto mt-28 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogIn} className="form-control">
         
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
{/* google button  */}
        <button
    className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 bg-white hover:border-slate-400 hover:text-slate-900 p-4">
    <img className="w-6 h-6 ms-auto" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
    <span className='me-auto'>Login with Google</span>
</button>
{/* google button  */}
{error && <p className="text-red-700">{error}</p>}
        {success && <p className="text-success">{success}</p>}
        <p>New to our website? Please <Link className='text-blue-800 font-bold' to={'/register'}>Register</Link></p>
      </div>
    </div>
    <Toaster
  position="top-center"
  reverseOrder={false} />

  </div>
</div>
</>
  )
}

export default Login