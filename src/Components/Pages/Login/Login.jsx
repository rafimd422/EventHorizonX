import { Link } from 'react-router-dom';

const Login = () => {


  return (
<>




<div className="min-h-screen bg-base-200">
<div className="bg h-[180px] w-full md:h-[360px] sm:h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
       <p className='xl:text-5xl md:text-4xl text-3xl font-bold border-b-2 border-red-600 p-3'>LogIn Now!</p>
      </div>
      
  <div className="w-full">
    <div className="card w-full mx-auto mt-28 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
        <form className="form-control">
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input type="text" id="email" placeholder="email" name="email" className="input input-bordered" />
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

        <p>New to our website? Please <Link className='text-blue-800' to={'/register'}>Register</Link></p>
      </div>
    </div>


  </div>
</div>
</>
  )
}

export default Login