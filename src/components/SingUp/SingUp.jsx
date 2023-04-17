import React, { useContext, useState } from 'react';

import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';




const SingUp = () => {
const [error,setError]=useState('');

const {singUpData}=useContext(AuthContext)






    const handelSingUp=(e)=>{

        event.preventDefault();

        const email= e.target.email.value;
        const password= e.target.password.value;
        const conformPassword= e.target.conformPassword.value;
         

        setError('')
        if(password !== conformPassword){

          setError('Your password did not match')
          return

        }
        else if(password.length <6){
          setError('minimum 6 digit')
          return
        }
        
        singUpData(email,password)
        .then(a=> {
          console.log(a)

          e.target.reset()
        })
        .catch(e=> console.log(e))
    }
    return (

        <div className='py-5'>
        <div className='form-container py-5'>
            <h2 className='form-title text-center mb-5'>Sing Up</h2>

            <form onSubmit={handelSingUp}>
             <div className="mb-5">
              <label  className="form-label">Email address</label>
              <input type="email" name='email' className="form-control" aria-describedby="emailHelp" required/>
              
            </div>
            <div className="mb-5">
              <label  className="form-label">Password</label>
              <input type="password" name='password' className="form-control"/>
            </div>
            <div className="mb-5">
              <label  className="form-label">Conform Password</label>
              <input type="password" name='conformPassword' className="form-control" required />
            </div>
           
             <div className='mb-5'>
             <button type="submit" className=" w-100 login-btn">SingUp</button>
             </div>

              <p className='text-center mb-5'>Already have an account? <Link to='/login' className='singUp-link'>Login</Link></p>

              <p className='text-danger'>{error}</p>

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

export default SingUp;