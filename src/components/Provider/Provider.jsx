import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from '../../Firebase/firebase.config';
import { useLocation } from 'react-router-dom';

export const AuthContext= createContext(null)

const auth= getAuth(app)

const Provider = ({children}) => {
 


     const [user,setUser]=useState(null);

     const [loading,setLoading]=useState(true);

    

     const singUpData=(email,password)=>{

           
        setLoading(true)

      return  createUserWithEmailAndPassword(auth,email,password) 

     }

    const loginData=(email,password)=>{

          setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    const logOut=()=>{

        return signOut(auth)
    }

      useEffect(()=>{
   
      const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{

           setUser(currentUser)

          
          
            setLoading(false)

          
        })

         
        return ()=>{
                
            unsubscribe()
        }


      },[])




      
     const providerInfo={
        user,singUpData,loginData,logOut,loading
     }

      
    return (
        <AuthContext.Provider value={providerInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;