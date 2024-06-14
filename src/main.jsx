import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home';
import Sales from './Pages/Sales';
import Products from './Pages/Products';
import PurchaseDetails from './Pages/PurchaseDetails';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import AuthProvider from './components/AuthProvider.jsx';
import Main from './components/Home/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/purchase',
        element:<PurchaseDetails></PurchaseDetails>
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
        path:'/Register',
        element:<Register></Register>
      },
      {
        path:'/sales',
        element:<Sales></Sales>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
