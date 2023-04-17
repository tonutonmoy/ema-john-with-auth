import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import SingUp from './components/SingUp/SingUp';
import Provider from './components/Provider/Provider';
import PrivateRoutes from './components/Routes/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <PrivateRoutes>
           <Inventory></Inventory>
        </PrivateRoutes>
      
      },
      {
        path:'checkout',
        element: <PrivateRoutes>
          <Checkout></Checkout>
        </PrivateRoutes>
      },
      {
        path: 'login',
        element:  <Login></Login>
      
      },

      {
        path: 'singUp',
        element: <SingUp></SingUp>
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
   <Provider>
   <RouterProvider router={router} />
   </Provider>
  
  </React.StrictMode>,
)
