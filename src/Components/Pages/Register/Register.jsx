import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import 'firebase/auth';
import { Helmet, HelmetData } from 'react-helmet-async';
import axios from 'axios';


const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { signUp: contextSignUp } = useContext(AuthContext);

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


// preparing our api to make image upload input working
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY
    const api = `https://api.imgbb.com/1/upload?key=${apiKey}`
    const photo = e.target.photo.files[0];
    const formData = new FormData();
    formData.append('image', photo);
    axios.post(api, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        const photoURL = response.data?.data?.display_url;
        const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    setSuccess('');
    setError('');

    const hasCapitalLetter = /[A-Z]/.test(password);

    if (!hasCapitalLetter) {
      setError('Password must contain at least one capital letter');
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
      })
      .catch(error => {
        console.error('Error uploading photo:', error.message);
      });
    


    
  };


  const helmetData = new HelmetData({});
  
  return (
<>
    <Helmet helmetData={helmetData}>
        <title>Register | EventHorizonX</title>
      </Helmet>
    <div className="min-h-screen bg-base-200">
    <div className="bg h-[180px] w-full md:h-[360px] sm:h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <p className="xl:text-5xl md:text-4xl text-3xl font-bold border-b-2 border-red-600 p-3">
        Register Now!
      </p>
    </div>

    <div className="w-full">
      <div className="card w-full mx-auto md:mt-12 mt-24 max-w-md shadow-2xl bg-base-100">
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
            <div className="form-control">
            <div className="my-3 w-96">
          <label
            htmlFor="Photo"
            className="label"
          > <span className='label-text'>          Put Your Photo here
          </span>
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-lg input-bordered input bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
            id="Photo"
            type="file"
            required
            name="photo"
          />
      </div>
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
  </>
  );
};

export default Register;
