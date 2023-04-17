import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';



const Header = () => {

    const {user,logOut}=useContext(AuthContext)


     const handelLogOut=()=>{
        logOut()
        .then(a=> console.log(a))
        .catch(e=> console.log(e))

     }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/checkout">checkout</Link>
                <Link to="/login">Login</Link>
                <Link to="/singUp">SingUp</Link>
                {user &&  <span className='text-white ps-3'>welcome  <button className='px-3 py-2 ms-3 ' onClick={handelLogOut} >logOut</button> </span>}
             
            </div>
        </nav>
    );
};

export default Header;