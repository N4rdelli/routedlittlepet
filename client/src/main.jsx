import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from './routes/Home.jsx';
import Error from './routes/Error.jsx';
import Products from './routes/Products.jsx';
import Services from './routes/Services.jsx';
import About from './routes/About.jsx';
import Login from './routes/Login.jsx';
import Singup from './routes/Singup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {path:"/", element:<Home/>},
      {path:"products", element:<Products/> },
      {path:"services", element:<Services/> },
      {path:"about", element:<About/> },
      {path:"login", element:<Login/> },
      {path:"singup", element:<Singup/> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
