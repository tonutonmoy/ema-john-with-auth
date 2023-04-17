import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';

const Login = () => {
  const {loginData}=useContext(AuthContext);

  const navigate=useNavigate();

  const location=useLocation()


    const from= location?.state?.from?.pathname || '/'

  console.log(location,from)

    const handelLogin=(e)=>{

        event.preventDefault();

        const email= e.target.email.value;
        const password= e.target.password.value;

       loginData(email,password)
       .then(a=> {
        console.log(a)
        
       

        navigate(from, {replace: true})

        e.target.reset()
      })
       .catch(e=> console.log(e))
    }
    return (

        <div className='py-5'>
        <div className='form-container py-5'>
            <h2 className='form-title text-center mb-5'>Login </h2>

            <form onSubmit={handelLogin}>
             <div className="mb-5">
              <label className="form-label">Email address</label>
              <input type="email" name='email' className="form-control" aria-describedby="emailHelp"/>
              
            </div>
            <div className="mb-5">
              <label  className="form-label">Password</label>
              <input type="password" name='password' className="form-control"/>
            </div>
           
             <div className='mb-5'>
             <button type="submit" className=" w-100 login-btn">Login</button>
             </div>

              <p className='text-center mb-5'>New to Ema-john? <Link to='/singUp' className='singUp-link'>Create New Account</Link></p>

              <div className='d-flex gap-4 mb-5'>
                <hr className='w-50' />
                <span>or</span>

                <hr className='w-50' />
              </div>

              <div className=''>
             <button   className=" border w-100 ">Continue with Google</button>
             </div>
             </form>
        </div>

        </div>
    );
};

export default Login;