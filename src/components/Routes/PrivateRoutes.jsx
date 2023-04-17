import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    
    const {user,loading}=useContext(AuthContext);

    const location=useLocation()
 


    if(loading){
        return <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }

    if (user){
         return children;
    }
   return  <Navigate to='/login' state={{from: location}} replace></Navigate>};

export default PrivateRoutes;