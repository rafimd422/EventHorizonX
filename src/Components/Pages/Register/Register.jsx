import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import 'firebase/auth';
import auth from '../../../../firebase.config';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { signUp: contextSignUp, verify } = useContext(AuthContext);

  const Navigate = useNavigate();
  const loginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebase.auth(), provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Registration successful!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTimeout(() => {
          Navigate('/');
        }, 3000);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };

  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value; 
    const name = e.target.name.value;
    setSuccess('');
    setError('');

    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    if (!hasCapitalLetter) {
      setError('Password must contain at least one capital letter');
      return;
    }

    if (!hasSpecialCharacter) {
      setError('Password must contain at least one special character');
      return;
    }

    contextSignUp(email, password) 

      .then((result) => {
        const user = result.user;
        console.log(user); 

              // update profile
      updateProfile(user.auth.currentUser, {
        displayName: name,
        photoURL: photoURL
      })
        .then(() => {
          console.log('Profile updated successfully');
        })
        .catch((error) => {
          console.error('Error updating profile:', error.message);
        });       
      })
      .then(() => {
        toast.success('Registration Successful!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        navigate('/')
      })
      .catch((error) => {
        console.error('Error', error);
        setError(error.message);
      });


      
  };
  return (
    <div className="min-h-screen bg-base-200">
    <div className="bg h-[180px] w-full md:h-[360px] sm:h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <p className="xl:text-5xl md:text-4xl text-3xl font-bold border-b-2 border-red-600 p-3">
        Register Now!
      </p>
    </div>

    <div className="w-full">
      <div className="card w-full mx-auto md:mt-12 mt-28 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleRegister} className="form-control">
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="Photo">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                id="photoURL"
                placeholder="Photo Url"
                name="PhotoURl"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                id="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {error && <p className="text-red-700">{error}</p>}
          {success && <p className="text-success">{success}</p>}
          {/* google button  */}
          <button
            onClick={loginGoogle}
            className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 bg-white hover:border-slate-400 hover:text-slate-900 p-4"
          >
            <img
              className="w-6 h-6 ms-auto"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span className="me-auto">Continue with Google</span>
          </button>
          {/* google button  */}
          <p>
            Already Have An Account? Please{' '}
            <Link className="text-blue-800 font-bold" to={'/login'}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </div>
  );
};

export default Register;
